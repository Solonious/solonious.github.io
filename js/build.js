/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var counter = __webpack_require__(1);
	var main = __webpack_require__(2);
	var myFancyBox = __webpack_require__(3);
	var myValidation = __webpack_require__(4);

	counter('index');
	main('index');
	myFancyBox('index');
	myValidation('index');

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
	    var $count = $('#counter');

	    function countUp($el, startTime) {

	        $el.text(startTime);

	        var timer = setInterval(countItUp, 0.5);

	        function countItUp() {
	            startTime += 1;
	            $el.text(startTime);

	            if (startTime === 17500) {
	                console.log('Countdown Finished.');

	                clearInterval(timer);
	                return;
	            }
	        }
	    }
	    countUp($count, 0);
		};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
	  // slider
	  $(document).ready(function () {
	    $('.slider').slider({
	      indicators: false,
	      height: 360
	    });
	    //  slider control
	    var btnLeft = $('.container-tabs .arr-left'),
	        btnRight = $('.container-tabs .arr-right');

	    // Previous slide
	    btnLeft.on('click', function () {
	      $('.slider').slider('prev');
	    });

	    // Next slide
	    btnRight.on('click', function () {
	      $('.slider').slider('next');
	    });
	    //  mobile navigation
	    $(".button-collapse").sideNav();
	  });

	  // tab control
	  $(document).ready(function () {
	    $('ul.tabs').tabs('select_tab', 'tab_id');
	    //$('.furshet ul.tabs').tabs('select_tab', 'tab_id');
	  });

	  $(document).ready(function () {
	    //kava carousel
	    var $kava = $('#kava-carousel'),
	        $snidanok = $('#snidanok-carousel'),
	        $gallery = $('#gallery-carousel'),
	        $ourStands = $('#ourstands-carousel'),
	        sliderConfOne = {
	      center: true,
	      loop: true,
	      margin: 20,
	      nav: false,
	      responsive: {
	        0: {
	          items: 1
	        },
	        600: {
	          items: 1.5
	        }
	      }
	    },
	        sliderConfTwo = {
	      center: true,
	      loop: false,
	      margin: 20,
	      nav: false,
	      responsive: {
	        0: {
	          items: 1
	        }
	      }
	    };

	    $kava.owlCarousel(sliderConfOne);
	    $('#kava_id .control .arr-left').click(function () {
	      $kava.trigger('next.owl.carousel', [800]);
	    });
	    $('#kava_id .control .arr-right').click(function () {
	      $kava.trigger('prev.owl.carousel', [800]);
	    });

	    $snidanok.owlCarousel(sliderConfOne);
	    $('#snidanok_lunch .control .arr-left').click(function () {
	      $snidanok.trigger('next.owl.carousel', [800]);
	    });
	    $('#snidanok_lunch .control .arr-right').click(function () {
	      $snidanok.trigger('prev.owl.carousel', [800]);
	    });

	    $gallery.owlCarousel(sliderConfTwo);
	    $('#gallery_id .arr-left').click(function () {
	      $gallery.trigger('next.owl.carousel', [800]);
	    });
	    $('#gallery_id .arr-right').click(function () {
	      $gallery.trigger('prev.owl.carousel', [800]);
	    });
	    $ourStands.owlCarousel(sliderConfTwo);
	    $('#locations .arr-left').click(function () {
	      $ourStands.trigger('next.owl.carousel', [800]);
	    });
	    $('#locations .arr-right').click(function () {
	      $ourStands.trigger('prev.owl.carousel', [800]);
	    });
	  });

	  // scroll
	  $(document).ready(function () {

	    function myScroll(event) {
	      //отменяем стандартную обработку нажатия по ссылке
	      event.preventDefault();

	      //забираем идентификатор бока с атрибута href
	      var id = $(this).attr('href'),
	

	      //узнаем высоту от начала страницы до блока на который ссылается якорь
	      top = $(id).offset().top;

	      //анимируем переход на расстояние - top за 1500 мс
	      $('body,html').animate({ scrollTop: top - 50 }, 1500);
	    }

	    $('#menu').on("click", "a", myScroll);
	    $('.arrow-dwn').on("click", "a", myScroll);
	  });
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {

	  $(".open_fancybox").click(function (e) {

	    var images = [];

	    function Image(imageUrl, n) {
	      this.href = imageUrl;
	      this.title = 'image ' + n;
	    }

	    function createImageArr(imgId) {
	      //add photo mount here
	      for (var i = 1; i < 13; i++) {
	        var url = '/img/gallery/' + imgId + '/' + i + '.jpg';
	        var image = new Image(url, i);
	        images.push(image);
	      }
	    }

	    if (e.target.id) {

	      var id = e.target.id;
	      createImageArr(id);
	      $.fancybox.open(images, { padding: 0 });
	    } else {
	      alert('id is undefined');
	    }

	    return false;

	    console.log(images);
	  });

	  $(".fancybox").fancybox({
	    openEffect: 'none',
	    closeEffect: 'none',
	    iframe: {
	      preload: false
	    }
	  });
		};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {

	  var input;
	  var submit;

	  document.getElementById('myform').addEventListener('click', function (e) {
	    targetClick(e);
	  }, false);

	  function targetClick(e) {

	    if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') {

	      if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
	        console.log(e.target.id);
	        e.target.value = e.target.id;
	        e.target.dataset.checked = 'true';
	      }
	      input = e.target;
	    } else if (e.target.tagName === 'BUTTON') {
	      e.preventDefault();
	      submit = e.target;
	      checkedInputs();
	      console.log('try to form submit');
	    }

	    input.addEventListener('blur', function () {
	      //console.log(input.id);
	      validateFromId(input);
	    }, false);

	    function validateFromId(el) {

	      if (el.id === 'userTel') {
	        validateTel(el);
	      } else if (el.id === 'userEmail') {
	        validateEmail(el);
	      } else if (el.id === 'person') {
	        validatePerson(el);
	      } else {
	        validateFieldText(el);
	      }
	    }

	    function validateFieldText(field) {

	      var regExp = /^[A-ZА-ЯЁ\s]+$/i;

	      if (field.value.length < 3 || field.value.search(regExp)) {
	        field.style = 'background-color: rgba(255, 0, 0, 0.3)';
	        field.dataset.checked = 'false';
	      } else {
	        field.style = 'background-color: rgba(0, 255, 0, 0.3)';
	        field.dataset.checked = 'true';
	      }
	    }

	    function validatePerson(field) {

	      var regExp = /^[0-9]+$/;

	      if (!field.value || field.value.search(regExp)) {
	        field.style = 'background-color: rgba(255, 0, 0, 0.3)';
	        field.dataset.checked = 'false';
	      } else {
	        field.style = 'background-color: rgba(0, 255, 0, 0.3)';
	        field.dataset.checked = 'true';
	      }
	    }

	    function validateTel(field) {

	      var regExp = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

	      if (!field.value || field.value.search(regExp)) {
	        field.style = 'background-color: rgba(255, 0, 0, 0.3)';
	        field.dataset.checked = 'false';
	      } else {
	        field.style = 'background-color: rgba(0, 255, 0, 0.3)';
	        field.dataset.checked = 'true';
	      }
	    }

	    function validateEmail(field) {

	      var regExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

	      if (!field.value || field.value.search(regExp)) {
	        field.style = 'background-color: rgba(255, 0, 0, 0.3)';
	        field.dataset.checked = 'false';
	      } else {
	        field.style = 'background-color: rgba(0, 255, 0, 0.3)';
	        field.dataset.checked = 'true';
	      }
	    }
	  }

	  function checkedInputs() {

	    var checked = [];
	    var inputs = document.querySelectorAll('#myform input');

	    for (var i = 0; i < inputs.length; i++) {
	      checked.push(inputs[i].dataset.checked);
	    }

	    if (checked.every(compare)) {
	      sendPostRequest();
	      //return alert('form submit');
	    } else {
	      return alert('form dont submit');
	    }

	    function compare(el) {
	      return el === 'true';
	    }
	  }

	  function sendPostRequest(e) {
	    var body = $('#myform').serialize();
	    console.log(body);

	    $.ajax({
	      url: '/order',
	      dataType: 'text',
	      type: 'post',
	      contentType: 'application/x-www-form-urlencoded',
	      data: body,
	      success: function (data, textStatus, jQxhr) {
	        var head = document.createElement('h3');
	        head.innerHTML = data;
	        $('#myform').html(head);
	      },
	      error: function (jQxr, textStatus, errorThrown) {
	        console.log(errorThrown);
	      }
	    });
	  }
		};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmZiZTFjYWFkYzkzYjhkMmYwNjQiLCJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2pzL2luZGV4LmpzIiwid2VicGFjazovLy9mcm9udGVuZC9qcy9teS1zY3JpcHRzL2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2pzL215LXNjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvanMvbXktc2NyaXB0cy9teV9mYW5jeWJveC5qcyIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvanMvbXktc2NyaXB0cy9teS12YWxpZGF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDJmYmUxY2FhZGM5M2I4ZDJmMDY0XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY291bnRlciA9IHJlcXVpcmUoJy4vbXktc2NyaXB0cy9jb3VudGVyJyk7XG52YXIgbWFpbiA9IHJlcXVpcmUoJy4vbXktc2NyaXB0cy9tYWluJyk7XG52YXIgbXlGYW5jeUJveCA9IHJlcXVpcmUoJy4vbXktc2NyaXB0cy9teV9mYW5jeWJveCcpO1xudmFyIG15VmFsaWRhdGlvbiA9IHJlcXVpcmUoJy4vbXktc2NyaXB0cy9teS12YWxpZGF0aW9uJyk7XG5cbmNvdW50ZXIoJ2luZGV4Jyk7XG5tYWluKCdpbmRleCcpO1xubXlGYW5jeUJveCgnaW5kZXgnKTtcbm15VmFsaWRhdGlvbignaW5kZXgnKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGZyb250ZW5kL2pzL2luZGV4LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiB2YXIgJGNvdW50ID0gJCgnI2NvdW50ZXInKTtcblxuZnVuY3Rpb24gY291bnRVcCAoICRlbCwgc3RhcnRUaW1lKSB7XG5cbiAgICAgICAgICAkZWwudGV4dChzdGFydFRpbWUpO1xuXG4gICAgICAgICAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoY291bnRJdFVwLDAuNSk7XG5cbiAgICAgICAgICBmdW5jdGlvbiBjb3VudEl0VXAoKXtcbiAgICAgICAgICAgICAgc3RhcnRUaW1lICs9IDFcbiAgICAgICAgICAgICAgJGVsLnRleHQoc3RhcnRUaW1lKTtcblxuICAgICAgICAgICAgICBpZiggc3RhcnRUaW1lID09PSAxNzUwMCApe1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvdW50ZG93biBGaW5pc2hlZC4nKTtcblxuICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgIH1cbmNvdW50VXAoJGNvdW50LCAwKTtcblxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGZyb250ZW5kL2pzL215LXNjcmlwdHMvY291bnRlci5qc1xuICoqLyIsIiAndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbi8vIHNsaWRlclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICQoJy5zbGlkZXInKS5zbGlkZXIoe1xuICAgICAgIGluZGljYXRvcnM6IGZhbHNlLFxuICAgICAgIGhlaWdodDogMzYwXG4gICAgIH0pO1xuICAgICAvLyAgc2xpZGVyIGNvbnRyb2xcbiAgICAgdmFyIGJ0bkxlZnQgPSAkKCcuY29udGFpbmVyLXRhYnMgLmFyci1sZWZ0JyksXG4gICAgICAgIGJ0blJpZ2h0ID0gJCgnLmNvbnRhaW5lci10YWJzIC5hcnItcmlnaHQnKTtcblxuICAgICAvLyBQcmV2aW91cyBzbGlkZVxuICAgICBidG5MZWZ0Lm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xuICAgICAgICAgJCgnLnNsaWRlcicpLnNsaWRlcigncHJldicpO1xuICAgICB9KTtcblxuICAgICAvLyBOZXh0IHNsaWRlXG4gICAgIGJ0blJpZ2h0Lm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xuICAgICAgICAgJCgnLnNsaWRlcicpLnNsaWRlcignbmV4dCcpO1xuICAgICB9KTtcbiAgICAgLy8gIG1vYmlsZSBuYXZpZ2F0aW9uXG4gICAgICQoXCIuYnV0dG9uLWNvbGxhcHNlXCIpLnNpZGVOYXYoKTtcbn0pO1xuXG4vLyB0YWIgY29udHJvbFxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICQoJ3VsLnRhYnMnKS50YWJzKCdzZWxlY3RfdGFiJywgJ3RhYl9pZCcpO1xuICAgIC8vJCgnLmZ1cnNoZXQgdWwudGFicycpLnRhYnMoJ3NlbGVjdF90YWInLCAndGFiX2lkJyk7XG59KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAvL2thdmEgY2Fyb3VzZWxcbiAgdmFyICRrYXZhID0gJCgnI2thdmEtY2Fyb3VzZWwnKSxcbiAgICAgICRzbmlkYW5vayA9ICQoJyNzbmlkYW5vay1jYXJvdXNlbCcpLFxuICAgICAgJGdhbGxlcnkgPSAkKCcjZ2FsbGVyeS1jYXJvdXNlbCcpLFxuICAgICAgJG91clN0YW5kcyA9ICQoJyNvdXJzdGFuZHMtY2Fyb3VzZWwnKSxcblxuICAgICAgc2xpZGVyQ29uZk9uZSA9IHtcbiAgICAgICAgICBjZW50ZXI6dHJ1ZSxcbiAgICAgICAgICBsb29wOnRydWUsXG4gICAgICAgICAgbWFyZ2luOjIwLFxuICAgICAgICAgIG5hdjpmYWxzZSxcbiAgICAgICAgICByZXNwb25zaXZlOntcbiAgICAgICAgICAgICAgMDp7XG4gICAgICAgICAgICAgICAgICBpdGVtczoxXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIDYwMDp7XG4gICAgICAgICAgICAgICAgICBpdGVtczoxLjVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHNsaWRlckNvbmZUd28gPSB7XG4gICAgICAgIGNlbnRlcjp0cnVlLFxuICAgICAgICBsb29wOmZhbHNlLFxuICAgICAgICBtYXJnaW46MjAsXG4gICAgICAgIG5hdjpmYWxzZSxcbiAgICAgICAgcmVzcG9uc2l2ZTp7XG4gICAgICAgICAgICAwOntcbiAgICAgICAgICAgICAgICBpdGVtczoxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICRrYXZhLm93bENhcm91c2VsKHNsaWRlckNvbmZPbmUpO1xuICAkKCcja2F2YV9pZCAuY29udHJvbCAuYXJyLWxlZnQnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJGthdmEudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnLCBbODAwXSk7XG4gIH0pXG4gICQoJyNrYXZhX2lkIC5jb250cm9sIC5hcnItcmlnaHQnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJGthdmEudHJpZ2dlcigncHJldi5vd2wuY2Fyb3VzZWwnLCBbODAwXSk7XG4gIH0pO1xuXG4gICRzbmlkYW5vay5vd2xDYXJvdXNlbChzbGlkZXJDb25mT25lKTtcbiAgJCgnI3NuaWRhbm9rX2x1bmNoIC5jb250cm9sIC5hcnItbGVmdCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkc25pZGFub2sudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnLCBbODAwXSk7XG4gIH0pXG4gICQoJyNzbmlkYW5va19sdW5jaCAuY29udHJvbCAuYXJyLXJpZ2h0JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICRzbmlkYW5vay50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcsIFs4MDBdKTtcbiAgfSk7XG5cbiAgJGdhbGxlcnkub3dsQ2Fyb3VzZWwoc2xpZGVyQ29uZlR3byk7XG4gICQoJyNnYWxsZXJ5X2lkIC5hcnItbGVmdCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkZ2FsbGVyeS50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcsIFs4MDBdKTtcbiAgfSlcbiAgJCgnI2dhbGxlcnlfaWQgLmFyci1yaWdodCcpLmNsaWNrKCBmdW5jdGlvbiAoKSB7XG4gICAgJGdhbGxlcnkudHJpZ2dlcigncHJldi5vd2wuY2Fyb3VzZWwnLCBbODAwXSk7XG4gIH0pO1xuICAkb3VyU3RhbmRzLm93bENhcm91c2VsKHNsaWRlckNvbmZUd28pO1xuICAkKCcjbG9jYXRpb25zIC5hcnItbGVmdCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkb3VyU3RhbmRzLnRyaWdnZXIoJ25leHQub3dsLmNhcm91c2VsJywgWzgwMF0pO1xuICB9KVxuICAkKCcjbG9jYXRpb25zIC5hcnItcmlnaHQnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJG91clN0YW5kcy50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcsIFs4MDBdKTtcbiAgfSk7XG59KTtcblxuICAvLyBzY3JvbGxcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICBmdW5jdGlvbiBteVNjcm9sbCAoZXZlbnQpIHtcbiAgICAvL9C+0YLQvNC10L3Rj9C10Lwg0YHRgtCw0L3QtNCw0YDRgtC90YPRjiDQvtCx0YDQsNCx0L7RgtC60YMg0L3QsNC20LDRgtC40Y8g0L/QviDRgdGB0YvQu9C60LVcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy/Qt9Cw0LHQuNGA0LDQtdC8INC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINCx0L7QutCwINGBINCw0YLRgNC40LHRg9GC0LAgaHJlZlxuICAgIHZhciBpZCAgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcblxuICAgIC8v0YPQt9C90LDQtdC8INCy0YvRgdC+0YLRgyDQvtGCINC90LDRh9Cw0LvQsCDRgdGC0YDQsNC90LjRhtGLINC00L4g0LHQu9C+0LrQsCDQvdCwINC60L7RgtC+0YDRi9C5INGB0YHRi9C70LDQtdGC0YHRjyDRj9C60L7RgNGMXG4gICAgICB0b3AgPSAkKGlkKS5vZmZzZXQoKS50b3A7XG5cbiAgICAvL9Cw0L3QuNC80LjRgNGD0LXQvCDQv9C10YDQtdGF0L7QtCDQvdCwINGA0LDRgdGB0YLQvtGP0L3QuNC1IC0gdG9wINC30LAgMTUwMCDQvNGBXG4gICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0b3AgLSA1MH0sIDE1MDApO1xuICB9XG5cbiAgJCgnI21lbnUnKS5vbihcImNsaWNrXCIsXCJhXCIsIG15U2Nyb2xsKTtcbiAgJCgnLmFycm93LWR3bicpLm9uKFwiY2xpY2tcIixcImFcIiwgbXlTY3JvbGwpO1xuXG59KTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBmcm9udGVuZC9qcy9teS1zY3JpcHRzL21haW4uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgJChcIi5vcGVuX2ZhbmN5Ym94XCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblxuICAgIHZhciBpbWFnZXMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIEltYWdlKGltYWdlVXJsLCBuKSB7XG4gICAgICB0aGlzLmhyZWYgPSBpbWFnZVVybDtcbiAgICAgIHRoaXMudGl0bGUgPSAnaW1hZ2UgJyArIG47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSW1hZ2VBcnIgKGltZ0lkKSB7XG4gICAgICAvL2FkZCBwaG90byBtb3VudCBoZXJlXG4gICAgICBmb3IodmFyIGkgPSAxO2kgPCAxMztpKyspIHtcbiAgICAgICAgdmFyIHVybCA9ICcvaW1nL2dhbGxlcnkvJyArIGltZ0lkICsgJy8nICsgaSArICcuanBnJztcbiAgICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKHVybCwgaSk7XG4gICAgICAgIGltYWdlcy5wdXNoKGltYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihlLnRhcmdldC5pZCkge1xuXG4gICAgICB2YXIgaWQgPSBlLnRhcmdldC5pZDtcbiAgICAgIGNyZWF0ZUltYWdlQXJyKGlkKTtcbiAgICAgICQuZmFuY3lib3gub3BlbihpbWFnZXMsIHtwYWRkaW5nIDogMH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgnaWQgaXMgdW5kZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc29sZS5sb2coaW1hZ2VzKTtcbiAgfSk7XG5cblxuXG4gICQoXCIuZmFuY3lib3hcIikuZmFuY3lib3goe1xuICAgIG9wZW5FZmZlY3QgIDogJ25vbmUnLFxuICAgIGNsb3NlRWZmZWN0IDogJ25vbmUnLFxuICAgIGlmcmFtZSA6IHtcbiAgICAgIHByZWxvYWQ6IGZhbHNlXG4gICAgfVxuICB9KTtcblxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGZyb250ZW5kL2pzL215LXNjcmlwdHMvbXlfZmFuY3lib3guanNcbiAqKi8iLCIgICd1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxudmFyIGlucHV0O1xudmFyIHN1Ym1pdDtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Zm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gIHRhcmdldENsaWNrKGUpO1xufSwgZmFsc2UpO1xuXG5cbmZ1bmN0aW9uIHRhcmdldENsaWNrKGUpIHtcblxuICBpZihlLnRhcmdldC50YWdOYW1lID09PSAnVEVYVEFSRUEnIHx8IGUudGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcblxuICAgIGlmKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgJiYgZS50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQpO1xuICAgICAgZS50YXJnZXQudmFsdWUgPSBlLnRhcmdldC5pZDtcbiAgICAgIGUudGFyZ2V0LmRhdGFzZXQuY2hlY2tlZCA9ICd0cnVlJztcbiAgICB9XG4gICAgaW5wdXQgPSBlLnRhcmdldDtcbiAgfSBlbHNlIGlmKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdCVVRUT04nKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHN1Ym1pdCA9IGUudGFyZ2V0O1xuICAgIGNoZWNrZWRJbnB1dHMoKTtcbiAgICBjb25zb2xlLmxvZygndHJ5IHRvIGZvcm0gc3VibWl0Jyk7XG4gIH1cblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24oKSB7XG4gICAgLy9jb25zb2xlLmxvZyhpbnB1dC5pZCk7XG4gICAgdmFsaWRhdGVGcm9tSWQoaW5wdXQpO1xuICB9LCBmYWxzZSk7XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVGcm9tSWQoZWwpIHtcblxuICAgIGlmKGVsLmlkID09PSAndXNlclRlbCcpIHtcbiAgICB2YWxpZGF0ZVRlbChlbCk7XG4gIH0gZWxzZSBpZihlbC5pZCA9PT0gJ3VzZXJFbWFpbCcpIHtcbiAgICB2YWxpZGF0ZUVtYWlsKGVsKTtcbiAgfSBlbHNlIGlmKGVsLmlkID09PSAncGVyc29uJykge1xuICAgIHZhbGlkYXRlUGVyc29uKGVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVGaWVsZFRleHQoZWwpO1xuICAgICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVGaWVsZFRleHQoZmllbGQpIHtcblxuICAgIHZhciByZWdFeHAgPSAvXltBLVrQkC3Qr9CBXFxzXSskL2k7XG5cbiAgICBpZihmaWVsZC52YWx1ZS5sZW5ndGggPCAzIHx8IGZpZWxkLnZhbHVlLnNlYXJjaChyZWdFeHApKXtcbiAgICAgIGZpZWxkLnN0eWxlID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjMpJztcbiAgICAgIGZpZWxkLmRhdGFzZXQuY2hlY2tlZCA9ICdmYWxzZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZWxkLnN0eWxlID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjMpJztcbiAgICAgIGZpZWxkLmRhdGFzZXQuY2hlY2tlZCA9ICd0cnVlJztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZVBlcnNvbihmaWVsZCkge1xuXG4gICAgdmFyIHJlZ0V4cCA9IC9eWzAtOV0rJC87XG5cbiAgICBpZighZmllbGQudmFsdWUgfHwgZmllbGQudmFsdWUuc2VhcmNoKHJlZ0V4cCkpIHtcbiAgICAgICBmaWVsZC5zdHlsZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zKSc7XG4gICAgICAgZmllbGQuZGF0YXNldC5jaGVja2VkID0gJ2ZhbHNlJztcbiAgICB9IGVsc2Uge1xuICAgICAgIGZpZWxkLnN0eWxlID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjMpJztcbiAgICAgICBmaWVsZC5kYXRhc2V0LmNoZWNrZWQgPSAndHJ1ZSc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVUZWwoZmllbGQpIHtcblxuICAgIHZhciByZWdFeHAgPSAvXlxcK1xcZHsyfVxcKFxcZHszfVxcKVxcZHszfS1cXGR7Mn0tXFxkezJ9JC87XG5cbiAgICBpZighZmllbGQudmFsdWUgfHwgZmllbGQudmFsdWUuc2VhcmNoKHJlZ0V4cCkpIHtcbiAgICAgICBmaWVsZC5zdHlsZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zKSc7XG4gICAgICAgZmllbGQuZGF0YXNldC5jaGVja2VkID0gJ2ZhbHNlJztcbiAgICB9IGVsc2Uge1xuICAgICAgIGZpZWxkLnN0eWxlID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjMpJztcbiAgICAgICBmaWVsZC5kYXRhc2V0LmNoZWNrZWQgPSAndHJ1ZSc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChmaWVsZCkge1xuXG4gICAgdmFyIHJlZ0V4cCA9IC9eKFthLXowLTlfLV0rXFwuKSpbYS16MC05Xy1dK0BbYS16MC05Xy1dKyhcXC5bYS16MC05Xy1dKykqXFwuW2Etel17Miw2fSQvO1xuXG4gICAgaWYoIWZpZWxkLnZhbHVlIHx8IGZpZWxkLnZhbHVlLnNlYXJjaChyZWdFeHApKSB7XG4gICAgICAgZmllbGQuc3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMyknO1xuICAgICAgIGZpZWxkLmRhdGFzZXQuY2hlY2tlZCA9ICdmYWxzZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICBmaWVsZC5zdHlsZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC4zKSc7XG4gICAgICAgZmllbGQuZGF0YXNldC5jaGVja2VkID0gJ3RydWUnO1xuICAgIH1cbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGNoZWNrZWRJbnB1dHMoKSB7XG5cbiAgdmFyIGNoZWNrZWQgPSBbXTtcbiAgdmFyIGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNteWZvcm0gaW5wdXQnKTtcblxuICBmb3IodmFyIGkgPSAwO2kgPCBpbnB1dHMubGVuZ3RoO2krKykge1xuICAgY2hlY2tlZC5wdXNoKGlucHV0c1tpXS5kYXRhc2V0LmNoZWNrZWQpO1xuICB9XG5cbiAgaWYoY2hlY2tlZC5ldmVyeShjb21wYXJlKSkge1xuICAgIHNlbmRQb3N0UmVxdWVzdCgpO1xuICAgIC8vcmV0dXJuIGFsZXJ0KCdmb3JtIHN1Ym1pdCcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhbGVydCgnZm9ybSBkb250IHN1Ym1pdCcpO1xuICB9XG5cbiAgICBmdW5jdGlvbiBjb21wYXJlKGVsKSB7XG4gICAgICAgICAgIHJldHVybiBlbCA9PT0gJ3RydWUnO1xuICAgICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbmRQb3N0UmVxdWVzdChlKSB7XG4gICAgdmFyIGJvZHkgPSAkKCcjbXlmb3JtJykuc2VyaWFsaXplKCk7XG4gICAgY29uc29sZS5sb2coYm9keSk7XG5cbiAgJC5hamF4KHtcbiAgICB1cmw6ICcvb3JkZXInLFxuICAgIGRhdGFUeXBlOiAndGV4dCcsXG4gICAgdHlwZTogJ3Bvc3QnLFxuICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICBkYXRhOiBib2R5LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEsIHRleHRTdGF0dXMsIGpReGhyKSB7XG4gICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICBoZWFkLmlubmVySFRNTCA9IGRhdGE7XG4gICAgICAkKCcjbXlmb3JtJykuaHRtbChoZWFkKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihqUXhyLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3JUaHJvd24pO1xuICAgIH1cbiAgfSk7XG4gIH1cblxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGZyb250ZW5kL2pzL215LXNjcmlwdHMvbXktdmFsaWRhdGlvbi5qc1xuICoqLyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FDMUJBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBOztBQUtBO0FBQUE7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBSkE7QUFMQTtBQUxBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUxBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBUUE7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUVBOzs7Iiwic291cmNlUm9vdCI6IiJ9