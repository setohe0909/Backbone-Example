app.recommended_view = Backbone.View.extend({
	
	el: '#content-comics',
	template: $('#template_recommended').html(),

    render: function()
    {
       var comics = this.collection.toJSON();
       var tpl = _.template(this.template,{ jsonComics: comics});
	   this.$el.html( tpl );
       return this;
    }
    
});


app.recommended = new app.recommended_view();