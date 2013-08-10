'use strict';

console.log('cordovaReady module');

angular.module('assetsApp')
  .service('cordovaReady', function cordovaReady() {
	  return function (fn) {

	  console.log('cordovaReady 2');

	    var queue = [];

	    var impl = function () {
	      queue.push(Array.prototype.slice.call(arguments));
	    };

	    document.addEventListener('deviceready', function () {
	    	console.log('DEVICE READY!!!!');
	      queue.forEach(function (args) {
	        fn.apply(this, args);
	      });
	      impl = fn;
	    }, false);

	    return function () {
	      return impl.apply(this, arguments);
	    };
	  };
	});

