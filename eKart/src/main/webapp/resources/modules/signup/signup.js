angular.module("signupPage",[])
.constant("signupConstant",{
	email_pattern: /^.+@.+\..+$/,
	pass_pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
})
.controller("signupController",["$scope", "signupConstant",function($scope,signupConstant){
	$scope.signup = {};
	$scope.signup.genral= {} 
	$scope.signup.genral.reveal = false;
	$scope.signup.genral.emailpattern = signupConstant.email_pattern;
	$scope.signup.genral.passpattern = signupConstant.pass_pattern;
	$scope.signup.pills = {status:true};
	$scope.signup.formdata = {};
}])