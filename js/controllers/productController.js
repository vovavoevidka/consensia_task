
window.jsonp_callback = function (data) {
	console.log(data.found);
}

var productController = function ($scope, $resource, $http) {
	//$http.defaults.useXDomain = true;
	//$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

	$scope.url = "http://api.saxo.com/v1/products/18267552.json?callback=jsonp_callback&key=563c52b3177047978c0bdfbfd776ebd3";
	//$scope.url = "http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=jsonp_callback";
	//var Book = $resource($scope.url);
	//var book = Book.get({},
	//    function (data) {
	//    	console.log(data);
	//    },
	//    function (error) {
	//    });


	//$http({ method: 'GET', url: 'http://api.saxo.com/v1/products/18267552.json?key=563c52b3177047978c0bdfbfd776ebd3' })
	//.success(function(data, status){
	//	console.log(data);
	//})
	//.error(function (data, status) {
	//	console.error(data);
	//});

	//delete $http.defaults.headers.common['X-Requested-With'];

	//$scope.data = "unknown";
	//$http.get($scope.url, { headers: { 'Access-Control-Allow-Origin': "*", 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE', 'Access-Control-Allow-Headers': 'Content-Type' } }).success(function (data) {
	//	$scope.data = data;
	//});

	//$http.jsonp($scope.url).success(function (data) {
	//	$scope.data = data;
	//});

	$http.jsonp($scope.url);

	//$.ajax({
	//	url: 'http://api.saxo.com/v1/products/18267552.json?key=563c52b3177047978c0bdfbfd776ebd3',
	//	type: "GET",
	//	async: false,
	//	dataType: 'text',
	//	crossDomain: true,
	//	success: function(data, status){
	//		console.log(data);
	//	},
	//});
}
