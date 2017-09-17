angular.module("signupPage",[])
.controller("signupController",["$scope", "commonConstants",function($scope,commonConstants){
	$scope.signup = {};
	$scope.signup.general= {} 
	$scope.signup.general.reveal = false;
	$scope.signup.general.emailpattern = commonConstants.email_pattern;
	$scope.signup.general.passpattern = commonConstants.pass_pattern;
	$scope.signup.pills = {status:true};
	$scope.signup.formdata = {};
}])