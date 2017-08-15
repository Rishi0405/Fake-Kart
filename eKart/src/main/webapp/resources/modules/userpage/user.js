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

.controller("userController", [ "$scope", "stateService", "languageService", "userConstant", function($scope, stateService, languageService, userConstant) {
	console.log("This is user page.")
	$scope.user = {};
	$scope.user.details = userConstant.userDetails
	$scope.user.nav = {}
	$scope.user.nav.navs = userConstant.navs;
	languageService.translateTo('en')
	
	$scope.user.nav.changeLanguage = function(){
		console.log($scope.user.language)
		languageService.translateTo($scope.user.language)
	}
}])