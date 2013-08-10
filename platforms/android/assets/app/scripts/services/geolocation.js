'use strict';

console.log('geolocation module');

angular.module('assetsApp')
  .factory('geolocation', function ($rootScope, cordovaReady) {
	  console.log('geolocation.js:factory');
		  return {
		    getCurrentPosition: function (onSuccess, onError, options) {
		  	  console.log('geolocation 2');
		      navigator.geolocation.getCurrentPosition(function () {
		    	  console.log('navigator.geolocation.getCurrentPosition()');

		        var that = this,
		          args = arguments;

		        if (onSuccess) {
		          $rootScope.$apply(function () {
		            onSuccess.apply(that, args);
		          });
		        }
		      }, function () {
		        var that = this,
		          args = arguments;

		        if (onError) {
		          $rootScope.$apply(function () {
		            onError.apply(that, args);
		          });
		        }
		      },
		      options);
		    }
		  };
		});