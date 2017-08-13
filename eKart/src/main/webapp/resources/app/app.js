angular.module('eKart',[
		'pascalprecht.translate',
		'ui.bootstrap',
		'ngMaterial',
		'ngMessages',
		'ngAria',
		'ngSanitize',
		'ngAnimate',
		'ngTouch',
		'ui.router',
		'oc.lazyLoad',
		'ui.bootstrap',
])
angular.element(document).ready(function() {
  angular.bootstrap(document, ['eKart']);
});