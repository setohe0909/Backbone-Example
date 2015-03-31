app.account_view = Backbone.View.extend({
  
  el: '#content-comics',
  template: $('#template_account').html(),

    render: function () {
        var tmpl = _.template(this.template); 
        this.$el.html(tmpl); 
        return this;
    }
});

app.account = new app.account_view();