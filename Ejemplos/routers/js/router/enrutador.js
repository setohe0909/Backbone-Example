var Enrutador = Backbone.Router.extend({

	Routes:{
		""                   : "index",
		"help"               : "ayuda",
		"panel/:id"          : "muestraPanel",
		"panel/:id/r:rotulo" : "cambiaPanel"
	},
	initialize: function () {
		trace("Aplicando enrutador");
	},
	index: function(){
		$("#help").remove();


		paneles = new PanelesCollection(
			[
				{txt:"Este es el panel 1", rotulo:"Panel 1", id:"1"},
				{txt:"Este es el panel 2", rotulo:"Panel 2", id:"2"},
				{txt:"Este es el panel 3", rotulo:"Panel 3", id:"3"}
			]
		);

		paneles.on({ "add":onChangePanels,"remove":onChangesPanels});
		onChangePanels();

	},
	ayuda: function(){
		$("body").append("<div id='help'> Texto texto texto </div>");

		$("#help").click(function(){
			miRouter.navigate("",{trigger:true})
		});
	},
	muestraPanel: function(id){
		var item = paneles.get(id);

		if (item != undefined) {

			if(panelView != undefined){
		  		panelView.undelegateEvents();
		  	}
		
		  	$.seleccionado = $(e.target);
		  	$("#contenedor").html("");
		    panelView = new PanelView({el:$("#contenedor"), model:item});
	  	}
	},
	cambiaPanel: function(id, rotulo){
		var item = paneles.get(id);

		if (item != undefined) {
			
			item.set("rotulo", rotulo);
			if(panelView != undefined){
		  		panelView.undelegateEvents();
		  	}
		  	$.seleccionado = $(e.target);
		  	$("#contenedor").html("");
		    panelView = new PanelView({el:$("#contenedor"), model:item});
		}
	}
	  
});