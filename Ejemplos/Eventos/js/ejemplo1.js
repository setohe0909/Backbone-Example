$(document).ready(function(){
	ejemplo1_1();
	ejemplo1_2();
	ejemplo1_3();
	ejemplo1_4();
});

function ejemplo1_1(){
	var objeto = {};
	_.extend(objeto, Backbone.Events);
	objeto.on("alert", function(msg, el){ // On  evento invocado por el mismo objeto
		alert(msg);
		el.append("<div class='tested'>Ok</div>")
	});

	$("#ejemplo1").click(function(){	
		objeto.trigger("alert","Pasando parámetros de eventos", $(this));
	});
}

function ejemplo1_2(){
	var objeto = {};
	_.extend(objeto, Backbone.Events);
	objeto.on("alert", function(msg, el){ // On  evento invocado por el mismo objeto
		alert(msg);
		objeto.off("alert")
	});

	$("#ejemplo2").click(function(){	
		objeto.trigger("alert","Pasando parámetros de eventos", $(this));
	});
}

function ejemplo1_3(){
	var objeto1 = {};
	var objeto2 = {};

	_.extend(objeto1, Backbone.Events);
	_.extend(objeto2, Backbone.Events);

	$("#ejemplo3").click(function(){	
		objeto1.trigger("alert","Evento desde el objeto1");
	});

	objeto2.listenTo(objeto1,"alert", function(msg){
		alert("recbido desde objeto2" + msg);
		this.stopListening(objeto1);
	});

}

function ejemplo1_4(){
	var objeto = {};
	_.extend(objeto2, Backbone.Events);

	objeto.once("alert",function(){
		alert("Recibe solo una vez" + msg)
	});

	$("#ejemplo4").click(function(){	
		objeto1.trigger("alert","Pasando datos de evento");
	});

}

function ejemplo1_5(){
	var objeto = {};
	_.extend(objeto2, Backbone.Events);

	/*
	objeto.on("alert:obj1",function(){
		alert("Llega un alert:obj1:" + msg)
	});

	objeto.on("alert:obj2",function(){
		alert("Llega un alert:obj2:" + msg)
	});
    */
    objeto.on("all", function(eventName, msg){
    	alert(eventName + ": " + msg)
    });

	$("#ejemplo5a").click(function(){	
		objeto1.trigger("alert:obj1","Pasando datos desde el primer enlace");
	});
	$("#ejemplo5b").click(function(){	
		objeto1.trigger("alert:obj2","Pasando datos desde el segundo enlace");
	});

}