var productController = function ($scope, $resource, $http) {
	$scope.url = "http://jsonp.jit.su/?callback=jsonp_callback&url=http%3A%2F%2Fapi.saxo.com%2Fv1%2Fproducts%2F18267552.json%3Fkey%3D563c52b3177047978c0bdfbfd776ebd3";

	$http.jsonp($scope.url);
	window.jsonp_callback = function (data) {
		var product = data.products[0];

		$scope.imageUrl = product.imageurl;
		$scope.title = product.title;
		$scope.descriptions = product.descriptions; //description, source
		$scope.tags = product.tags; //name, url
		$scope.subtitles = product.subtitles; //string
		$scope.contributors = product.contributors; //name, url
	}
}
