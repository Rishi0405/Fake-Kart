angular.module("homePage",[])
.constant("homeConstant",{
	languages: [{label:"English", value:"en"},{label:"French", value:"fr"},{label:"Tamil", value:"ta"}]
})
.controller("homeController",["$scope", "stateService", "languageService", "homeConstant",function($scope, stateService, languageService, homeConstant){
	console.log("home")
	$scope.home = {};
	$scope.home.header = {};
	$scope.home.footer = {};
	$scope.home.footer.language = {data:homeConstant.languages, model: "en"};
	languageService.translateTo($scope.home.footer.language.model)
	
	$scope.home.header.gotoState = function(state){
		console.log(state)
		stateService.goToState(state);
	}
	
	
	$scope.home.footer.translate = function(){
		languageService.translateTo($scope.home.footer.language.model)
	}
}])