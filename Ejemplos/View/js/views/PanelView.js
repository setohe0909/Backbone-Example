var PanelView = Backbone.View.extend({
	template_: _.template($("#panel_template").html()),
	events: {

		"click", "_click",

	},
	initialize: function () {
		this.render();
	},
	render: function (eventName) {
		$(this.$el).append(this.template(this.model.toJSON()));
		return this;
	},
	_click: function(e){
		trace(this.model.attributes.rotulo);
	}
});