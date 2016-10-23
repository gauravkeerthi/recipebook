FlowRouter.route('/',{
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
		GAnalytics.pageview();
	}
});


FlowRouter.route('/recipe-book',{
	name: 'recipe-book',
	action() {
		BlazeLayout.render('MainLayout', {main:'Recipes'});
		GAnalytics.pageview();
	}
});

