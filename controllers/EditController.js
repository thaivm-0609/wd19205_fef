window.EditController = function ($scope,$http,$routeParams,$location) {
    let apiUrl = 'http://localhost:3000/products';
    //B1: lấy thông tin chi tiết->đổ ra form
    let id = $routeParams.id; //lấy id của bản ghi
    $scope.getInfo = function () { //khởi tạo hàm gửi request, lấy data sản phẩm
        $http.get(`${apiUrl}/${id}`).then(response => {
            if (response.status == 200) {
                $scope.product = response.data;
                //gán lại dữ liệu của product cho inputValue ở trong form
                $scope.inputValue = {
                    name: response.data.name,
                    price: response.data.price,
                    image: response.data.image,
                }
            }
        })
    }

    //gọi hàm getInfo
    $scope.getInfo();

    $scope.onEdit = function () {
        //lấy dữ liệu ng dùng nhập vào form
        const newData = { ...$scope.inputValue };
        //gửi dữ liệu lên server, lưu vào database
        $http.put(
            `${apiUrl}/${id}`,
            newData
        ).then(response => {
            if (response.status == 200) {
                alert('Cập nhật thành công');
                $location.path('/');
            }
        })
    }
}