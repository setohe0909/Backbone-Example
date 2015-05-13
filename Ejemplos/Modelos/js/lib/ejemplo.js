$(document).ready(function(){
	$("#create_button").click(function(){
		/* Ejemplo 1
			var panel1 = new Panel();
			var panel2 = new Panel();
			panel1.propInstancia = "nuevo valor"; // modificar instancia generica
			window.trace(panel);
			Panel.propEstatica = "nuevo valor estatico"; // modificar instancia estatica
		*/
	
		/* Ejemplo 2
			var panel1 = new Panel();
			var panel2 = new Panel({txt:"Este es el nuevo panel", rotulo: "Mi panel"});
			//console.debug(panel1);
			//console.debug(panel2);
			window.trace(panel1.toJSON()); // Entrega el objeto como JSON
			window.trace(JSON.stringify(panel1.toJSON()); // Entrega el JSON como cadena
			window.trace(panel2); 
		*/
		/* Ejemplo 3
			var panel = new Panel({txt:"Este es el nuevo panel", rotulo: "Mi panel"});
			window.trace(panel.toString());
			panel.set("rotulo", "nuevo rotulo");
			panel.set("isActive", "dfs");
			panel.isValid(); 
		*/
		var subpanel = new SubPanel({txt:"Este es el nuevo panel", rotulo: "Mi panel"});
		trace(subpanel.toString);

	});
});


//Mensaje en consola
window.trace = function (msg){
	$("#consola").append(msg+"<br>");
	console.log(msg)
}