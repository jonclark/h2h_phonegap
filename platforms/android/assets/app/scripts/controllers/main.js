'use strict';

console.log('maing.js module');

//angular.module('assetsApp')
//  .controller('MainCtrl', function ($scope, geolocation) {
function MainCtrl($scope, geolocation) {
	  console.log('MainCtrl');

	$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
		
	$scope.getCurLoc = function() {
		console.log('THE BUTTON CLICK WORKED!!!!');
		/*
		  geolocation.getCurrentPosition(function (position) {
		    alert('Latitude: '              + position.coords.latitude          + '\n' +
		          'Longitude: '             + position.coords.longitude         + '\n' +
		          'Altitude: '              + position.coords.altitude          + '\n' +
		          'Accuracy: '              + position.coords.accuracy          + '\n' +
		          'Altitude Accuracy: '     + position.coords.altitudeAccuracy  + '\n' +
		          'Heading: '               + position.coords.heading           + '\n' +
		          'Speed: '                 + position.coords.speed             + '\n' +
		          'Timestamp: '             + position.timestamp                + '\n');
		  });
		*/
	};
	
  });

