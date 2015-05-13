app.search_view = Backbone.View.extend({
	
	el: '#content-comics',
	template: $('#template_search').html(),

	initialize: function()
	{
		this.listenTo(this.collection, "reset", this.render);
	},

    render: function()
    {
       var comics = this.collection.toJSON();
       var tpl = _.template(this.template,{ jsonComics: comics});
	   this.$el.html( tpl );
       return this;
    }
    
});


app.search = new app.search_view();