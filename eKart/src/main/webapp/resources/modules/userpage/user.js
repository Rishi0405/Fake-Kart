angular.module("userPage", [])
.controller("userController", [ "$scope", "stateService", "languageService", "commonConstants", function($scope, stateService, languageService, commonConstants) {
	console.log("This is user page.")
	$scope.user = {};
	$scope.user.details = commonConstants.userDetails
	$scope.user.nav = {}
	$scope.user.nav.navs = commonConstants.navs;
	languageService.translateTo('en')
	
	$scope.user.nav.changeLanguage = function(){
		console.log($scope.user.language)
		languageService.translateTo($scope.user.language)
	}
}])