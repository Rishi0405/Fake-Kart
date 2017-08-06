angular.module("loginPage",[])
.constant("loginConstant",{
	header: './resources/modules/home/banners/header.html',
	pass_pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
})
.controller("loginController",["$scope", "loginConstant",function($scope,loginConstant){
	$scope.login = {};
	$scope.login.general= {}
	$scope.login.general.header = loginConstant.header;
	$scope.login.general.reveal = false;
	$scope.login.general.passpattern = loginConstant.pass_pattern;
	$scope.login.pills = {status:true};
	$scope.login.formdata = {};
	
}])