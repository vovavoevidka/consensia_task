var app = angular.module('app', ['ngResource'])
    .config(['$httpProvider', function ($httpProvider) {
    	//delete $httpProvider.defaults.headers.common["X-Requested-With"];
    }])
	//.config(function($httpProvider) {
	//	$httpProvider.responseInterceptors.push(function ($q) {
	//		return function (promise) {
	//			return promise.then(function (response) {
	//				return response;
	//			}, 
	//			function (response) {
	//				if (response.status == 401) {
	//					window.location.href = '/Account/Login?redirectUri=' + encodeURIComponent(window.location.href);
	//					return response;
	//				}
	//				return response;
	//			});
	//		};
	//	}) })
	.controller('productController', productController);