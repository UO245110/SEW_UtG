"use strict"

class ConversorEURUSD{
	
	constructor(){
		this.colecciones = [];
		this.apikey = "YTXEMQUKdO71VRf7XNmZ";
		this.rates = "EURUSD";
		this.uri = "https://marketdata.tradermade.com/api/v1/live?currency=" + this.rates + "&api_key="+this.apikey;
		this.rateJson = "";
	}
	
	aEuros(){
		//Obtenemos la pantalla:
		const inputText = document.getElementById('valorOriginal');
		const outputText = document.getElementById('valorCalculado');
		//Obtenemos el valor:
		if (this.esNumero(inputText.value)){
			console.log("Es un número");
			var valorConvertido = parseFloat(inputText.value) / this.rateJson.quotes[0].mid;
			outputText.value = valorConvertido;
			console.log("Valor convertido:" + valorConvertido);
		}
		else
			console.log("No lo es");
	}
	
	esNumero(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	
    cargarDatos(){
		var thiz = this;
		$.ajax({
			type: "GET",
			url: thiz.uri,
			dataType: "JSON",
			success: function(data){
				thiz.rateJson = data;
				console.log(data);
			},
			error: function() {
				alert("An error occurred while processing JSON file.");
			}
	  });
	};
}

var aConversor = new ConversorEURUSD();