app.SessionCollection = Backbone.Collection.extend({
	
	model: app.Session, 
	localStorage: new Backbone.LocalStorage('session_store'), 

	login: function (response) 
	{	
		var user = app.user_collection.Exist(response);
		
		if (user){
			this.fetch();
			var session = this.get(0);
			if(!session)
			{
				session = new app.Session({ 
					session	: true, 
					id_user	: user.get('id') 
				});
				
				this.add(session);
				session.save();
				this.fetch();
			}

			return true;
		}
		// LOGIN FAIL
		return false;
		
	},
	
	check_login: function () 
	{
		this.fetch();
		return session = this.get(0);
	},

	logout: function () 
	{
		this.fetch();
		var session = this.get(0);
		console.log(session);
		if (session.get('session')){
			session.destroy();
			return true;
		}
		return false;

	}

});

app.session_collection = new app.SessionCollection();
app.session_collection.fetch();

