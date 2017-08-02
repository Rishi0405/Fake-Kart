angular.module("homePage",[])
.constant("homeConstant",{
	
})
.controller("homeController",["$scope", "homeConstant",function($scope,loginConstant){
	console.log("home controller");
}])