var Panel = Backbone.model.extend(
	
	// Propiedad generica
		/*{
			propInstancia: "Instancia genérica"
		},*/

	// Propiedad estatia
		/*{
			propEstatica: "Valor estático"
		}*/

	{
		prefijo: "Texto del panel";
		defaults:{
			txt: " Aun sin valor",
			rotulo: "sin valor",
			isActive: false
		},

		initialize: function(attr){
			this.on("change", this.onChangeAll, this);
			this.on("change:rotulo", this.onChangeRotulo, this);
			this.on("invalid", this.onInvalid, this);
			//window.trace("El txt es" + attr.txt)
			this.set("txt", this.prefijo + attr.txt)
		},
		toString: function(){
			return " El texto es; " + this.get("txt");
		},
		onChangeAll: function(model, options){
			trace("Se han cambiado propiedades del modelo Panel");
		},
		onChangeRotulo: function(model, options){
			trace("Se han cambiado el Rotulo" +  this.get("rotulo"));
		},
		validate: function(attr, options){
			if (attr.isActive != undefined && _.isBoolean(attr.isActive)) {
				return "El valor de activación no es correcto"
			}
		},
		onInvalid: function(model, error){
			alert(error);
		}
	}
);

var SubPanel = Panel.extend(
	{
		prefijo; "Texto del SubPanel"
	}

);