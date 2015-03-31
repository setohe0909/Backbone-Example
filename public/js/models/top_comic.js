app.comics_search = Backbone.Model.extend({
	urlRoot: "/items",
	defaults:{
        id: '', 
		title:'',
		creator: '',
		edition: '',
		cover: '',
		detail: '',
		genre:'',
		recommended: '',
		searched: '',
		qualification: '',
		categorie: ''
	}
});
