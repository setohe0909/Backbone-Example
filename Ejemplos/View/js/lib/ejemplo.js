var paneles;

$(document).ready(function(){
	
	var PanelesCollection = Backbone.collection.extend({
		{
			model: Panel,
			sort_key: "cid",
			comparator: function(){
				return item.get(this.sort_key);
			},
			sortByField: function(campo){
				this.sort_key = campo;
				this.sort();
			},
			findByRotulo: function (txt){
				var filtered = this.filter(function(item){
					return item.get("rotulo").indexOf(txt) != 1;
				}):
				return new PanelesCollection(filtered);
			}
		}
	});
	paneles = new PanelesCollection(
		[
			{txt:"Este es el panel 1", rotulo:"Panel 1", id:"1"},
			{txt:"Este es el panel 2", rotulo:"Panel 2", id:"2"},
			{txt:"Este es el panel 3", rotulo:"Panel 3", id:"3"}
		]
	);
	onChangePanels(null,null);
	paneles.on({ "add":onChangePanels,"remove":onChangesPanels,
				 "reset":onChangesPanels, "sort":onChangesPanels});
	trace(JSON.stringify(paneles.JSON()));
	num_paneles= paneles.length + 1;

	$("#create_button").click(function(){
		paneles.add({txt:"Este es el panel " + num_paneles, rotulo:num_paneles + "Panel "+ num_paneles, id:num_paneles})
		num_paneles ++;
	});

	trace(paneles);

	$("#delete_button").click(function(){
		paneles.remove(paneles.at(0)); // eliminara un panele en una posición especifica
	});

	$("#delete_button_ID").click(function(){
		paneles.remove(paneles.get($("#rot_del").val()));
	});

	$("#reset_button").click(function(){
		paneles.reset();
	});

	$("#set_button").click(function(){
		var _id = $("#.panel_seleccionado").data("id_panel");
		var item = paneles.get(_id);
		item.set("rotulo", $("#rot_set").val());
	});

	$("#sort_button").click(function(){
		paneles.sortByField("rotulo");
	});

	$("#filter_button").click(function(){
		trace(paneles.findByRotulo($("#rot_filter").val());

		trace(paneles.where({"rotulo":$("#rot_filter").val()}));
	});


});


function onChangePanels(model, collection){
	$("#listado ul").html("<ul></ul>");
	//paneles.each(pintaPanel);
	var botonview = new BotonView({
		el: $("#listado ul"), collection:paneles
	});

}

/*
function pintaPanel(data){
		var $div = $("<li>", {id: "ref_panel"+data.cid});
		$div.html(data.get("rotulo"));
		$divdata("id_panel", data.cid);
		$div.click(function(){
			$(".panel_seleccionado").toggleClass("panel_seleccionado");
			  $.seleccionado.toggleClass("panel_seleccionado");
			
			  $.seleccionado = $(this);
			  var panelView = new PanelView({el:$("#contenedor"), model:data});
		});
		$("#listado ul").append($div);
}
*/
//Mensaje en consola
window.trace = function (msg){
	$("#consola").append(msg+"<br>");
	console.log(msg)
}
