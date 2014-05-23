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
