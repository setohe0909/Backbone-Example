app.login_view = Backbone.View.extend({
	
	el: '#init',
	
	template: _.template($('#template_login').html()),
	
	events: {
		'click #btn-click'   : 'login',
		'click #register' : 'register',
	},

	login: function (evt)
	{
		if (evt) evt.preventDefault();
		
		var user = {
			username: $('#username').val(),
			pass: $('#password').val()
		};

		var login = app.session_collection.login(user);	

		if (user.username && user.pass){
			if (login){
				this.userLogueado = app.user_collection.findWhere(user);
				
				if (this.userLogueado.get('admin'))
					location.hash = '#';
				else
					location.hash = '#home';
				
			}else
				console.log('not login!! ');
						
		}else{
			if (!$('#username_input').val()){
				$('#username_input').addClass('has-error');
			}
			
			if (!$('#pswd_input').val()){
				$('#pswd_input').addClass('has-error');
			}
		}

	},
	
	render: function ()
	{ 
		$('#header').hide();
		$('#app').hide();
		$('#footer').hide();
		this.$el.html(this.template); 

	}, 
	
	register: function ()
	{ 
		location.hash = "register";
	}
	,
	logout: function()
	{
		$('#header').hide();
		$('#app').hide();
		$('#footer').hide();
		$('#init').show();

		var logout = app.session_collection.logout();
		console.log(logout, 'this is the logout method from auth_view object');
		if (logout){
			window.location.href = '';
		}
	}
});

app.Register_View = Backbone.View.extend({
	
	el: '#init',
	
	template: _.template($('#template_regis').html()),
	
	events: {
		'click #Register'	:	'createAccount',
		'click #Cancel'	    :	'backLogin'
	},

	render: function ()
	{ 
		$('#header').hide();
		$('#app').hide();
		$('#footer').hide();
		this.$el.html(this.template); 
		return this;	
	},
	
	createAccount: function(evt)
	{
		if (evt) evt.preventDefault();

		var user = {
				fullname: $('#fullname').val(),
				email:    $('#email').val(),
				username: $('#username').val(),
				pass:     $('#pass').val()
			};

		var result = app.user_collection.createNewUser(user);
		console.log(result, 'resultado de la registracion');
		console.log(app.user_collection.models,' models in user_collection');

		if (result)
			window.location.href = '';	
	    else
			$('.error-field').html('You missed fields for filling');

	}, 
	
	backLogin: function ()
	{ window.location.href = ''; }
	
});

app.register = new app.Register_View();
app.login = new app.login_view();