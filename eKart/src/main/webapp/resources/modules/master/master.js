angular.module("masterPage",[])
.controller("masterController",["$scope", "$state", "$translatePartialLoader", "$http",function($scope, $state, $translatePartialLoader, $http){
	
	$http.post("api/ekartLogin/firstCall").then(function(res){
		console.log("Called");
	}, function(res){
		console.log("called");
	})
	
}])