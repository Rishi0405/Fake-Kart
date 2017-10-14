angular.module('eKart')
.constant('commonConstants',{
	/*ng-patterns*/
	pass_pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
	email_pattern: /^.+@.+\..+$/,
	
	/*variables*/
	
	/*common variables*/
	userDetails: {name: 'Rishi'},
	languages: [{label:"English", value:"en"},{label:"French", value:"fr"},{label:"Tamil", value:"ta"}],
	
	/*userpage variables*/
	navs : [{
		icon : "window-maximize",
		title : "Dashboard",
		uiState : "main.myprofile.dashboard"
	}, {
		icon : "shopping-cart",
		title : "Billing",
		uiState : "main.myprofile.billing"
	}, {
		icon : "cog",
		title : "Settings",
		uiState : "main.profile.settings.myprofile"
	}],
	
	
	/*settingsPage variables*/
	settings:{settingsList: [{tab: "Profile", state: "main.profile.settings.myprofile"}],
				},
		
	/*profile variables*/
	profile:{},	
	
	/*templateUrls*/
	templateUrl:{
		home:{header: './resources/modules/home/banners/header.html',footer: './resources/modules/home/banners/footer.html'},
		signupLoginHeader: './resources/app/commonTemplate/signupLoginHeader.html',
		fixedHeader:'./resources/modules/home/banners/header.html',
		userBanner: {nav: './resources/modules/userpage/navs/nav.html', header: './resources/modules/userpage/navs/userheader.html'},
	}
	
})