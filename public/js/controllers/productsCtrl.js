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
			PostService.deleteProduct({ id: $routeParams.id });
			// $location.path('/Home');
		};
		// editing
		// deleting
		// showing

	}]);
