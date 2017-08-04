angular.module("homePage",[])
.constant("homeConstant",{
	languages: [{label:"English", value:"en"},{label:"French", value:"fr"}]
})
.controller("homeController",["$scope", "$state", "$translate", "homeConstant",function($scope, $state, $translate, homeConstant){
	console.log("home")
	$scope.home = {};
	$scope.home.header = {};
	$scope.home.footer = {};
	$scope.home.footer.language = {data:homeConstant.languages, model: "en"};
	
	
	$scope.home.header.gotoState = function(state){
		console.log(state)
		$state.go(state);
	}
	
	
	$scope.home.footer.translate = function(){
		$translate.use($scope.home.footer.language.model)
	}
}])