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

dataFunction.$inject = ["$http", "$q"];
promise.$inject = ["$q"];

angular.module("eKartService",[])
.factory("dataFunction",dataFunction)
.factory("promise",promise)