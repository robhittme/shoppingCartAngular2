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
  .controller('ProductsCtrl', function($scope, $location, AddService) {

    $scope.products = AddService.getAllProducts();
    $scope.addProduct = function() {
      $location.path('/Home');
    };
    $scope.createProduct = function(product) {
      AddService.createNewProduct(product);
      // $location.path('/Home');
    };

    // $scope.addProductToCart = function(product) {
    //     $scope.Products.push(product);
    //   };

  })

  .controller('UDCtrl', function($scope, $routeParams, $location, PostService) {
    
    $scope.product = PostService.showProduct({ id: $routeParams.id });
    $scope.delete = function() {
      PostService.delete({ id: $routeParams.id });
    };

    $scope.updateProduct = function() {
      PostService.updateProduct($scope.product);
      $location.path('/Admin/' + $routeParams.id);
    };
    // editing
    // deleting
    // showing

  })

  .controller('CartCtrl', function($scope, $routeParams, $location, AddToCartService, CartService) {

      $scope.addProductToCart = function(product) {
        AddToCartService.createNewCartItem(product);
        $location.path('/Cart');
      };
    $scope.deleteItem= function() {
      CartService.deleteCartItem({id: $routeParams.id });
    }
  });

