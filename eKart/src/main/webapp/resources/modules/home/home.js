angular.module("homePage",[])
.controller("homeController",["$scope", "stateService", "languageService", "commonConstants",function($scope, stateService, languageService, commonConstants){
	console.log("home")
	$scope.home = {};
	$scope.home.header = {};
	$scope.home.footer = {};
	$scope.home.footer.language = {data:commonConstants.languages, model: "en"};
	languageService.translateTo($scope.home.footer.language.model)
	
	$scope.home.header.gotoState = function(state){
		console.log(state)
		stateService.goToState(state);
	}
	
	
	$scope.home.footer.translate = function(){
		languageService.translateTo($scope.home.footer.language.model)
	}
}])