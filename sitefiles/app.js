/*
 * Copyright (c) Dominick Baier, Brock Allen.  All rights reserved.
 * see license
 */

/// <reference path="../libs/angular/angular.1.2.13.js" />

function autoRedirect(options) {
    if (options.autoRedirect && options.redirectUrl) {
        if (options.autoRedirectDelay < 0) {
            options.autoRedirectDelay = 0;
        }
        window.setTimeout(function () {
            if (options.autoRedirectDelay == null || options.autoRedirectDelay == 0)
                document.getElementsByTagName("body")[0].style.display = "none";

            window.location.replace(options.redirectUrl);
        }, options.autoRedirectDelay * 1000);
    }
}

window.identityServer = (function () {
    "use strict";

    var identityServer = {
        getModel: function () {
            var modelJson = document.getElementById("modelJson");
            var encodedJson = '';
            if (typeof (modelJson.textContent) !== undefined) {
                encodedJson = modelJson.textContent;
            } else {
                encodedJson = modelJson.innerHTML;
            }
            var json = Encoder.htmlDecode(encodedJson);
            var model = JSON.parse(json);
            return model;
        }
    };

    return identityServer;
})();

(function () {
    "use strict";

    (function () {
        var app = angular.module("app", []);


        app.controller("LayoutCtrl", function ($scope, Model, $sce) {
            $scope.model = Model;
            $scope.registerCopyHtml = $sce.trustAsHtml(Model.registerCopyHtml);
            $scope.loginCopyHtml = $sce.trustAsHtml(Model.loginCopyHtml);
            $scope.extraLinksHtml = $sce.trustAsHtml(Model.extraLinksHtml);
            $scope.footerHtml = $sce.trustAsHtml(Model.footerHtml);
            $scope.headerHtml = $sce.trustAsHtml(Model.headerHtml);
            $scope.notification = $sce.trustAsHtml(Model.notification);

            

            $scope.loginsection = getSection();

            $scope.$watch('loginsection', function () {
                var expires = new Date();
                expires.setHours(expires.getHours() + 1);
                document.cookie = "loginsection=" + $scope.loginsection + ";expires=" + expires + ";path=/;domain=canon.com.au";

                $(".content-section").hide();
                $(".content-section[data-section='" + $scope.loginsection + "']").show();
            });
        });

        app.directive("antiForgeryToken", function () {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    token: "="
                },
                template: "<input type='hidden' name='{{token.name}}' value='{{token.value}}'>"
            };
        });

        app.directive("focusIf", function ($timeout) {
            return {
                restrict: 'A',
                scope: {
                    focusIf:'='
                },
                link: function (scope, elem, attrs) {
                    if (scope.focusIf) {
                        $timeout(function () {
                            elem.focus();
                        }, 100);
                    }
                }
            };
        });
    })();

    (function () {
        var model = identityServer.getModel();
        angular.module("app").constant("Model", model);

        if (model.waitUntilAllCompleted) return;

        autoRedirect(model);
        
    })();

})();

function getSection() {
    var loginSection = "mycanon";

    var sectionCookie = $.grep(document.cookie.split(';'), function (cookie, i) { return cookie.trim().split('=')[0] == "loginsection" });

    if (sectionCookie != null && sectionCookie.length > 0 && sectionCookie[0].split('=').length == 2)
        loginSection = sectionCookie[0].split('=')[1];

    return loginSection;
}

$().ready(function () {
    var section = getSection();

    $(".content-section").hide();
    $(".content-section[data-section='" + section + "']").show();
});