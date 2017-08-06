var translate = function($translateProvider) {
	$translateProvider.useStaticFilesLoader({
	    prefix: 'resources/languagefiles/',
	    suffix: '.json'
	});
	$translateProvider.preferredLanguage('en');
}

translate.$inject = ["$translateProvider"];

angular.module("translateConfig",['pascalprecht.translate'])
.config(translate)
