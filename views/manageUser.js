var app = angular.module("user",[])
var apiBase = "http://localhost:8080"
app.controller("userController", userController)

function userController($scope){
    var vm = this;
    vm.appTitle = "User Management Portal"

    $scope.listUser = function(){
        $http.get(apiBase+"/list").then(function (response) {
            vm.listUsers = response
        })
    }

    $scope.addUser = function(){
        $http.post(apiBase+"/add",vm.userObj).then(function (response) {
            vm.listUsers = response
        })
    }

    $scope.updateUser = function(){

    }

    $scope.deleteUser = function(){

    }
}