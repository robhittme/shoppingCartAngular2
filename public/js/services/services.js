'use strict';
angular.module('ngDay2App')
	.factory('PostsSvc', function($resource) {
		return $resource('api/collections/demotiy',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})

	.factory('PostSvc', function($resource) {
		return $resource('api/collections/demotiy/:id',
			{
				id: '@_id'
			},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
				delete: { method: 'DELETE'}
			})
	})

	.factory('AddService', function($resource) {
		return $resource('api/collections/admin', {},
			{
				getAllProducts: {
					method: 'GET',
					isArray: true
				},
				createNewProduct: {
					method: 'POST'
				}
			});
	})

	.factory('PostService', function($resource) {
		return $resource('api/collections/admin/:id',
			{
				id: '@_id'
			}, 
			{
				showProduct: { method: 'GET'	},
				updateProduct: { method: 'PUT'	},
				deleteProduct: { method: 'DELETE' }
			})
	})

	.factory('AddToCartService', function($resource) {
		return $resource('api/collections/shoppingCart', {},
			{
				getAllCartItems: {
					method: 'GET',
					isArray: true
				},
				createNewCartItem: {
					method: 'POST'
				}
			});
	})


	.factory('CartService', function($resource) {
		return $resource('api/collections/shoppingCart/:id',
			{
				id: '@_id'
			}, 
			{
				showCartItem: { method: 'GET'	},
				updateCartItem: { method: 'PUT'	},
				deleteCartItem: { method: 'DELETE' }
			})
	});
