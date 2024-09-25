window.AddController = function ($scope, $http, $location) {
    let apiUrl = 'http://localhost:3000/products';

    $scope.onSubmit = function () {
        //B1: lấy dữ liệu ng dùng nhập vào form
        const newProduct = {
            ...$scope.inputValue
        }
        
        //B2: gửi dữ liệu lưu vào json-server
        $http.post(apiUrl,newProduct).then(function (response) {
            if (response.status == 201) {
                alert('Đã thêm thành công');
                $location.path('/');
            }
        })
    }
}
