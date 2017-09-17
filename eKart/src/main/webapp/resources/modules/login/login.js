angular.module("loginPage",[])
.controller("loginController",["$scope", "commonConstants",function($scope,commonConstants){
	$scope.login = {};
	$scope.login.general= {}
	$scope.login.general.reveal = false;
	$scope.login.general.passpattern = commonConstants.pass_pattern;
	$scope.login.pills = {status:true};
	$scope.login.formdata = {};
	
}])