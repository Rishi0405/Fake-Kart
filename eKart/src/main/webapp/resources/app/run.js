var necessaryRootVariables = function($rootScope, $state, $stateParams, $translate){
	$rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$translate = $translate;
}

var debuggeUiRouter = function($rootScope) {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
}

var translateRefresh = function ($rootScope, $translate) {
	  $rootScope.$on('$translatePartialLoaderStructureChanged', function () {
		    $translate.refresh();
	  });
}
necessaryRootVariables.$inject = ['$rootScope', '$state', '$stateParams', '$translate']
debuggeUiRouter.$inject = ["$rootScope"];
translateRefresh.$inject = ["$rootScope", "$translate"];

angular.module("eKart")
.run(necessaryRootVariables)
.run(debuggeUiRouter)
.run(translateRefresh)
.run(function ($browser) {
    $browser.baseHref = function () { return "/" };
  });