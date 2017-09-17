angular.module("billingPage", [])
.controller("billingController",["$scope",function($scope){
	
	$scope.billing = {};
	
	
	$scope.billing.callBack = function(code){
		console.log("Billing page", code)
	}
	
}])