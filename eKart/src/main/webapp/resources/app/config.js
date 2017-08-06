var qprovider  = function($qProvider){
	$qProvider.errorOnUnhandledRejections(false)
}

var locationProvider = function($locationProvider) {
	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('');
}

var providerConfig = function($ocLazyLoadProvider) {
  $ocLazyLoadProvider.config({
	  debug: true,
	  events: true,
  });
}

var rootConfig = function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	
	.state("main",{
		url: "/",
		templateUrl: "resources/modules/master/master.html",
		resolve: {
			loadplugins: ['$ocLazyLoad', function($ocLazyLoad) {
	             return $ocLazyLoad.load({
	            	 		name: "masterPage",
	            	 		files: ["resources/modules/master/master.js"],
	            	 });
			 }]
		},
		controller: "masterController"
	})
	
	.state("main.home",{
		url: "home",
		abstract: true,
		templateUrl: "resources/modules/home/home.html",
		resolve: {
			loadplugins: ['$ocLazyLoad', function($ocLazyLoad) {
	             return $ocLazyLoad.load({
	            	 		name: "homePage",
	            	 		files: ["resources/modules/home/home.js"],
	            	 });
			 }]
		},
		controller: "homeController"
	})
	
	.state("main.home.welcome",{
		url: "/welcome",
		templateUrl: "resources/modules/home/banners/welcome.html",
	})
	
	.state("main.home.login",{
		url: "/login",
		templateUrl: "resources/modules/login/login.html",
		resolve: {
			loadplugins: ['$ocLazyLoad', function($ocLazyLoad) {
	             return $ocLazyLoad.load({
	            	 		name: "loginPage",
	            	 		files: ["resources/modules/login/login.js"],
	            	 });
			 }]
		},
		controller: "loginController"
	})
	
	.state("main.home.signup",{
		url: "/signup",
		templateUrl: "resources/modules/signup/signup.html",
		resolve: {
			loadplugins: ['$ocLazyLoad', function($ocLazyLoad) {
	             return $ocLazyLoad.load({
	            	 		name: "signupPage",
	            	 		files: ["resources/modules/signup/signup.js"],
	            	 });
			 }]
		},
		controller: "signupController"
	})
}

qprovider.$inject = ["$qProvider"];
locationProvider.$inject = ['$locationProvider'];
providerConfig.$inject = ['$ocLazyLoadProvider'];
rootConfig.$inject = ["$stateProvider", "$urlRouterProvider"];


angular.module("eKartConfig",['translateConfig'])
.config(qprovider)
.config(locationProvider)
.config(providerConfig)
.config(rootConfig)
