var panelView;
var BotonView = Backbone.View.extend({
	events: {

		"click", "_click",

	},
	template_: _.template($("#panel_template").html()),
	initialize: function () {
		this.render();
	},
	render: function (eventName) {
		var el = $(this.el);
		this.collection.each(function(){
			var template = _.template($("#boton_template").html());
			var htm = template(model.toJSON());
			el.append(html);
		});
		return this;
	},
	_click: function(e){
		e.preventDefault();
		var _id = $(e.target).data("id");
		var item = this.collectionget(_id);

		if (item != undefined) {
			$(".panel_seleccionado").toggleClass("panel_seleccionado");
		  	$(.target).toggleClass("panel_seleccionado");

		  	if(panelView != undefined){
		  		panelView.undelegateEvents();
		  	}
		
		  	$.seleccionado = $(e.target);
		  	$("#contenedor").html("");
		  	var panelView = new PanelView({el:$("#contenedor"), model:item});
	  	}
	}
});