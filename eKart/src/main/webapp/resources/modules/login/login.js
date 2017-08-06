angular.module("loginPage",[])
.constant("loginConstant",{
	email_pattern: /^.+@.+\..+$/,
	pass_pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
})
.controller("loginController",["$scope", "loginConstant",function($scope,loginConstant){
	$scope.login = {};
	$scope.login.genral= {} 
	$scope.login.genral.reveal = false;
	$scope.login.genral.emailpattern = loginConstant.email_pattern;
	$scope.login.genral.passpattern = loginConstant.pass_pattern;
	$scope.login.pills = {status:true};
	$scope.login.formdata = {};
	
}])