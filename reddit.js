angular.module('App',['ngAnimate','angularMoment']).controller('Controller',function($scope) {
	$scope.page = {}
	$scope.time = new Date()
	//$scope.page.count = 0
	$scope.page.drop = ['votes','dates','titles']
	// $scope.page.count = function() {
	// 	$scope.page.count + 1

	// }
	
	$scope.page.postInfo = function() {
		$scope.posts = $scope.posts || []
		$scope.posts.push($scope.newPost)
		$scope.newPost = {}
		$scope.logForm.$setPristine()
	}

})