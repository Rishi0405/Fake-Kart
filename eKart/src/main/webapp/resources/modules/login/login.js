angular.module("loginPage",[])
.constant("loginConstant",{
	
})
.controller("loginController",["$scope", "loginConstant",function($scope,loginConstant){
	
	$scope.signup = {};
	$scope.signup.formdata = {};
}])