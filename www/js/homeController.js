/*
* @Author: jad
* @Date:   2016-05-04 22:21:19
* @Last Modified by:   jad
* @Last Modified time: 2016-05-18 06:24:06
*/

'use strict';

news.controller("HomeController", function($scope, $http) {

	$scope.stories = [];

	function loadStories(params, callback) {
		$http.get("https://www.reddit.com/r/ionic/new/.json", {params:params}).success(function(response) {
			var stories = [];
			angular.forEach(response.data.children, function(child) {

				if(!child.data.thumbnail.startsWith("http")){
					child.data.thumbnail = "https://www.redditstatic.com/about/assets/reddit-alien.png";
				}
				stories.push(child.data);
			});
			callback(stories);
		});
	}

	$scope.loadMoreStrories = function() {
		var params = {};
		if ($scope.stories.length > 0) {
			params['after'] = $scope.stories[$scope.stories.length - 1].name;
		}
		loadStories(params, function(s) {
			$scope.stories = $scope.stories.concat(s);
			$scope.$broadcast('scroll.infiniteScrollComplete');
		});
	}

	$scope.loadNewerStories = function() {
		var params = {};
		if ($scope.stories.length > 0) {
			params['before'] = $scope.stories[0].name;
		}
		loadStories(params, function(stories) {
			$scope.stories = stories.concat($scope.stories);
			$scope.$broadcast('scroll.refreshComplete');
		});
	}

	$scope.openLink = function(url) {
		window.open(url, '_blank', 'location=no,clearcache=yes');
	}
})
