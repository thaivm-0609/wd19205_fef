window.AddController = function ($scope, $http, $location) {
    let apiUrl = 'http://localhost:3000/products';

    $scope.onSubmit = function () {
        //Kiểm tra dữ liệu hợp lệ hay không?
        let valid = true; 
        let name = $scope.inputValue.name;
        let price = $scope.inputValue.price;
        let image = $scope.inputValue.image;

        //kiểm tra name
        if (!name || name == '' || name.length < 3) {
            valid = false;
        }
        if (!price || price == '' || price < 0) {
            valid = false;
        }
        if (!image || image == '') {
            valid = false;
        }

        //B1: lấy dữ liệu ng dùng nhập vào form
        const newProduct = {
            ...$scope.inputValue
        }
        // console.log(1);
        if (valid) {
            //B2: gửi dữ liệu lưu vào json-server
            $http.post(apiUrl,newProduct).then(function (response) {
                if (response.status == 201) {
                    alert('Đã thêm thành công');
                    $location.path('/');
                }
            })
        } else {
            alert('Dữ liệu không hợp lệ');
        }

    }
}
