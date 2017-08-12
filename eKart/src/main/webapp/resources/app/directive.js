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
			
			var fixedScroll = function(e) {
	            if(window.scrollY >= 200){
	            	scope.templatelink = './resources/modules/home/banners/header.html';
	            }else{
	            	scope.templatelink = '';
	            }
	            $timeout(function(){scope.$digest();},5);
	        }
			
			angular.element($window).on("scroll", fixedScroll);
			
			scope.$on("$destroy", function(){
				angular.element($window).off("scroll")
			})
		}
	}
}
var header = function(){
	return{
		restrict: "E",
		template: '<div ng-include="\'./resources/modules/home/banners/header.html\'">',
		replace:true
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
var barcodescanner = function($window, $timeout){
	return{
		restrict: "E",
		scope:{
			callback : "="
		},
		controller: function($scope, $element){
			 $scope.chars = []; 
			 $scope.chars[0] = [];
			 $scope.eventIndex = {pressed:false, i:0, j:0, timeout:""};
		},
		link: function(scope, element, attrs){
			
			var executeCode = function(e) {
				scope.chars[scope.eventIndex.i].push(String.fromCharCode(e.which));
				if (e.which == 13) {
					scope.eventIndex.i++;
		            scope.chars[scope.eventIndex.i] = [];
				}
				if (scope.eventIndex.pressed == false || e.which == 13) {
					scope.eventIndex.timeout = $timeout(function () {
		                if (scope.chars[scope.eventIndex.j].length >= 10) {
		                	console.log(scope.eventIndex.j)
		                    scope.callback(scope.chars[scope.eventIndex.j].join(""));
		                    scope.eventIndex.j++;
		                }
		                $timeout.cancel(scope.eventIndex.timeout);
		                scope.eventIndex.pressed = false;
		            },700);
		        }
		        pressed = true;
		    }
			
			angular.element($window).on("keypress",executeCode);
			
			scope.$on("$destroy", function(){
				console.log("Element destroyed");
				scope.chars = null;
				scope.eventIndex = null;
				angular.element($window).off("keypress");
			})
		}
	}
}

fixedHeader.$inject = ['$window', '$timeout'];
barcodescanner.$inject = ['$window', '$timeout'];

angular.module("eKart")
.directive("myTitle",myTitle)
.directive("fixedHeader",fixedHeader)
.directive("header",header)
.directive("signuploginHeader",signuploginHeader)
.directive("barCodeScanner", barcodescanner)