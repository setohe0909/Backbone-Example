app.UserCollection = Backbone.Collection.extend({

	model: app.user,
	localStorage: new Backbone.LocalStorage('user_store'),
	
	createNewUser: function (data)
	{	
		var regexp = new RegExp('[A-Za-z0-9]+');
		var regexp_pass = new RegExp('[A-Za-z0-9]{7,20}$'); 
		
		if (!this.Exist(data)){
			if (regexp.test(data.username) && regexp_pass.test(data.pass)){
				
				if (data.username === 'admin')
					data.admin = true;
				
				data.id = this.nextOrder();
				var user = new app.user(data);
				this.add(user);
				user.save();
				this.fetch();
				return true;
			}
			return false;
		}else
			$('.error-field').html('Already exist');
	},
	
    Exist: function (data){ 
		return this.findWhere(data); 
	},
	
	comparator: function (user)
	{
		return user.get('username');
	},
	
	nextOrder: function (){
		if (!this.length){
			return 1;
		}
		return this.last().get('id') + 1;
	}
	
});


app.user_collection = new app.UserCollection();
app.user_collection.fetch();












