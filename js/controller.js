angular.module('giphy').controller('giphyCtrl', giphyCtrl);

  function giphyCtrl($scope, giphyGotServed) {

	$scope.test = "Hello world!"

	$scope.types = ['7/11s', 'restaurant', 'strip-clubs', 'zoos', 'bars', 'deli', 'barbers/salon', 'time-machines', 'prison'];
	
	$scope.addBiz = function() {
	    giphyGotServed.postBiz($scope.biz);
	    $scope.biz = '';
	}
	
	$scope.getBiz = function() {
	    giphyGotServed.getBiz().then(function(res) {
	        $scope.biznesses = res.data.results;
	    });
	}

	$scope.getBiz();

};