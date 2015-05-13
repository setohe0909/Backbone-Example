app.Routers = Backbone.Router.extend({
	
	routes: {
		'' :        'login',
		'register': 'register',
		'home':     'home',
		'logout':   'logout',
		'searches':  'searches',
		'qualifications': 'qualifications',
		'recommended': 'recommended',
		'loan': 'loan',
		'account': 'account'
	},

	initialize: function()
    {  
    	app.comics =  new app.Search_Collection();
    	app.comics.fetch({
    		reset: true
    	});

    	this.searches = new app.search_view({collection: app.comics});
    	this.qualifications = new app.qualifications_view({collection: app.comics});
    	this.recommended = new app.recommended_view({collection: app.comics});
    	this.loan = new app.loan_view({collection: app.comics});
    },

    loan: function()
    {
    	this.loan.render();
    },

    recommended: function()
    {
    	this.recommended.render();
    },

    qualifications: function()
    {  
    	this.qualifications.render();
    },

    searches: function()
    {  
    	this.searches.render();
    },

    account: function()
    {
    	app.account.render();
    },

	login: function ()
	{	
		app.login.render();
	},

	logout: function ()
	{
		if (app.login.logout())
			this.login();
		
	},

	register: function ()
	{
		app.register.render();
	},

	home: function ()
	{
		app.home.render();
		app.header.render();
		app.siderbar.render();
		app.footer.render();
	}
	
});


app.router = new app.Routers();
Backbone.history.start(); 