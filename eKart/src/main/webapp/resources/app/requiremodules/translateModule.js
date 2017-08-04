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
	
	languageService.getLanguage("english").then(function(res){
		$translateProviderRef.translations('en', res);
	})
	languageService.getLanguage("french").then(function(res){
		$translateProviderRef.translations('fr', res);
	})
}

var getLanguage = function($http, $q){
	return function(urls){
		return function(language){
			var deffer = $q.defer();
			$http.get(urls[language]).then(function(res){
				deffer.resolve(res.data);
			},function(res){
				
			});
			return deffer.promise
		}
	}
}

var languageService = function(getLanguage, urls){
	var getLanguage = new getLanguage(urls);
	return {
		getLanguage: getLanguage
	}
}

translate.$inject = ["$translateProvider"];
translateDefinition.$inject = ["languageService"];
getLanguage.$inject = ["$http", "$q"];
languageService.$inject = ["getLanguage","urls"];

angular.module("translateConfig",['pascalprecht.translate'])
.constant("urls",constants())
.config(translate)
.run(translateDefinition)
.factory("getLanguage",getLanguage)
.factory("languageService",languageService)
