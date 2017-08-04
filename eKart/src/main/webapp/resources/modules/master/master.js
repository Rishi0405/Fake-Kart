angular.module("masterPage",[])
.controller("masterController",["$scope", "$state",function($scope, $state){
	console.log("In master")
	$scope.$on("$viewContentLoaded",function(){
		//$state.go("main.home.welcome");
	})
}])