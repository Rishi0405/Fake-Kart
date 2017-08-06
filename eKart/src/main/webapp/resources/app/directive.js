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
		replace: true,
		link: function(scope,element,attr){
			angular.element($window).on("scroll", function(e) {
	            if(window.scrollY >= 200){
	            	scope.templatelink = './resources/modules/home/banners/header.html';
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
var signuploginHeader = function(){
	return{
		restrict: "E",
		scope:{
			status: '=status',
		},
		template: ['<div>',
					'<ul>',
					'<li ng-class="{active: status}" ',
					'ng-click="status=true">{{\'b_profile\' | translate}}</li>',
					'<li ng-class="{active: !status}" ',
					'ng-click="status=false">{{\'u_profile\' | translate}}</li>',
					'</ul>',
					'</div>'].join(""),
		replace: true
	}
}
fixedHeader.$inject = ['$window', '$timeout'];

angular.module("eKartDirective",[])
.directive("myTitle",myTitle)
.directive("fixedHeader",fixedHeader)
.directive("signuploginHeader",signuploginHeader)