var translate = function($translateProvider) {
	$translateProvider.useSanitizeValueStrategy('sanitize');
	$translateProvider.useStaticFilesLoader({
	    prefix: 'resources/languagefiles/',
	    suffix: '.json'
	});
	$translateProvider.preferredLanguage('en');
}

translate.$inject = ["$translateProvider"];

angular.module("translateConfig",['pascalprecht.translate'])
.config(translate)
