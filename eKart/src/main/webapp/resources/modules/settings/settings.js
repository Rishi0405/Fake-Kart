angular.module("settingsPage", [])
.controller("settingsController", [ "$scope", "stateService", "languageService", "commonConstants", function($scope, stateService, languageService, commonConstants) {
	
	$scope.settings = {};
	$scope.settings.settingsList = commonConstants.settings.settingsList;
	
	
	
	//Function
	$scope.settings.navigate = function(path){
		stateService.goToState(path);
	}
	
	
}])
