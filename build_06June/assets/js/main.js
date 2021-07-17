(function ($) {
	'use strict';

	$(window).on('load', function () {
		$('.preloader').delay('500').fadeOut(2000);
	});

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 0) {
			document.body.style.paddingTop = '90px';
			document.body.classList.add('fixed-nav');
		} else {
			document.body.style.paddingTop = '0px';
			document.body.classList.remove('fixed-nav');
		}

		if (window.innerWidth < 767) {
			document.body.classList.remove('fixed-nav');
			document.body.style.padding = '0px';
		}

		var scrollButton = $('#scroll-top');
		if ($(this).scrollTop() >= 250) {
			scrollButton.show();
		} else {
			scrollButton.hide();
		}
	});

	$(document).ready(function () {
		$(document).on('click', '#scroll-top', function () {
			$('html, body').animate({ scrollTop: 0 }, 1000);
		});
		$(document).on('click', '.side-menu-open', function () {
			$('.user-nav-container').addClass('active');
		});
		$(document).on('click', '.dashboard-nav-trigger-btn', function () {
			$('.dashboard-nav-container').addClass('active');
		});
		$(document).on('click', '.humburger-menu .side-menu-close', function () {
			$(
				'.side-nav-container, .user-nav-container, .dashboard-nav-container'
			).removeClass('active');
		});
		$('.hero-slide').owlCarousel({
			items: 1,
			nav: true,
			dots: true,
			autoplay: false,
			loop: true,
			smartSpeed: 6000,
			animateOut: 'slideOutRight',
			animateIn: 'fadeIn',
			active: true,
			navText: [
				"<i class='fa fa-chevron-left'></i>",
				"<i class='fa fa-chevron-right'></i>",
			],
		});
		$('.course-carousel').owlCarousel({
			loop: true,
			items: 3,
			nav: true,
			dots: false,
			smartSpeed: 500,
			autoplay: false,
			margin: 30,
			navText: [
				"<i class='fa fa-chevron-left'></i>",
				"<i class='fa fa-chevron-right'></i>",
			],
			responsive: { 320: { items: 1 }, 992: { items: 3 } },
		});
		$('.view-more-carousel').owlCarousel({
			loop: true,
			items: 2,
			nav: false,
			dots: true,
			smartSpeed: 500,
			autoplay: true,
			margin: 15,
			responsive: { 320: { items: 1 }, 768: { items: 2 } },
		});
		$('.view-more-carousel-2').owlCarousel({
			loop: true,
			items: 3,
			nav: false,
			dots: true,
			smartSpeed: 500,
			autoplay: true,
			margin: 15,
			responsive: { 320: { items: 1 }, 768: { items: 3 } },
		});
		$('.testimonial-carousel').owlCarousel({
			loop: true,
			items: 5,
			nav: false,
			dots: true,
			smartSpeed: 500,
			autoplay: false,
			margin: 30,
			autoHeight: true,
			responsive: {
				320: { items: 1 },
				767: { items: 2 },
				992: { items: 3 },
				1025: { items: 4 },
				1440: { items: 5 },
			},
		});
		$('.testimonial-carousel-2').owlCarousel({
			loop: true,
			items: 2,
			nav: true,
			dots: false,
			smartSpeed: 500,
			autoplay: false,
			margin: 30,
			autoHeight: true,
			navText: [
				"<i class='fa fa-chevron-left'></i>",
				"<i class='fa fa-chevron-right'></i>",
			],
			responsive: { 320: { items: 1 }, 768: { items: 2 } },
		});
		$('.client-logo').owlCarousel({
			loop: true,
			items: 5,
			nav: false,
			dots: false,
			smartSpeed: 500,
			autoplay: false,
			responsive: {
				0: { items: 2 },
				481: { items: 3 },
				768: { items: 4 },
				992: { items: 5 },
			},
		});
		$('.blog-post-carousel').owlCarousel({
			loop: true,
			items: 3,
			nav: false,
			dots: true,
			smartSpeed: 500,
			autoplay: false,
			margin: 30,
			responsive: { 320: { items: 1 }, 992: { items: 3 } },
		});
		$('[data-toggle="tooltip"]').tooltip();
		$('.faq-body > .faq-panel.is-active').children('.faq-content').show();
		$('.faq-body > .faq-panel').on('click', function () {
			$(this)
				.siblings('.faq-panel')
				.removeClass('is-active')
				.children('.faq-content')
				.slideUp(200);
			$(this)
				.toggleClass('is-active')
				.children('.faq-content')
				.slideToggle(200);
		});
		$(document).on('click', '.portfolio-filter li', function () {
			var filterData = $(this).attr('data-filter');
			$('.portfolio-list').isotope({ filter: filterData });
			$('.portfolio-filter li').removeClass('active');
			$(this).addClass('active');
		});
		$('.portfolio-list').isotope({
			itemSelector: '.single-portfolio-item',
			percentPosition: true,
			masonry: { columnWidth: '.single-portfolio-item', horizontalOrder: true },
		});
		$('[data-fancybox="gallery"]').fancybox({
			buttons: [
				'zoom',
				'share',
				'slideShow',
				'fullScreen',
				'download',
				'thumbs',
				'close',
			],
		});
		$.fancybox.defaults.animationEffect = 'zoom';
		$('[data-fancybox="video"]').fancybox({
			buttons: ['share', 'fullScreen', 'close'],
		});
		if ($('#map').length) {
			initMap('map', 40.717499, -74.044113, 'images/map-marker.png');
		}

		$('.pentagon_slide').hiSlide();

		// $('#controls').on('click', '.goto-slide', function (ev) {
		// 	$box.boxSlider('showSlide', $(this).data('slideindex'));
		// 	ev.preventDefault();
		// });

		var $box = $('#box'),
			$indicators = $('.goto-slide'),
			$effects = $('.effect'),
			$timeIndicator = $('#time-indicator'),
			slideInterval = 5000;

		var switchIndicator = function ($c, $n, currIndex, nextIndex) {
			$timeIndicator.stop().css('width', 0);
			$indicators.removeClass('current').eq(nextIndex).addClass('current');
		};

		var startTimeIndicator = function () {
			$timeIndicator.animate({ width: '680px' }, slideInterval);
		};

		// initialize the plugin with the desired settings
		// $box.boxSlider({
		// 	speed: 1000,
		// 	autoScroll: true,
		// 	timeout: slideInterval,
		// 	next: '#next',
		// 	prev: '#prev',
		// 	pause: '#pause',
		// 	effect: 'scrollHorz3d',
		// 	blindCount: 15,
		// 	onbefore: switchIndicator,
		// 	onafter: startTimeIndicator,
		// });

		startTimeIndicator();

		// pagination isn't built in simply because it's easy to
		// roll your own with the plugin API methods
		// $('#controls').on('click', '.goto-slide', function (ev) {
		// 	$box.boxSlider('showSlide', $(this).data('slideindex'));
		// 	ev.preventDefault();
		// });

		$('#effect-list').on('click', '.effect', function (ev) {
			var $effect = $(this);

			// $box.boxSlider('option', 'effect', $effect.data('fx'));
			$effects.removeClass('current');
			$effect.addClass('current');

			switchIndicator(null, null, 0, 0);
			ev.preventDefault();
		});

		$(document).on('click', '.input-number-increment', function () {
			var $input = $(this).parents('.input-number-group').find('.input-number');
			var val = parseInt($input.val(), 10);
			$input.val(val + 1);
		});
		$(document).on('click', '.input-number-decrement', function () {
			var $input = $(this).parents('.input-number-group').find('.input-number');
			var val = parseInt($input.val(), 10);
			$input.val(val - 1);
		});
		// $('.card-preview').tooltipster({
		// 	contentCloning: true,
		// 	interactive: true,
		// 	side: 'right',
		// 	delay: 100,
		// 	animation: 'swing',
		// });
		// $('.filer_input').filer({ limit: 10, maxSize: 100, showThumbs: true });
		// if ($('.datepicker').length) {
		// 	$('.datepicker').dateTimePicker({ format: 'dd/MM/yyyy' });
		// }
		// if ($('.emoji-picker').length) {
		// 	$('.emoji-picker').emojioneArea({ pickerPosition: 'top' });
		// }
		// if ($('.counter').length) {
		// 	$('.counter').counterUp({ delay: 10, time: 1000 });
		// }
		// $('.course-list > .course-item-link').on('click', function () {
		// 	$(this).addClass('active');
		// 	$(this).siblings().removeClass('active');
		// 	if ($(this).is('.active-resource')) {
		// 		$('.lecture-viewer-text-wrap').addClass('active');
		// 	} else if ($(this).not('.active-resource')) {
		// 		$('.lecture-viewer-text-wrap').removeClass('active');
		// 	}
		// });
		$(document).on('click', '.sidebar-close', function () {
			$(
				'.course-dashboard-sidebar-column, .course-dashboard-column, .sidebar-open'
			).addClass('active');
		});
		$(document).on('click', '.sidebar-open', function () {
			$(
				'.course-dashboard-sidebar-column, .course-dashboard-column, .sidebar-open'
			).removeClass('active');
		});
		$(document).on('click', '.ask-new-question-btn', function () {
			$('.new-question-wrap, .question-overview-result-wrap').addClass(
				'active'
			);
		});
		$(document).on(
			'click',
			'.question-meta-content, .question-replay-btn',
			function () {
				$('.replay-question-wrap, .question-overview-result-wrap').addClass(
					'active'
				);
			}
		);
		$(document).on('click', '.back-to-question-btn', function () {
			$(
				'.new-question-wrap, .question-overview-result-wrap, .replay-question-wrap'
			).removeClass('active');
		});
		$(document).on('click', '.swapping-btn', function () {
			$(this).siblings('.bookmark-icon').toggleClass('active');
			var el = $(this);
			el.text() == el.data('text-swap')
				? el.text(el.data('text-original'))
				: el.text(el.data('text-swap'));
		});
		$(document).on('click', '.search-form-btn', function () {
			$('.search-course-form').toggleClass('active');
		});
		$(document).on('click', '.search-close-icon', function () {
			$('.search-course-form').removeClass('active');
		});
		$(document).on('click', '.collection-link', function () {
			$(this).children('.collection-icon').toggleClass('active');
		});
		// $('.sort-ordering-select').selectpicker({
		// 	liveSearch: true,
		// 	liveSearchPlaceholder: 'Search',
		// 	liveSearchStyle: 'contains',
		// 	size: 5,
		// });
		$('#teamModal').on('show.bs.modal', function (event) {
			var button = $(event.relatedTarget);
			var recipient = button.data('whatever');
			var modal = $(this);
			modal.find('.modal-title').text(recipient + "'s Bio");
		});
	});
})(jQuery);
