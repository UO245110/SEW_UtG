"use strict"
class Coleccion{
	
    cargarDatos(){
		$.ajax({
			type: "GET",
			url: "mazos.xml",
			dataType: "xml",
			success: function(data){
				$(data).find('set').each(function(){
					var sDescription = $(this).find('description').text();
					pintarDatos(sDescription);
				});
			},
			error: function() {
				alert("An error occurred while processing XML file.");
			}
	  });
	};
	
	pintarDatos(string){
		console.log("Printar datos")
		document.write("<p>");
		document.write(string);
		document.write("</p>");
	};
}

console.log("Ha cargado")
new Coleccion().cargarDatos();