var translateErrorHandler = function ($q, $log) {
	  return function (part, lang, response) {
		    $log.error('The "' + part + '/' + lang + '" part was not loaded.');
		    return $q.when({});
	  };
}

var translateStrategy = function ($sce) {
	  return function (value, mode) {
	    if (mode === 'text') {
	    	var result = '';
	      result = $sce.trustAsHtml(value);
	      if (result.$unwrapTrustedValue) {
	        result = result.$unwrapTrustedValue();
	      }
	      value = result;
	    }
	    return value;
	  };
}

var dataService = function($http, $q){
	var call = function(type,url,data,options){
		var deffer = $q.defer();
		
		$http[type](url,data,options).success(function(res){
			deffer.resolve(res);
		}).error(function(res){
			deffer.reject(res);
		})
		
		return deffer.promise;
	}
	return {
		call: call,
	}
}

var promise = function($q){
	var createPromise = function(){
		return $q.deffer()
	}
	var resolvePromise = function(promise){
		promise.resolve()
	}
	return {
		createPromise: createPromise,
		resolvePromise: resolvePromise,
	}
}

var stateService = function($state){
	var goToState = function(state){
		$state.go(state);
	}
	
	return{
		goToState: goToState
	}
}

var languageService = function($translate){
	var translateTo = function(lang){
		$translate.use(lang)
	}
	return {
		translateTo: translateTo
	}
}


translateErrorHandler.$inject = ["$q", "$log"];
translateStrategy.$inject = ["$sce"];
dataService.$inject = ["$http", "$q"];
promise.$inject = ["$q"];
stateService.$inject = ["$state"];
languageService.$inject = ["$translate"];

angular.module("eKart")
.factory('MyErrorHandler', translateErrorHandler)
.factory('translateStrategy', translateStrategy)
.factory("dataService",dataService)
.factory("promise",promise)
.factory("languageService", languageService)
.factory("stateService", stateService)