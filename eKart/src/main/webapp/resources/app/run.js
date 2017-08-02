var debuggeUiRouter = function($rootScope) {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
}

debuggeUiRouter.$inject = ["$rootScope"];

angular.module("eKartRun",[])
.run(debuggeUiRouter)