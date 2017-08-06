var translate = function($translateProvider, $translatePartialLoaderProvider) {
	$translateProvider.useSanitizeValueStrategy('sanitize');
	$translateProvider.useLoaderCache(true);
	$translateProvider.useLoader('$translatePartialLoader', {
		urlTemplate: './resources/languagefiles/{part}/{lang}.json',
		loadFailureHandler: 'MyErrorHandler'
	});
	//TranslateLoader
	$translatePartialLoaderProvider.addPart('home');
	$translateProvider.preferredLanguage('en');
}

translate.$inject = ["$translateProvider", "$translatePartialLoaderProvider"];

angular.module("translateConfig",['pascalprecht.translate'])
.config(translate)
