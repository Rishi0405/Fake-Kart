angular.module("loginPage",[])
.constant("loginConstant",{
	pass_pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
})
.controller("loginController",["$scope", "loginConstant",function($scope,loginConstant){
	$scope.login = {};
	$scope.login.general= {}
	$scope.login.general.reveal = false;
	$scope.login.general.passpattern = loginConstant.pass_pattern;
	$scope.login.pills = {status:true};
	$scope.login.formdata = {};
	
}])