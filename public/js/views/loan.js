app.loan_view = Backbone.View.extend({
	
	el: '#content-comics',
	template: $('#template_loan').html(),

    render: function()
    {
       var comics = this.collection.toJSON();
       var tpl = _.template(this.template,{ jsonComics: comics});
	   this.$el.html( tpl );
       return this;
    }
    
});


app.loan = new app.loan_view();