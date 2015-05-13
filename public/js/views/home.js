app.home_view = Backbone.View.extend({
	
	el: '#content-comics',
	template: $('#template_home').html(),

    render: function () {
		$('#init').hide();

		$('#header').show();
		$('#app').show();
		$('#footer').show();

        var tmpl = _.template(this.template); 
        this.$el.html(tmpl); 
        return this;
    }
});


app.home = new app.home_view();