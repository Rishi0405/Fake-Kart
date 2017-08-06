var myTitle = function(){
	return{
		restrict: "E",
		template: "<title>Easy Kart</title>",
		replace:true,
	}
}

var fixedHeader = function($window, $timeout){
	return{
		restrict: "E",
		scope: true,
		template: '<div ng-include="templatelink"></div>',
		controller: function($scope, $element){
			$scope.templatelink = '';
		},
		link: function(scope,element,attr){
			angular.element($window).on("scroll", function(e) {
	            if(window.scrollY >= 200){
	            	scope.templatelink = './resources/modules/banners/header.html';
	            }else{
	            	scope.templatelink = '';
	            }
	            $timeout(function(){scope.$digest();},5);
	        });
			scope.$on("$destroy", function(){
				angular.element($window).off("scroll")
			})
		}
	}
}

fixedHeader.$inject = ['$window', '$timeout'];

angular.module("eKartDirective",[])
.directive("myTitle",myTitle)
.directive("fixedHeader",fixedHeader)