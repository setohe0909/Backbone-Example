app.sidebar_view = Backbone.View.extend({
	
	el: '#sidebar',
	template: $('#template_sidebar').html(),

    render: function () {
        var tmpl = _.template(this.template); 
        this.$el.html(tmpl); 
        return this;
    }
});

app.siderbar = new app.sidebar_view();
