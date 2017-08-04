var necessaryRootVariables = function($rootScope, $state, $stateParams, $translate){
	$rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$translate = $translate;
}

var debuggeUiRouter = function($rootScope) {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
}

necessaryRootVariables.$inject = ['$rootScope', '$state', '$stateParams', '$translate']
debuggeUiRouter.$inject = ["$rootScope"];

angular.module("eKartRun",[])
.run(necessaryRootVariables)
.run(debuggeUiRouter)