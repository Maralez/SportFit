(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
  var $body = $('body');

  $('.button-gallery').on('click', function () {
    $(this).next().magnificPopup('open');
  });

  $('.gallery-images').each(function () {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true,
        navigateByImgClick: true
      },
      fixedContentPos: false
    });
  });

  $('.content_slider').each(function () {
    var $slider = $(this);
    var $nextButtons = $slider.find('.js__slider-next');

    $slider.slick({
      arrows: false,
      dots: true,
      infinite: true,
      dotsClass: 'slider-dots'
    });

    $nextButtons.on('click', function (e) {
      e.preventDefault();

      $slider.slick('slickNext');
    });
  });

  $('.advantage-slider').slick({
    slidesToScroll: 3,
    centerMode: true,
    infinite: true,
    variableWidth: true,
    prevArrow: '<button class="slick-prev"></button>',
    nextArrow: '<button class="slick-next"></button>'
  });

  $('.advantage-sliderino').slick({
    slidesToScroll: 3,
    centerMode: true,
    infinite: true,
    variableWidth: true,
    prevArrow: '<button class="slick-prev"></button>',
    nextArrow: '<button class="slick-next"></button>',
    mobileFirst: true,
    responsive: [{
      breakpoint: 900,
      settings: 'unslick'
    }]
  });

  $('.js__goto').each(function () {
    var $link = $(this);
    var $target = $($link.attr('href'));

    $link.on('click', function (e) {
      e.preventDefault();

      $body.trigger('hideMenu');
      $('html, body').animate({
        scrollTop: $target.offset().top
      }, 700, 'swing');
    });
  });

  $('.js__tabs').each(function () {
    var CLASS_ACTIVE = 'is__active';

    var $box = $(this);
    var $switchers = $box.find('.js__tabs-switchers').children();
    var $tabs = $box.find('.js__tabs-container').children();

    $switchers.on('click', function () {
      var index = $(this).index();

      $switchers.removeClass(CLASS_ACTIVE).eq(index).addClass(CLASS_ACTIVE);

      $tabs.removeClass(CLASS_ACTIVE).filter(':nth-child(' + (index + 1) + ')').addClass(CLASS_ACTIVE);
    });
  });

  $('.js__faq').each(function () {
    var CLASS_ACTIVE = 'is__active';

    var $block = $(this);
    var $link = $block.find('.js__faq-question');
    var $close = $block.find('.js__faq-close');

    $link.on('click', function () {
      $block.addClass(CLASS_ACTIVE);
    });

    $close.on('click', function () {
      $block.removeClass(CLASS_ACTIVE);
    });

    $block.on('click', function (e) {
      e.stopPropagation();
    });

    $(document).on('click', function () {
      $block.removeClass(CLASS_ACTIVE);
    });
  });

  $('.js__menu-link').each(function () {
    var $menuLink = $(this);

    $menuLink.on('click', function () {
      $body.toggleClass('is__menuOpened');
    });

    $body.on('hideMenu', function () {
      $body.removeClass('is__menuOpened');
    });
  });

  var x = 55.741237;
  var y = 37.609156;
  var style = [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }];

  window.initMap = function () {
    var isMobile = function isMobile() {
      return window.innerWidth < 700;
    };

    var mobileMapSettings = {
      center: new google.maps.LatLng(x, y),
      zoom: 15
    };

    var deskMapSettings = {
      center: new google.maps.LatLng(x + 0.0001, y + 0.0005),
      zoom: 18
    };

    var initialMapSettings = isMobile() ? mobileMapSettings : deskMapSettings;

    var map = new google.maps.Map(document.getElementById('map'), Object.assign({
      styles: style,
      disableDefaultUI: true,
      scrollwheel: false,
      zoomControl: true
    }, initialMapSettings));

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(x, y),
      icon: '/wp-content/themes/mskcrossfit/assets/images/logo_map.png',
      map: map
    });
  };

  var initDaySelector = function initDaySelector() {
    var $box = $('.js__dayselector');
    var $select = $box.find('select');
    var $selected = $box.find('.js__dayselector-selected');
    var $tables = $('.wcs3-schedule-normal-layout');

    var date = new Date();
    var day = date.getDay();

    var selectDay = function selectDay(day) {
      console.log(day);
      $selected.text($select.find('option:selected').text());
      $tables.attr('data-shift', day);
    };

    $select.on('change', function (e) {
      day = $select.val();

      selectDay(day);
    });

    $tables.swipe({
      swipeLeft: function swipeLeft(event, direction) {
        day = $select.val();
        day++;

        if (day > 7) {
          day = 7;
        }

        $select.val(day);
        selectDay(day);
      },
      swipeRight: function swipeRight(event, direction) {
        day = $select.val();
        day--;

        if (day < 1) {
          day = 1;
        }

        $select.val(day);
        selectDay(day);
      }
    });

    $select.val(day);
    selectDay(day);
  };

  var scheduleInterval = setInterval(function () {
    var $schedules = $('.wcs3-schedule-normal-layout');

    if ($schedules.length) {
      clearInterval(scheduleInterval);
      initDaySelector();
    }
  }, 300);

  $('.js__popup-link').each(function () {
    var $link = $(this);
    var $popup = $('#' + $link.data('target'));
    var $popupContent = $popup.children();
    var $popupCloser = $popup.find('.popup-cross');

    var CLASS_ACTIVE = 'is__active';
    var CLASS_POPUP = 'is__popup';

    var showPopup = function showPopup() {
      $popup.addClass(CLASS_ACTIVE);
    };

    var closePopup = function closePopup() {
      $popup.removeClass(CLASS_ACTIVE);
    };

    $link.on('click', function (e) {
      e.stopPropagation();
      showPopup();
    });

    $(document).on('keyup', function (e) {
      if (e.keyCode === 27) {
        closePopup();
      }
    });

    $(document).on('click', closePopup);
    $popupCloser.on('click', closePopup);

    $popupContent.on('click', function (e) {
      e.stopPropagation();
    });
  });

  $('.mobile-menu, .popup').swipe({
    swipe: function swipe() {}
  });

  $('.popup input').on('click', function () {
    $(this).focus();
  });

  $('.prices-table').each(function () {
    var CLASS_ACTIVE = 'is__active';
    var CLASS_EMPTY = 'is__empty';

    var $table = $(this);
    var $switchers = $table.find('thead th');
    var $tabs = $table.find('tbody td');

    var switchTo = function switchTo(index) {
      $switchers.removeClass(CLASS_ACTIVE);
      $switchers.eq(index).addClass(CLASS_ACTIVE);

      $tabs.removeClass(CLASS_ACTIVE);
      $tabs.filter(':nth-child(' + (index + 1) + ')').each(function () {
        var $row = $(this).closest('tr');

        if ($(this).text().trim()) {
          $row.removeClass(CLASS_EMPTY);
        } else {
          $row.addClass(CLASS_EMPTY);
        }

        $(this).addClass(CLASS_ACTIVE);
      });
    };

    $switchers.on('click', function () {
      var index = $(this).index();

      switchTo(index);
    });

    switchTo(1);
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2Uvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVztBQUMzQixNQUFNLFFBQVEsRUFBRSxNQUFGLENBQWQ7O0FBRUEsSUFBRSxpQkFBRixFQUFxQixFQUFyQixDQUF3QixPQUF4QixFQUFpQyxZQUFXO0FBQzFDLE1BQUUsSUFBRixFQUFRLElBQVIsR0FBZSxhQUFmLENBQTZCLE1BQTdCO0FBQ0QsR0FGRDs7QUFJQSxJQUFFLGlCQUFGLEVBQXFCLElBQXJCLENBQTBCLFlBQVc7QUFDbkMsTUFBRSxJQUFGLEVBQVEsYUFBUixDQUFzQjtBQUNwQixnQkFBVSxHQURVO0FBRXBCLFlBQU0sT0FGYztBQUdwQixlQUFTO0FBQ1AsaUJBQVMsSUFERjtBQUVQLDRCQUFvQjtBQUZiLE9BSFc7QUFPcEIsdUJBQWlCO0FBUEcsS0FBdEI7QUFTRCxHQVZEOztBQVlBLElBQUUsaUJBQUYsRUFBcUIsSUFBckIsQ0FBMEIsWUFBVztBQUNuQyxRQUFNLFVBQVUsRUFBRSxJQUFGLENBQWhCO0FBQ0EsUUFBTSxlQUFlLFFBQVEsSUFBUixDQUFhLGtCQUFiLENBQXJCOztBQUVBLFlBQVEsS0FBUixDQUFjO0FBQ1osY0FBUSxLQURJO0FBRVosWUFBTSxJQUZNO0FBR1osZ0JBQVUsSUFIRTtBQUlaLGlCQUFXO0FBSkMsS0FBZDs7QUFPQSxpQkFBYSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLGFBQUs7QUFDNUIsUUFBRSxjQUFGOztBQUVBLGNBQVEsS0FBUixDQUFjLFdBQWQ7QUFDRCxLQUpEO0FBS0QsR0FoQkQ7O0FBa0JBLElBQUUsbUJBQUYsRUFBdUIsS0FBdkIsQ0FBNkI7QUFDM0Isb0JBQWdCLENBRFc7QUFFM0IsZ0JBQVksSUFGZTtBQUczQixjQUFVLElBSGlCO0FBSTNCLG1CQUFlLElBSlk7QUFLM0Is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QXZCO0FBQ0EsaUJBQVcsRUFBWCxDQUFjLEtBQWQsRUFBcUIsUUFBckIsQ0FBOEIsWUFBOUI7O0FBRUEsWUFBTSxXQUFOLENBQWtCLFlBQWxCO0FBQ0EsWUFBTSxNQUFOLGtCQUEyQixRQUFRLENBQW5DLFNBQXlDLElBQXpDLENBQThDLFlBQVc7QUFDdkQsWUFBTSxPQUFPLEVBQUUsSUFBRixFQUFRLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBYjs7QUFFQSxZQUFJLEVBQUUsSUFBRixFQUFRLElBQVIsR0FBZSxJQUFmLEVBQUosRUFBMkI7QUFDekIsZUFBSyxXQUFMLENBQWlCLFdBQWpCO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsZUFBSyxRQUFMLENBQWMsV0FBZDtBQUNEOztBQUVELFVBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsWUFBakI7QUFDRCxPQVZEO0FBV0QsS0FoQkQ7O0FBa0JBLGVBQVcsRUFBWCxDQUFjLE9BQWQsRUFBdUIsWUFBVztBQUNoQyxVQUFNLFFBQVEsRUFBRSxJQUFGLEVBQVEsS0FBUixFQUFkOztBQUVBLGVBQVMsS0FBVDtBQUNELEtBSkQ7O0FBTUEsYUFBUyxDQUFUO0FBQ0QsR0FqQ0Q7QUFrQ0QsQ0E1U0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIGNvbnN0ICRib2R5ID0gJCgnYm9keScpXG5cbiAgJCgnLmJ1dHRvbi1nYWxsZXJ5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5uZXh0KCkubWFnbmlmaWNQb3B1cCgnb3BlbicpO1xuICB9KTtcblxuICAkKCcuZ2FsbGVyeS1pbWFnZXMnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykubWFnbmlmaWNQb3B1cCh7XG4gICAgICBkZWxlZ2F0ZTogJ2EnLFxuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgbmF2aWdhdGVCeUltZ0NsaWNrOiB0cnVlXG4gICAgICB9LFxuICAgICAgZml4ZWRDb250ZW50UG9zOiBmYWxzZVxuICAgIH0pO1xuICB9KTtcblxuICAkKCcuY29udGVudF9zbGlkZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0ICRzbGlkZXIgPSAkKHRoaXMpO1xuICAgIGNvbnN0ICRuZXh0QnV0dG9ucyA9ICRzbGlkZXIuZmluZCgnLmpzX19zbGlkZXItbmV4dCcpO1xuXG4gICAgJHNsaWRlci5zbGljayh7XG4gICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgZG90c0NsYXNzOiAnc2xpZGVyLWRvdHMnLFxuICAgIH0pO1xuXG4gICAgJG5leHRCdXR0b25zLm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAkc2xpZGVyLnNsaWNrKCdzbGlja05leHQnKTtcbiAgICB9KVxuICB9KTtcblxuICAkKCcuYWR2YW50YWdlLXNsaWRlcicpLnNsaWNrKHtcbiAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXZcIj48L2J1dHRvbj4nLFxuICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0XCI+PC9idXR0b24+JyxcbiAgfSk7XG5cbiAgJCgnLmFkdmFudGFnZS1zbGlkZXJpbm8nKS5zbGljayh7XG4gICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1wcmV2XCI+PC9idXR0b24+JyxcbiAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stbmV4dFwiPjwvYnV0dG9uPicsXG4gICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgcmVzcG9uc2l2ZTogW3tcbiAgICAgICAgYnJlYWtwb2ludDogOTAwLFxuICAgICAgICBzZXR0aW5nczogJ3Vuc2xpY2snXG4gICAgfV1cbiAgfSk7XG5cbiAgJCgnLmpzX19nb3RvJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBjb25zdCAkbGluayA9ICQodGhpcyk7XG4gICAgY29uc3QgJHRhcmdldCA9ICQoJGxpbmsuYXR0cignaHJlZicpKTtcblxuICAgICRsaW5rLm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAkYm9keS50cmlnZ2VyKCdoaWRlTWVudScpO1xuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxUb3A6ICR0YXJnZXQub2Zmc2V0KCkudG9wXG4gICAgICB9LCA3MDAsICdzd2luZycpO1xuICAgIH0pO1xuICB9KTtcblxuICAkKCcuanNfX3RhYnMnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IENMQVNTX0FDVElWRSA9ICdpc19fYWN0aXZlJztcblxuICAgIGNvbnN0ICRib3ggPSAkKHRoaXMpO1xuICAgIGNvbnN0ICRzd2l0Y2hlcnMgPSAkYm94LmZpbmQoJy5qc19fdGFicy1zd2l0Y2hlcnMnKS5jaGlsZHJlbigpO1xuICAgIGNvbnN0ICR0YWJzID0gJGJveC5maW5kKCcuanNfX3RhYnMtY29udGFpbmVyJykuY2hpbGRyZW4oKTtcblxuICAgICRzd2l0Y2hlcnMub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcblxuICAgICAgJHN3aXRjaGVycy5yZW1vdmVDbGFzcyhDTEFTU19BQ1RJVkUpXG4gICAgICAgIC5lcShpbmRleCkuYWRkQ2xhc3MoQ0xBU1NfQUNUSVZFKTtcblxuICAgICAgJHRhYnMucmVtb3ZlQ2xhc3MoQ0xBU1NfQUNUSVZFKVxuICAgICAgICAuZmlsdGVyKGA6bnRoLWNoaWxkKCR7aW5kZXggKyAxfSlgKS5hZGRDbGFzcyhDTEFTU19BQ1RJVkUpO1xuICAgIH0pO1xuICB9KTtcblxuICAkKCcuanNfX2ZhcScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgQ0xBU1NfQUNUSVZFID0gJ2lzX19hY3RpdmUnO1xuXG4gICAgY29uc3QgJGJsb2NrID0gJCh0aGlzKTtcbiAgICBjb25zdCAkbGluayA9ICRibG9jay5maW5kKCcuanNfX2ZhcS1xdWVzdGlvbicpO1xuICAgIGNvbnN0ICRjbG9zZSA9ICRibG9jay5maW5kKCcuanNfX2ZhcS1jbG9zZScpO1xuXG4gICAgJGxpbmsub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgJGJsb2NrLmFkZENsYXNzKENMQVNTX0FDVElWRSk7XG4gICAgfSk7XG5cbiAgICAkY2xvc2Uub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgJGJsb2NrLnJlbW92ZUNsYXNzKENMQVNTX0FDVElWRSk7XG4gICAgfSk7XG5cbiAgICAkYmxvY2sub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgJGJsb2NrLnJlbW92ZUNsYXNzKENMQVNTX0FDVElWRSk7XG4gICAgfSlcbiAgfSk7XG5cbiAgJCgnLmpzX19tZW51LWxpbmsnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0ICRtZW51TGluayA9ICQodGhpcyk7XG5cbiAgICAkbWVudUxpbmsub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgJGJvZHkudG9nZ2xlQ2xhc3MoJ2lzX19tZW51T3BlbmVkJyk7XG4gICAgfSk7XG5cbiAgICAkYm9keS5vbignaGlkZU1lbnUnLCAoKSA9PiB7XG4gICAgICAkYm9keS5yZW1vdmVDbGFzcygnaXNfX21lbnVPcGVuZWQnKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgeCA9IDU1Ljc0MTIzNztcbiAgY29uc3QgeSA9IDM3LjYwOTE1NjtcbiAgY29uc3Qgc3R5bGUgPSBbe1wiZmVhdHVyZVR5cGVcIjpcImFsbFwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVscy50ZXh0LmZpbGxcIixcInN0eWxlcnNcIjpbe1wic2F0dXJhdGlvblwiOjM2fSx7XCJjb2xvclwiOlwiIzAwMDAwMFwifSx7XCJsaWdodG5lc3NcIjo0MH1dfSx7XCJmZWF0dXJlVHlwZVwiOlwiYWxsXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9uXCJ9LHtcImNvbG9yXCI6XCIjMDAwMDAwXCJ9LHtcImxpZ2h0bmVzc1wiOjE2fV19LHtcImZlYXR1cmVUeXBlXCI6XCJhbGxcIixcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHMuaWNvblwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvZmZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwiYWRtaW5pc3RyYXRpdmVcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeS5maWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjMDAwMDAwXCJ9LHtcImxpZ2h0bmVzc1wiOjIwfV19LHtcImZlYXR1cmVUeXBlXCI6XCJhZG1pbmlzdHJhdGl2ZVwiLFwiZWxlbWVudFR5cGVcIjpcImdlb21ldHJ5LnN0cm9rZVwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiIzAwMDAwMFwifSx7XCJsaWdodG5lc3NcIjoxN30se1wid2VpZ2h0XCI6MS4yfV19LHtcImZlYXR1cmVUeXBlXCI6XCJsYW5kc2NhcGVcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeVwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiIzAwMDAwMFwifSx7XCJsaWdodG5lc3NcIjoyMH1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicG9pXCIsXCJlbGVtZW50VHlwZVwiOlwiZ2VvbWV0cnlcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiMwMDAwMDBcIn0se1wibGlnaHRuZXNzXCI6MjF9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWQuaGlnaHdheVwiLFwiZWxlbWVudFR5cGVcIjpcImdlb21ldHJ5LmZpbGxcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiMwMDAwMDBcIn0se1wibGlnaHRuZXNzXCI6MTd9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWQuaGlnaHdheVwiLFwiZWxlbWVudFR5cGVcIjpcImdlb21ldHJ5LnN0cm9rZVwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiIzAwMDAwMFwifSx7XCJsaWdodG5lc3NcIjoyOX0se1wid2VpZ2h0XCI6MC4yfV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmFydGVyaWFsXCIsXCJlbGVtZW50VHlwZVwiOlwiZ2VvbWV0cnlcIixcInN0eWxlcnNcIjpbe1wiY29sb3JcIjpcIiMwMDAwMDBcIn0se1wibGlnaHRuZXNzXCI6MTh9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWQubG9jYWxcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeVwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiIzAwMDAwMFwifSx7XCJsaWdodG5lc3NcIjoxNn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwidHJhbnNpdFwiLFwiZWxlbWVudFR5cGVcIjpcImdlb21ldHJ5XCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjMDAwMDAwXCJ9LHtcImxpZ2h0bmVzc1wiOjE5fV19LHtcImZlYXR1cmVUeXBlXCI6XCJ3YXRlclwiLFwiZWxlbWVudFR5cGVcIjpcImdlb21ldHJ5XCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjMDAwMDAwXCJ9LHtcImxpZ2h0bmVzc1wiOjE3fV19XVxuXG4gIHdpbmRvdy5pbml0TWFwID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgaXNNb2JpbGUgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGggPCA3MDA7XG4gICAgfVxuXG4gICAgY29uc3QgbW9iaWxlTWFwU2V0dGluZ3MgPSB7XG4gICAgICBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoeCwgeSksXG4gICAgICB6b29tOiAxNVxuICAgIH07XG5cbiAgICBjb25zdCBkZXNrTWFwU2V0dGluZ3MgPSB7XG4gICAgICBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoeCArIDAuMDAwMSwgeSArIDAuMDAwNSksXG4gICAgICB6b29tOiAxOFxuICAgIH07XG5cbiAgICBjb25zdCBpbml0aWFsTWFwU2V0dGluZ3MgPSBpc01vYmlsZSgpID8gbW9iaWxlTWFwU2V0dGluZ3MgOiBkZXNrTWFwU2V0dGluZ3M7XG5cbiAgICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBzdHlsZXM6IHN0eWxlLFxuICAgICAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcbiAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcbiAgICAgIHpvb21Db250cm9sOiB0cnVlXG4gICAgfSwgaW5pdGlhbE1hcFNldHRpbmdzKSk7XG5cbiAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHgsIHkpLFxuICAgICAgaWNvbjogJy93cC1jb250ZW50L3RoZW1lcy9tc2tjcm9zc2ZpdC9hc3NldHMvaW1hZ2VzL2xvZ29fbWFwLnBuZycsXG4gICAgICBtYXA6IG1hcCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGluaXREYXlTZWxlY3RvciA9ICgpID0+IHtcbiAgICBjb25zdCAkYm94ID0gJCgnLmpzX19kYXlzZWxlY3RvcicpO1xuICAgIGNvbnN0ICRzZWxlY3QgPSAkYm94LmZpbmQoJ3NlbGVjdCcpO1xuICAgIGNvbnN0ICRzZWxlY3RlZCA9ICRib3guZmluZCgnLmpzX19kYXlzZWxlY3Rvci1zZWxlY3RlZCcpO1xuICAgIGNvbnN0ICR0YWJsZXMgPSAkKCcud2NzMy1zY2hlZHVsZS1ub3JtYWwtbGF5b3V0Jyk7XG5cbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXkoKTtcblxuICAgIGNvbnN0IHNlbGVjdERheSA9IGRheSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXkpXG4gICAgICAkc2VsZWN0ZWQudGV4dCgkc2VsZWN0LmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLnRleHQoKSk7XG4gICAgICAkdGFibGVzLmF0dHIoJ2RhdGEtc2hpZnQnLCBkYXkpO1xuICAgIH1cblxuICAgICRzZWxlY3Qub24oJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICBkYXkgPSAkc2VsZWN0LnZhbCgpO1xuXG4gICAgICBzZWxlY3REYXkoZGF5KVxuICAgIH0pO1xuXG4gICAgJHRhYmxlcy5zd2lwZSh7XG4gICAgICBzd2lwZUxlZnQ6IChldmVudCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRheSA9ICRzZWxlY3QudmFsKCk7XG4gICAgICAgIGRheSsrO1xuXG4gICAgICAgIGlmIChkYXkgPiA3KSB7XG4gICAgICAgICAgZGF5ID0gNztcbiAgICAgICAgfVxuXG4gICAgICAgICRzZWxlY3QudmFsKGRheSk7XG4gICAgICAgIHNlbGVjdERheShkYXkpO1xuICAgICAgfSxcbiAgICAgIHN3aXBlUmlnaHQ6IChldmVudCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRheSA9ICRzZWxlY3QudmFsKCk7XG4gICAgICAgIGRheS0tO1xuXG4gICAgICAgIGlmIChkYXkgPCAxKSB7XG4gICAgICAgICAgZGF5ID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgICRzZWxlY3QudmFsKGRheSk7XG4gICAgICAgIHNlbGVjdERheShkYXkpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICAkc2VsZWN0LnZhbChkYXkpXG4gICAgc2VsZWN0RGF5KGRheSlcbiAgfVxuXG4gIGNvbnN0IHNjaGVkdWxlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY29uc3QgJHNjaGVkdWxlcyA9ICQoJy53Y3MzLXNjaGVkdWxlLW5vcm1hbC1sYXlvdXQnKTtcblxuICAgIGlmICgkc2NoZWR1bGVzLmxlbmd0aCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChzY2hlZHVsZUludGVydmFsKTtcbiAgICAgIGluaXREYXlTZWxlY3RvcigpO1xuICAgIH1cbiAgfSwgMzAwKVxuXG4gICQoJy5qc19fcG9wdXAtbGluaycpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgJGxpbmsgPSAkKHRoaXMpO1xuICAgIGNvbnN0ICRwb3B1cCA9ICQoJyMnICsgJGxpbmsuZGF0YSgndGFyZ2V0JykpO1xuICAgIGNvbnN0ICRwb3B1cENvbnRlbnQgPSAkcG9wdXAuY2hpbGRyZW4oKTtcbiAgICBjb25zdCAkcG9wdXBDbG9zZXIgPSAkcG9wdXAuZmluZCgnLnBvcHVwLWNyb3NzJyk7XG5cbiAgICBjb25zdCBDTEFTU19BQ1RJVkUgPSAnaXNfX2FjdGl2ZSc7XG4gICAgY29uc3QgQ0xBU1NfUE9QVVAgPSAnaXNfX3BvcHVwJztcblxuICAgIGNvbnN0IHNob3dQb3B1cCA9ICgpID0+IHtcbiAgICAgICRwb3B1cC5hZGRDbGFzcyhDTEFTU19BQ1RJVkUpO1xuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlUG9wdXAgPSAoKSA9PiB7XG4gICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoQ0xBU1NfQUNUSVZFKTtcbiAgICB9XG5cbiAgICAkbGluay5vbignY2xpY2snLCBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIHNob3dQb3B1cCgpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgZSA9PiB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICBjbG9zZVBvcHVwKCk7XG4gICAgICB9XG4gICAgfSlcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGNsb3NlUG9wdXApXG4gICAgJHBvcHVwQ2xvc2VyLm9uKCdjbGljaycsIGNsb3NlUG9wdXApXG5cbiAgICAkcG9wdXBDb250ZW50Lm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KVxuICB9KTtcblxuICAkKCcubW9iaWxlLW1lbnUsIC5wb3B1cCcpLnN3aXBlKHtcbiAgICBzd2lwZTogKCkgPT4ge30sXG4gIH0pXG5cbiAgJCgnLnBvcHVwIGlucHV0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5mb2N1cygpO1xuICB9KVxuXG4gICQoJy5wcmljZXMtdGFibGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IENMQVNTX0FDVElWRSA9ICdpc19fYWN0aXZlJztcbiAgICBjb25zdCBDTEFTU19FTVBUWSA9ICdpc19fZW1wdHknO1xuXG4gICAgY29uc3QgJHRhYmxlID0gJCh0aGlzKVxuICAgIGNvbnN0ICRzd2l0Y2hlcnMgPSAkdGFibGUuZmluZCgndGhlYWQgdGgnKVxuICAgIGNvbnN0ICR0YWJzID0gJHRhYmxlLmZpbmQoJ3Rib2R5IHRkJylcblxuICAgIGNvbnN0IHN3aXRjaFRvID0gaW5kZXggPT4ge1xuICAgICAgJHN3aXRjaGVycy5yZW1vdmVDbGFzcyhDTEFTU19BQ1RJVkUpXG4gICAgICAkc3dpdGNoZXJzLmVxKGluZGV4KS5hZGRDbGFzcyhDTEFTU19BQ1RJVkUpXG5cbiAgICAgICR0YWJzLnJlbW92ZUNsYXNzKENMQVNTX0FDVElWRSlcbiAgICAgICR0YWJzLmZpbHRlcihgOm50aC1jaGlsZCgke2luZGV4ICsgMX0pYCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgJHJvdyA9ICQodGhpcykuY2xvc2VzdCgndHInKVxuXG4gICAgICAgIGlmICgkKHRoaXMpLnRleHQoKS50cmltKCkpIHtcbiAgICAgICAgICAkcm93LnJlbW92ZUNsYXNzKENMQVNTX0VNUFRZKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRyb3cuYWRkQ2xhc3MoQ0xBU1NfRU1QVFkpXG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKENMQVNTX0FDVElWRSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgJHN3aXRjaGVycy5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gJCh0aGlzKS5pbmRleCgpXG5cbiAgICAgIHN3aXRjaFRvKGluZGV4KTtcbiAgICB9KVxuXG4gICAgc3dpdGNoVG8oMSlcbiAgfSlcbn0pO1xuXG4iXX0=
