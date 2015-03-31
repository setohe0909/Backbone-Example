app.footer_view = Backbone.View.extend({
	
	el: '#footer',
	template: $('#template_footer').html(),

    render: function () {
        var tmpl = _.template(this.template); 
        this.$el.html(tmpl); 
        return this;
    }
});

app.footer = new app.footer_view();
