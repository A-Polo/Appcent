(function () {
	$.fn.exists = function () {
		return this.length !== 0;
	};

	window.ac = {};

	var classNames = {
		hide: 'hide',
		acLang: 'ac-lang',
		acOpen: 'ac-open',
		acSentAppBtn: 'ac-sent-app-btn',
		acInputBlock: 'ac-input-block',

		acMobileMenu: 'ac-mobile-menu',
		acShowMenu: 'ac-show-menu',
		acCloseMenu: 'ac-close-menu',

		acIphone: 'ac-iphone',

		acAppleBtn: 'ac-apple-btn',
		acGoogleBtn: 'ac-google-btn',
		acNoUrl: 'ac-no-url',

		acNoScroll: 'ac-no-scroll'
	};

	var ids = {};

	var buildSelectors = function (selectors, source, characterToPrependWith) {
		$.each(source, function (propertyName, value) {
			selectors[propertyName] = characterToPrependWith + value;
		});
	};

	ac.buildSelectors = function (classNames, ids) {
		var selectors = {};
		if (classNames) {
			buildSelectors(selectors, classNames, ".");
		}
		if (ids) {
			buildSelectors(selectors, ids, "#");
		}
		return selectors;
	};

	var selectors = ac.buildSelectors(classNames, ids);

	var $acLang = $(selectors.acLang),
		$acSentAppBtn = $(selectors.acSentAppBtn),
		$acInputBlock = $(selectors.acInputBlock),
		$acAppleBtn = $(selectors.acAppleBtn),
		$acGoogleBtn = $(selectors.acGoogleBtn),
		$acMobileMenu = $(selectors.acMobileMenu),
		$acCloseMenu = $(selectors.acCloseMenu),
		$acIphone = $(selectors.acIphone),
		$body = $('body'),
		$html = $('html');
	var $acMobileMenu = $('.ac-mobile-menu');
	var $acPopupBox = $('.ac-popup-box');
	var $acPopupClose = $('.ac-popup-close');

	$(function () {
		$acLang.on('click', function () {
			$(this).toggleClass('ac-dropdown-show')
		});

		$acMobileMenu.on('click', function () {
			$body.addClass('ac-show-menu');
			noScrollBody();
		});
		$acCloseMenu.on('click', function () {
			$body.removeClass('ac-show-menu');
			noScrollBody();
		});

		if ($html.hasClass('android')) {
			$acAppleBtn.addClass(classNames.acNoUrl);
			noScrollBody();
			showWindowSend();
		}

		if ($html.hasClass('ios')) {
			$acGoogleBtn.addClass(classNames.acNoUrl);
			noScrollBody();
			showWindowSend();
		}

		$acPopupClose.on('click', function () {
			$acPopupBox.addClass('hide');
			noScrollBody();
		});

		showWindowSend();
	});

	var showWindowSend = function() {
		$(selectors.acNoUrl).on('click', function(e){
			var elem = e.target || e.srcElement;
			e.preventDefault();
			$acPopupBox.removeClass('hide');
			//noScrollBody();
			return false;
		});
	};

	var noScrollBody = function() {
		$body.toggleClass(classNames.acNoScroll);
	};
})();
