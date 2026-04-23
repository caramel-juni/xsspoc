$(function () {
    var accordActive = false;
    if ($('.footer-login').length > 0) {
        accord();
        $(window).resize(function () {
            accord();
        });
    }
    function accord() {
        if (accordActive) {
            return null;
        }
        if (($('body').width() <= 1000)) {
            $('.footer-login .footer-links h3').on('click', function () {
                $('.footer-login .footer-links h3').not(this).removeClass('active');
                $(this).toggleClass('active');
            });
        }
    }
    function read_cookie(k, r) { return (r = RegExp('(^|; )' + encodeURIComponent(k) + '=([^;]*)').exec(document.cookie)) ? r[2] : null; }
    var domain = read_cookie('canon.sts.hostname');
    if (domain === null) {
        //do nothing for now
    } else {
        if (domain.indexOf(".au") > 0) {
            $('body').addClass('isAU');
        } else {
            $('body').addClass('isNZ');
        }
    }
});
