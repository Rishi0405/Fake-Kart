angular.module('eKart',[
		'barcodeListener',
		'pascalprecht.translate',
		'ngMaterial',
		'ngMessages',
		'ngAria',
		'ngSanitize',
		'ngAnimate',
		'ui.router',
		'oc.lazyLoad',
		'ui.bootstrap',
])
angular.element(document).ready(function() {
  angular.bootstrap(document, ['eKart']);
});