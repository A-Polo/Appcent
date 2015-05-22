(function(){
    var lang = $('.ac-lang');
    var DropLang = $('.ac-dropdown');
    var MobileMenu = $('.ac-mobile-menu');
    var CloseMenu = $('.ac-close-menu');
    var btn = $('.ac-btn');
    var Popup = $('.ac-popup-box');
    var PopupClose = $('.ac-popup-close');
    var body = $('body');
    $(function(){
        lang.on('click', function(){
            DropLang.toggleClass('ac-dropdown-show')
        });
        MobileMenu.on('click', function(){
            body.addClass('ac-show-menu');
        });
        CloseMenu.on('click', function(){
            body.removeClass('ac-show-menu');
        });
        btn.on('click', function(){
            Popup.removeClass('ac-popup-display_none')
        });
        PopupClose.on('click', function(){
            Popup.addClass('ac-popup-display_none')
        });
    });
})();
