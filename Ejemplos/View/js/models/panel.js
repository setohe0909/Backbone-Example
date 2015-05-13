var Panel = Backbone.model.extend(

	{
		defaults:{
			txt: " Aun sin valor",
			rotulo: ""
		},

		initialize: function(attr){
			this.on("change:txt", this.onChangeTxt, this);
			this.on("change:rotulo", onChangePanels, this, null);
			trace("Creando un nuevo panel con textos: ", this.get("text"));
		},
		promptTexto: function(){
			var _txt = prompt("Escribe el texto que quieres añadir");
			this.set({txt: _txt});
		},
		onChangeTxt: function(model, options){
			trace("el texto ha sido cambiado por " +  model.change.txt);
		},

		{
			rotulo_init: "Panel con rotulo",
		}
	}
);

