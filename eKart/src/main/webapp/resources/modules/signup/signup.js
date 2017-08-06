angular.module("signupPage",[])
.constant("signupConstant",{
	email_pattern: /^.+@.+\..+$/,
	pass_pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
})
.controller("signupController",["$scope", "signupConstant",function($scope,signupConstant){
	$scope.signup = {};
	$scope.signup.general= {} 
	$scope.signup.general.reveal = false;
	$scope.signup.general.emailpattern = signupConstant.email_pattern;
	$scope.signup.general.passpattern = signupConstant.pass_pattern;
	$scope.signup.pills = {status:true};
	$scope.signup.formdata = {};
}])