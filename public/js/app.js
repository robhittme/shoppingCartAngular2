'use strict';

angular
  .module('ngDay2App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui-Bootstrap'
    'ngDay2App.directive'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/blog', {
        templateUrl: 'views/blog-list.html',
        controller: 'PostsCtrl'
      })
      .when('/new', {
        templateUrl: 'views/blog-create.html',
        controller: 'PostsCtrl'
      })
      .when('/blog/:id', {
        templateUrl: 'views/blog-detail.html',
        controller: 'PostCtrl'
      })
      .when('/blog/:id/edit', {
        templateUrl: 'views/blog-editDetail.html',
        controller: 'PostCtrl'
      })
      .when('/Cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl'
      })
      .when('/Shop', {
        templateUrl: 'views/products.html',
        controller:'ProductsCtrl'
      })
      .when('/Admin', {
        templateUrl: 'views/Admin.html',
        controller: 'ProductsCtrl'
      })
      .when('/Cart/{{product._id}}/edit', {
        templateUrl: 'views/cart-editDetail.html',
        controller: 'UDCtrl'
      })
      .when('/tabs', {
        templateUrl: 'views/tabs.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });

