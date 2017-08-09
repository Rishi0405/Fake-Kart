var dataFunction = function($http, $q){
	var getData = function(type,url,data,options){
		var deffer = $q.defer();
		
		$http[type](url,data,options).success(function(res){
			deffer.resolve(res);
		}).error(function(res){
			deffer.reject(res);
		})
		
		return deffer.promise;
	}
	return {
		getData: getData,
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

var translateErrorHandler = function ($q, $log) {
	  return function (part, lang, response) {
		    $log.error('The "' + part + '/' + lang + '" part was not loaded.');
		    return $q.when({});
	  };
}

dataFunction.$inject = ["$http", "$q"];
promise.$inject = ["$q"];
translateErrorHandler.$inject = ["$q", "$log"];

angular.module("eKart")
.factory("dataFunction",dataFunction)
.factory("promise",promise)
.factory('MyErrorHandler', translateErrorHandler)