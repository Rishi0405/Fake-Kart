var title = function(){
	return{
		restrict: "E",
		template: "<title>Easy Kart</title>",
		replace:true,
	}
}

angular.module("eKartDirective",[])
.directive("myTitle",title)