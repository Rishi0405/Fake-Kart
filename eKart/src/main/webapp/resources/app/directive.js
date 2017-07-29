var title = function(){
	return{
		restrict: "E",
		template: "<title>Easy Kart</title>"
	}
}

angular.module("eKartDirective",[])
.directive("title",title)