angular.module('eKart')
.constant('commonConstants',{
	/*ng-patterns*/
	pass_pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
	email_pattern: /^.+@.+\..+$/,
	
	/*variables*/
	userDetails: {name: 'Rishi'},
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
		uiState : "main.myprofile.setttings"
	}],
	languages: [{label:"English", value:"en"},{label:"French", value:"fr"},{label:"Tamil", value:"ta"}],
	
	
	
	/*templates*/
	header: './resources/modules/home/banners/header.html',
	footer: './resources/modules/home/banners/footer.html',
	fixedHeader:'./resources/modules/home/banners/header.html',
	userBanner: {nav: './resources/modules/userpage/navs/nav.html', header: './resources/modules/userpage/navs/userheader.html'},
})