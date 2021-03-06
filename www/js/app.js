// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var news = angular.module('starter', ['ionic', 'ngCordova', 'angularMoment'])

news.run(function($ionicPlatform) {
  if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
    String.prototype.startsWith = function (str){
      return this.indexOf(str) === 0;
    };
  }
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.InAppBrowser){
      window.open = cordova.InAppBrowser.open;
    }
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
