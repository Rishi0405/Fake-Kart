var rootConfig = function($stateProvider, $urlRouterProvider, $translatePartialLoaderProvider){

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
			 }],
			 translate: [function(){
				 $translatePartialLoaderProvider.addPart('home');
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
	
	.state("main.profile",{
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
	
	.state("main.profile.dashboard",{
		url: "/dashboard",
		templateUrl: "resources/modules/dashboard/dashboard.html",
		resolve: {
			loadplugins: ['$ocLazyLoad', function($ocLazyLoad) {
	             return $ocLazyLoad.load({
	            	 		name: "billingPage",
	            	 		files: ["resources/modules/dashboard/dashboard.js"],
	            	 });
			 }],
			 translate: [function(){
				 $translatePartialLoaderProvider.addPart('user/dashboard');
			 }]
		},
		controller: "dashboardController"
	})
	
	.state("main.profile.billing",{
		url: "/invoice",
		templateUrl: "resources/modules/billing/billing.html",
		resolve: {
			loadplugins: ['$ocLazyLoad', function($ocLazyLoad) {
	             return $ocLazyLoad.load({
	            	 		name: "billingPage",
	            	 		files: ["resources/modules/billing/billing.js"],
	            	 });
			 }],
			 translate: [function(){
				 $translatePartialLoaderProvider.addPart('user/billing');
			 }]
		},
		controller: "billingController"
	})
	
	.state("main.profile.settings",{
		url: "/settings",
		templateUrl: "resources/modules/settings/settings.html",
		resolve: {
			loadplugins: ['$ocLazyLoad', function($ocLazyLoad) {
	             return $ocLazyLoad.load({
	            	 		name: "settingsPage",
	            	 		files: ["resources/modules/settings/settings.js"],
	            	 });
			 }],
			 translate: [function(){
				 $translatePartialLoaderProvider.addPart('user/settings');
			 }]
		},
		controller: "settingsController"
	})
	.state("main.profile.settings.myprofile",{
		url: "/myProfile",
		templateUrl: "resources/modules/settings/profile/profile.html",
		resolve: {
			loadplugins: ['$ocLazyLoad', function($ocLazyLoad) {
	             return $ocLazyLoad.load({
	            	 		name: "myProfilePage",
	            	 		files: ["resources/modules/settings/profile/profile.js"],
	            	 });
			 }]
		},
		controller: "myProfileController"
	})
}

var translate = function($translateProvider, $translatePartialLoaderProvider, $translateSanitizationProvider) {
	//Sanitize strategy
	$translateSanitizationProvider.addStrategy('sce', 'translateStrategy');
	$translateProvider.useSanitizeValueStrategy('sce');
	//To use cache
	$translateProvider.useLoaderCache(true);
	//Initial config
	$translateProvider.useLoader('$translatePartialLoader', {
		urlTemplate: './resources/languagefiles/{part}/{lang}.json',
		loadFailureHandler: 'MyErrorHandler'
	});
	//TranslateLoader
	//$translateProvider.preferredLanguage('en');
}

var qprovider  = function($qProvider){
	$qProvider.errorOnUnhandledRejections(false)
}

var locationProvider = function($locationProvider, $provide) {
	//$locationProvider.html5Mode(true);
	//$locationProvider.hashPrefix('#');
}

var providerConfig = function($ocLazyLoadProvider) {
  $ocLazyLoadProvider.config({
	  debug: true,
	  events: true,
  });
}

rootConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$translatePartialLoaderProvider"];
translate.$inject = ["$translateProvider", "$translatePartialLoaderProvider", "$translateSanitizationProvider"];
qprovider.$inject = ["$qProvider"];
locationProvider.$inject = ['$locationProvider', '$provide'];
providerConfig.$inject = ['$ocLazyLoadProvider'];


angular.module("eKart")
.config(rootConfig)
.config(translate)
.config(qprovider)
.config(locationProvider)
.config(providerConfig)