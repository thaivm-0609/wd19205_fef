window.DetailController = function ($scope, $http, $routeParams) {
    let apiUrl = 'http://localhost:3000/products';
    let id = $routeParams.id; //lấy id từ params

    $scope.getDetail = function () { //khởi tạo hàm
        $http.get(`${apiUrl}/${id}`).then(function (response) {
            if (response.status == 200) {
                $scope.pro = response.data;
            }
        })
    }

    $scope.getDetail(); //thực thi hàm
}
