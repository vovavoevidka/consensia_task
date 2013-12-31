var productController = function ($scope, $resource, $http) {
    $http.defaults.useXDomain = true;
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    /*http://api.saxo.com/v1/products/18267552.xml?key=563c52b3177047978c0bdfbfd776ebd3*/
    //var Book = $resource('http://api.saxo.com/v1/products/18267552.xml?key=563c52b3177047978c0bdfbfd776ebd3');
    //var book = Book.get({},
    //    function (data) {
    //        console.log(book);
    //    },
    //    function (error) {
    //    });
    $http({ method: 'GET', url: 'http://api.saxo.com/v1/products/18267552.json?key=563c52b3177047978c0bdfbfd776ebd3' })
    .success(function(data, status){
        console.log(data);
    })
    .error(function(data, status){});
}