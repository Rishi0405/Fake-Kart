angular.module("loginPage",[])
.constant("loginConstant",{
	
})
.controller("loginController",["$scope", "loginConstant",function($scope,loginConstant){
	console.log("login controller");
}])