app.user = Backbone.Model.extend({
	//url:'/user',
	defaults:{
		id:0,
		fullname:'',
		email:'',
		username: '',
		pass: '',
		admin:false
	},
});