angular.module("signupPage",[])
.constant("signupConstant",{
	
})
.controller("signupController",["$scope", "signupConstant",function($scope,signupConstant){
	$scope.signup = {};
	$scope.signup.formdata = {};
}])