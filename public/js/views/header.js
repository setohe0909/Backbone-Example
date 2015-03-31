app.header_view = Backbone.View.extend({
	
	el: '#header',
	template: $('#template_header').html(),

    render: function () {
        var tmpl = _.template(this.template); 
        this.$el.html(tmpl); 
        return this;
    }
});

app.header = new app.header_view();

