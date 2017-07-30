angular.module('eKart',[
		'ngSanitize',
		'ngAnimate',
		'ngTouch',		
		'ui.router',
		'oc.lazyLoad',
		'ui.bootstrap',
		'eKartConfig',
		'eKartRun',
		'eKartDirective',
		'eKartService',
		'eKartConstants',
])
angular.element(document).ready(function() {
  angular.bootstrap(document, ['eKart']);
});