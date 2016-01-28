angular.module('App',['ngAnimate','angularMoment']).controller('Controller',function($scope) {
	
	$scope.page = {}
	
	$scope.posts = [];
	
	$scope.newPost={};

	$scope.asValue = 0

	$scope.postInfo = function() {
		$scope.newPost.comments = []
		$scope.newPost.newComment = {};
		$scope.posts.push($scope.newPost)
		$scope.newPost.count = 0
		$scope.logForm.$setPristine()
		$scope.newPost.time = new Date()
		$scope.newPost = {}
	  }
	  
	$scope.commentPost = function(form) {
		console.log(form)
		form.comments.push(form.newComment)
		form.newComment = {};
		form.commentForm.$setPristine()
	  }

 })
