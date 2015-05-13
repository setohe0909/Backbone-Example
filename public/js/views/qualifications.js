app.qualifications_view = Backbone.View.extend({
	
	el: '#content-comics',
	template: $('#template_qualifications').html(),

    render: function()
    {
       var comics = this.collection.toJSON();
       var tpl = _.template(this.template,{ jsonComics: comics});
	   this.$el.html( tpl );
       return this;
    }
    
});


app.qualifications = new app.qualifications_view();