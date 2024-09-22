window.HomeController = function ($scope, $http) {
    let apiUrl = 'http://localhost:3000/products'; //khai báo ApiUrl

    //khai báo hàm getProducts
    $scope.getProducts = function () {
        $http.get(apiUrl).then(function (response) { //gọi API
            if (response.status == 200) { //kiểm tra mã trả về 200 tức là thành công
                $scope.products = response.data; //gán dữ liệu trả về cho biến products
            }
        })
    }

    //thực thi hàm getProducts
    $scope.getProducts();
}
