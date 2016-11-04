var plantilla = "<div>" +
"<p><strong>Centro Educativo:</strong> __centroEducativo__</p>"+
"<p><strong>Tribu:</strong> __naboo__</p>"+
"<p><strong>Squad:</strong> __squad__</p>";

$(document).ready(function(){
	$.ajax({
		url:"http://localhost:3002/demo.json",
		type: "GET",
		success: function(response){
			$("#informacion").html(plantilla
				.replace("__centroEducativo__", response.centroEducativo)
				.replace("__naboo__", response.tribu)
				.replace("__squad__", response.squad)

			);
			var integrantes= "<ul>"

			for(var i= 0, l= response.integrantes.length; i<l; i++ ){
				integrantes+= "<li>" + response.integrantes[i] + "</li>";
			}

			integrantes += "</ul>"
			$("#integrantes").html(integrantes);
		}
	});
});