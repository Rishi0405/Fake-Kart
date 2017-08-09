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
	
	.state("main.myprofile",{
		url: "profile",
		abstract: true,
		templateUrl: "resources/modules/userpage/user.html",
		resolve: {
			loadplugins: ['$ocLazyLoad', function($ocLazyLoad) {
	             return $ocLazyLoad.load({
	            	 		name: "userPage",
	            	 		files: ["resources/modules/userpage/user.js"],
	            	 });
			 }]
		},
		controller: "userController"
	})
	
	.state("main.myprofile.billing",{
		url: "/invoice",
		templateUrl: "resources/modules/billing/billing.html",
		resolve: {
			loadplugins: ['$ocLazyLoad', function($ocLazyLoad) {
	             return $ocLazyLoad.load({
	            	 		name: "billingPage",
	            	 		files: ["resources/modules/billing/billing.js"],
	            	 });
			 }]
		},
		controller: "billingController"
	})
}

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

rootConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
translate.$inject = ["$translateProvider", "$translatePartialLoaderProvider"];
qprovider.$inject = ["$qProvider"];
locationProvider.$inject = ['$locationProvider'];
providerConfig.$inject = ['$ocLazyLoadProvider'];


angular.module("eKart")
.config(rootConfig)
.config(translate)
.config(qprovider)
.config(locationProvider)
.config(providerConfig)