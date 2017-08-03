var $translateProviderRef = "";

var constants = function(){
	return {
		english: "resources/languagefiles/en.json",
		french: "resources/languagefiles/fr.json"
	}
}
var translate = function($translateProvider) {
	$translateProviderRef = $translateProvider;
	
}
var translateDefinition = function(languageService){
	$translateProviderRef.preferredLanguage('en');
	$translateProviderRef.translations('en', languageService.getLanguage("english"));
	$translateProviderRef.translations('fr', languageService.getLanguage("french"));
}

var getLanguage = function($http){
	return function(urls){
		return function(language){
			$http.get(urls[language]).then(function(res){
				return res.data;
			},function(res){
				
			});
		}
	}
}

var languageService = function(getLanguage, urls){
	var languages = new getLanguage(urls);
	return {
		getLanguage: languages
	}
}

translate.$inject = ["$translateProvider"];
translateDefinition.$inject = ["languageService"];
getLanguage.$inject = ["$http"];
languageService.$inject = ["getLanguage","urls"];

angular.module("translateConfig",['pascalprecht.translate'])
.constant("urls",constants())
.config(translate)
.run(translateDefinition)
.factory("getLanguage",getLanguage)
.factory("languageService",languageService)
