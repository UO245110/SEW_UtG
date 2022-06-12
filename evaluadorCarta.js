"use strict";
class evaluadorCarta{
    constructor () {
		this.calidades =["BAD","POOR","OK","GOOD","PERFECT"]
		this.calidad = "";
    }
	
	obtenerCalidad(){
		var r = Math.random();
		if (r<0.2)
			this.calidad = this.calidades[0];
		else if (r<0.4)
			this.calidad = this.calidades[1];
		else if (r<0.6)
			this.calidad = this.calidades[2];
		else if (r<0.8)
			this.calidad = this.calidades[3];
		else
			this.calidad = this.calidades[4];
		console.log(this.calidad);
	}
	
    evaluarCarta(){
		//En este caso nos devuelve un array donde el 0 es nuestra única carta, se podría ampliar.
        let cartas = document.getElementById("iCarta").files;
		let carta = cartas[0]
		console.log(cartas);
		this.obtenerCalidad();
        document.getElementById("calidadCarta").innerHTML = "La calidad de: " + carta.name + " es: " + this.calidad;		
    }

}
var evaluador = new evaluadorCarta();