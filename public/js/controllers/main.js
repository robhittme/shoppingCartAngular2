'use strict';

angular.module('ngDay2App')
  .controller('PostsCtrl', function ($scope, $location, PostsSvc) {

    $scope.createPost = function() {
    	$location.path('/new');
    };
    $scope.newPost = function(post) {
    	PostsSvc.create(post)
    	$location.path('/blog');
    };
    $scope.posts = PostsSvc.query();
  })
  .controller('PostCtrl', function($scope, $location, $routeParams, PostSvc) {

  	$scope.post = PostSvc.show({ id: $routeParams.id });
  	$scope.delete = function() { 
  		PostSvc.delete({ id: $routeParams.id });
  		$location.path('/blog');
  	};
  	$scope.edit = function() {
  		PostSvc.edit($scope.post);
  		$location.path('/blog');
  	};

  })
  .controller('ProductsCtrl', ['$scope', '$location', 'AddService', function($scope, $location, AddService) {

    $scope.products = AddService.getAllProducts();
    $scope.addProduct = function() {
      $location.path('/Home');
    };
    $scope.createProduct = function(product) {
      AddService.createNewProduct(product);
      // $location.path('/Home');
    };

    $scope.addProductToCart = function(product) {
        $scope.Products.push(product);
      };

  }])

  .controller('UDCtrl', ['$scope', '$routeParams', '$location', 'PostService', function($scope, $routeParams, $location, PostService) {
    
    $scope.product = PostService.showProduct({ id: $routeParams.id });

    $scope.updateProduct = function() {
      PostService.updateProduct($scope.product);
      $location.path('/Home/' + $routeParams.id);
    };

    $scope.delete = function() {
      PostService.delete({ id: $routeParams.id });
    };
    // editing
    // deleting
    // showing

  }]);

