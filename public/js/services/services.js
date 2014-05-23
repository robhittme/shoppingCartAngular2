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
			}
			)
	});

angular.module('shoppingCart20App')
	.factory('AddService', function($resource){
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/robhittmeCart', {},
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
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/robhittmeCart/:id', 
		{
			id: '@_id'
		}, 
		{
			showProduct: { method: 'GET'	},
			updateProduct: { method: 'PUT'	},
			deleteProduct: { method: 'DELETE'	}


		});
	});
