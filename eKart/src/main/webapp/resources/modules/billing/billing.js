angular.module("billingPage", [])
.constant("billingConstant",{})
.controller("billingController",["$scope",function($scope){
	
	$scope.billing = {};
	
	$scope.billing.handleScan = function(){
		console.log("handled")
	}
}])