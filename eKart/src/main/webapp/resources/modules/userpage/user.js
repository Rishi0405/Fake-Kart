angular.module("userPage", [])

.constant("userConstant", {
	userDetails: {name: 'Rishi'},
	navs : [{
		icon : "window-maximize",
		title : "Dashboard",
		uiState : "main.myprofile.dashboard"
	}, {
		icon : "shopping-cart",
		title : "Billing",
		uiState : "main.myprofile.billing"
	}, {
		icon : "cog",
		title : "Settings",
		uiState : "main.myprofile.setttings"
	}],
	
})

.controller("userController", [ "$scope", "userConstant", function($scope, userConstant) {
	console.log("This is user page.")
	$scope.user = {};
	$scope.user.details = userConstant.userDetails
	$scope.user.navs = userConstant.navs;
}])