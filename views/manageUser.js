var app = angular.module("user",[])
var apiBase = "http://localhost:8080"
app.controller("userController", userController)

function userController($scope,$http){
    var vm = this;
    vm.appTitle = "User Management Portal"

    $scope.listUser = function(){
        $http.get(apiBase+"/list").then(function (response) {
            console.log(response.data)
            vm.listUsers = response.data
            /*setTimeout(function(){
                $('#userTable').DataTable({
                    "processing": true,
                    "serverSide": true,
                    "ajax": apiBase+"/sort"
                });
            },1000)*/
        })
    }
    $scope.listUser()

    $scope.addUser = function(){
        $http.post(apiBase+"/add",vm.userObj).then(function (response) {
            if(response.status){
                $scope.listUser()
            }
            vm.userObj = {}
        })
    }

    $scope.updateUser = function(id){
        $http.post(apiBase+"/find?id="+id).then(function (response) {
            if(response.status){
                vm.userObj = response.data
            }
        })
    }

    $scope.deleteUser = function(id){
        console.log(id)
        $http.post(apiBase+"/delete?id="+id).then(function (response) {
            if(response.status){
                $scope.listUser()
            }
        })
    }
}