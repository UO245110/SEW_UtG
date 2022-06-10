"use strict"

class Carta {
	
		constructor(){
			this.nombre = "";
			this.remplazos = [];
		}
	
		setNombre(sNombre){
			this.nombre = sNombre;
			//console.log("(CARTA) Añadido carta arquetipo: " + this.nombre);
		}
		
		addRemplazo(sRemplazo){
			this.remplazos.push(sRemplazo);
			//console.log("(CARTA) Añadido remplazo: " + sRemplazo);
		}	
		
		print(){
			console.log("(AÑADIENDO CARTA) Añadido carta arquetipo: " + this.nombre);
			for (var index = 0; index < this.remplazos.length; index++) {
				console.log("(AÑADIENDO CARTA) Añadido remplazo: " + this.remplazos[index]);
			}
		}
		
		construirHTML(){
			var main = document.getElementsByTagName('main')[0];	
			
			var ulRemplazosCarta = document.createElement("ul");
			ulRemplazosCarta.innerText = "Remplazos de: " + this.nombre;
			for (var index = 0; index < this.remplazos.length; index++) {
				var liRemplazo = document.createElement("li");
				liRemplazo.innerText = this.remplazos[index];
				ulRemplazosCarta.appendChild(liRemplazo);
			}
			main.appendChild(ulRemplazosCarta);
		}
}

class Arquetipo{
	
		constructor(){
				this.nombre = "";
				this.estiloJuego = "";
				this.colorPrincipal = "";
				this.rivalesFavorables = [];
				this.rivalesDesfavorables = [];
				this.cartas = [];
			}
		
		setNombre(sNombre){
			this.nombre = sNombre;
			//console.log("(MAZO) Añadido nombre arquetipo: " + this.nombre);
		}
		
		setColorPrincipal(sColorPrincipal){
			this.colorPrincipal = sColorPrincipal;
			//console.log("(MAZO) Añadido color arquetipo: " + this.colorPrincipal);
		}
		
		setEstiloJuego(sEstiloJuego){
			this.estiloJuego = sEstiloJuego;
			//console.log("(MAZO) Añadido estilo juego arquetipo: " + this.estiloJuego);
		}
		
		addRivalFavorable(sRivalesFavorables){
			this.rivalesFavorables.push(sRivalesFavorables);
			//console.log("(MAZO) Añadido rival favorable: " + sRivalesFavorables);
		}
		
		addRivalDesfavorable(sRivalesDesfavorables){
			this.rivalesDesfavorables.push(sRivalesDesfavorables);
			//console.log("(MAZO) Añadido rival desfavorable: " + sRivalesDesfavorables);
		}
		
		addCarta(sCarta){
			this.cartas.push(sCarta);
			//console.log("(MAZO) Añadido carta: " + sCarta.nombre);
		}
		
		print(){
			console.log("(AÑADIENDO MAZO) Añadido nombre arquetipo: " + this.nombre);
			console.log("(AÑADIENDO MAZO) Añadido color arquetipo: " + this.colorPrincipal);
			console.log("(AÑADIENDO MAZO) Añadido estilo juego arquetipo: " + this.estiloJuego);
			
			for (var index = 0; index < this.rivalesFavorables.length; index++) {
				console.log("(AÑADIENDO MAZO) Añadido rival favorable: " + this.rivalesFavorables[index]);
			}
			
			for (var index = 0; index < this.rivalesDesfavorables.length; index++) {
				console.log("(AÑADIENDO MAZO) Añadido rival desfavorable: " + this.rivalesDesfavorables[index]);
			}
			
			for (var index = 0; index < this.cartas.length; index++) {
				this.cartas[index].print();
			}
		}
		
		construirHTML(){
			console.log("(CONSTRUYENDO MAZO) Añadido nombre arquetipo: " + this.nombre);
			console.log("(CONSTRUYENDO MAZO) Añadido color arquetipo: " + this.colorPrincipal);
			console.log("(CONSTRUYENDO MAZO) Añadido estilo juego arquetipo: " + this.estiloJuego);
			
			var main = document.getElementsByTagName('main')[0];				
			
			const pNombreMazo = document.createElement("p");
			pNombreMazo.innerText = "Nombre del arquetipo: " + this.nombre + ".";
			main.appendChild(pNombreMazo);
			
			const pColorMazo = document.createElement("p");
			pColorMazo.innerText = "Color del arquetipo: " + this.colorPrincipal + ".";
			main.appendChild(pColorMazo);
			
			const pEstiloJuegoMazo = document.createElement("p");
			pEstiloJuegoMazo.innerText = "Estilo de juego del mazo: " + this.estiloJuego + ".";
			main.appendChild(pEstiloJuegoMazo);
			
			
			var ulRivalesFavorables = document.createElement("ul");
			ulRivalesFavorables.innerText = "Lista de rivales favorables: "
			for (var index = 0; index < this.rivalesFavorables.length; index++) {
				var liRivalFavorable = document.createElement("li");
				liRivalFavorable.innerText = this.rivalesFavorables[index];
				ulRivalesFavorables.appendChild(liRivalFavorable);
			}
			main.appendChild(ulRivalesFavorables);
			
			var ulRivalesDesfavorables = document.createElement("ul");
			ulRivalesDesfavorables.innerText = "Lista de rivales desfavorables: "
			for (var index = 0; index < this.rivalesDesfavorables.length; index++) {
				var liRivalDesfavorable = document.createElement("li");
				liRivalDesfavorable.innerText = this.rivalesDesfavorables[index];
				ulRivalesDesfavorables.appendChild(liRivalDesfavorable);
			}
			main.appendChild(ulRivalesDesfavorables);
			
			for (var index = 0; index < this.cartas.length; index++) {
				this.cartas[index].construirHTML();
			}
		}
}

class Set{
		
		constructor(){
			this.nombre = "";
			this.codigo = "";
			this.descripcion = "";
			this.imagenes = [];
			this.fechaInicio = "";
			this.fechaFin = "";
			this.arquetipos = [];
			this.iterador = 0;
			this.maximo = 0;
		}
		
		setNombre(sNombre){
			this.nombre = sNombre;
			//console.log("(SET) Añadido nombre: " + this.nombre);
		}
		
		setCodigo(sCodigo){
			this.codigo = sCodigo;
			//console.log("(SET) Añadido código: " + this.codigo);
		}
		
		setDescripcion(sDescripcion){
			this.descripcion = sDescripcion;
			//console.log("(SET) Añadido descripcion: " + this.descripcion);
		}
		
		addImagen(sImagen){
			this.imagenes.push(sImagen);
			//console.log("(SET) Añadido descripcion: " + sImagen);
		}
		
		setFechaInicio(sFechaInicio){
			this.fechaInicio = sFechaInicio;
			//console.log("(SET) Añadido fecha inicio: " + this.fechaInicio);
		}
		
		setFechaFin(sFechaFin){
			this.fechaFin = sFechaFin;
			//console.log("(SET) Añadido fecha fin: " + this.fechaFin);
		}
		
		addArquetipo(sArquetipo){
			this.arquetipos.push(sArquetipo);
			this.maximo = this.maximo + 1;
			console.log("(MAXIMO ARQUETIPO MODIFICADO) Valor: " +this.maximo);
			//console.log("(SET) Añadido arquetipo: " + sArquetipo.nombre);
		}
		reseteaArquetipo(){
			this.iterador = 0;
			console.log("(ITERATE RESETEADO) Value: " + this.iterador);
		}
		
		iteraArquetipo(){
			this.iterador = this.iterador + 1;
			var currentValue = this.iterador;
			if (currentValue >= this.arquetipos.length){
				this.iterador = 0;
			}
			console.log("(ITERATE ARQUETIPO) Value: " + this.iterador)
		}
		
		print(){
			console.log("(AÑADIDO SET) Añadido nombre: " + this.nombre);
			console.log("(AÑADIDO SET) Añadido código: " + this.codigo);
			console.log("(AÑADIDO SET) Añadido descripcion: " + this.descripcion);
			console.log("(AÑADIDO SET) Añadido fecha inicio: " + this.fechaInicio);
			console.log("(AÑADIDO SET) Añadido fecha fin: " + this.fechaFin);
			
			for (var index = 0; index < this.imagenes.length; index++) {
				console.log("(AÑADIENDO SET) Añadida imagen: " + this.imagenes[index]);
			}
			
			for (var index = 0; index < this.arquetipos.length; index++) {
				if (index == this.iterador){
					this.arquetipos[index].print();
				}
			}
		}
		
		construirHTML(){
			var main = document.getElementsByTagName('main')[0];
			//Limpiamos el contenido: FALTA
			main.innerHTML="";
			
			//Creo los botones:
			const pBotonAvanzarArquetipo = document.createElement("button");
			pBotonAvanzarArquetipo.innerText = "Itera arquetipo";
			pBotonAvanzarArquetipo.setAttribute('onclick',"aLoader.colecciones[0].iteraArquetipo()");
			main.appendChild(pBotonAvanzarArquetipo);
			
			//Creo los botones:
			const pBotonAvanzarSet = document.createElement("button");
			pBotonAvanzarSet.innerText = "Itera set";
			pBotonAvanzarSet.setAttribute('onclick',"aLoader.colecciones[0].iteraSet()");
			main.appendChild(pBotonAvanzarSet);
			
			const pNombreCodigo = document.createElement("p");
			pNombreCodigo.innerText = "Nombre del set: " + this.nombre + ". Código del set: " + this.codigo + ".";
			main.appendChild(pNombreCodigo);

			const pDescripcion = document.createElement("p");
			pDescripcion.innerText = "Descripción del set: " + this.descripcion +".";
			main.appendChild(pDescripcion);
			
			const pFechas = document.createElement("p");
			pFechas.innerText = "Inicio del set: " + this.fechaInicio + ". Final del set: " + this.fechaFin + ".";
			main.appendChild(pFechas);
			
			console.log("Estas imagenes");
			console.log(this.imagenes);
			//Faltan imágenes.
			for (var index = 0; index < this.imagenes.length; index++) {
				const imgEspecifica = document.createElement('img');
				imgEspecifica.setAttribute('src',this.imagenes[index]);
				imgEspecifica.setAttribute('alt', "Imagen promocional del set "+this.nombre);
				main.appendChild(imgEspecifica);
				console.log(imgEspecifica);
			}
			
			//Sets:
			for (var index = 0; index < this.arquetipos.length; index++) {
				if (index == this.iterador){
					this.arquetipos[index].construirHTML();
				}
			}
		}
}

class Coleccion{
		
		constructor(){
			this.sets = [];
			this.iterador = 0;
			this.maximo = 0;
		}
		
		addSet(set){
			this.sets.push(set);
			this.maximo = this.maximo + 1;
			console.log("(MAXIMO SET MODIFICADO) Valor: " +this.maximo);
			//console.log("(SET) Añadido arquetipo: " + sArquetipo.nombre);
		}
		
		iteraSet(){
			this.iterador = this.iterador + 1;
			var currentValue = this.iterador;
			if (currentValue >= this.sets.length){
				this.iterador = 0;
			}
			this.sets[this.iterador].reseteaArquetipo();
			console.log("(ITERATE SET) Value: " + this.iterador);
			this.construirHTML();
		}
		
		iteraArquetipo(){
			this.sets[this.iterador].iteraArquetipo();
			this.construirHTML();
		}
		
		print(){
			for (var index = 0; index < this.sets.length; index++) {
				if (index == this.iterador){
					this.sets[index].print();
				}
			}
		}
		
		construirHTML(){
			for (var index = 0; index < this.sets.length; index++) {
				if (index == this.iterador){
					this.sets[index].construirHTML();
				}
			}
		}
}

class Loader{
	
	constructor(){
		this.colecciones = [];		
	}
	
	pintarDatos(string){
		console.log("Printar datos")
		document.write("<p>");
		document.write(string);
		document.write("</p>");
	};
	
    cargarDatos(){
		var thiz = this;
		$.ajax({
			type: "GET",
			url: "sets.xml",
			dataType: "xml",
			success: function(data){
				var coleccionAux = new Coleccion();
				$(data).find('set').each(function(){
					var setAux = new Set();
					var sSetNombre = $(this).attr('nombre');
						setAux.setNombre(sSetNombre);
					var sSetCododigo = $(this).attr('codigo');
						setAux.setCodigo(sSetCododigo);
					var sDescripcion = $(this).find('descripcion').text();
						setAux.setDescripcion(sDescripcion);
					//Nos metemos dentro de las imágenes:
					$($(this)).find('imagenes').children().each(function(){
						var sImagen = $(this).text();
						setAux.addImagen(sImagen);
					});
					var sFechaInicio = $(this).find('fechaInicio').text();
						setAux.setFechaInicio(sFechaInicio);
					var sFechaFin = $(this).find('fechaFin').text();
						setAux.setFechaFin(sFechaFin);
						
					//Exploramos arquetipos
					$($(this)).find('arquetipo').each(function(){
						var arquetipoAux = new Arquetipo();
						var sArquetipoNombre = $(this).attr('nombre');
							arquetipoAux.setNombre(sArquetipoNombre);
						var sColorPrincipal = $(this).find('colorPrincipal').text();
							arquetipoAux.setColorPrincipal(sColorPrincipal);
						var sEstiloJuego = $(this).find('estiloJuego').text();
							arquetipoAux.setEstiloJuego(sEstiloJuego);
						
						//Exploramos rivales favorables
						$($(this)).find('rivalesFavorables').children().each(function(){
							var sRivalFavorable = $(this).text();
							arquetipoAux.addRivalFavorable(sRivalFavorable);
						});
						
						//Exploramos rivales desfavorables
						$($(this)).find('rivalesDesfavorables').children().each(function(){
							var sRivalDesFavorable = $(this).text();
							arquetipoAux.addRivalDesfavorable(sRivalDesFavorable);
						});
						
						//Exploramos sidedeck:
						$($(this)).find('sidedeck').children().each(function(){
							var cartaAux = new Carta();
							var sCartaNombre = $(this).attr('nombre');
								cartaAux.setNombre(sCartaNombre);
							//Exploramos remplazos:
							$($(this)).find('remplazos').children().each(function(){
								var sRemplazo = $(this).text();
								cartaAux.addRemplazo(sRemplazo);
							});
							arquetipoAux.addCarta(cartaAux);
						});
						setAux.addArquetipo(arquetipoAux);
					});
					coleccionAux.addSet(setAux);
				});
				thiz.colecciones.push(coleccionAux);
			},
			error: function() {
				alert("An error occurred while processing XML file.");
			}
	  });
	};
}

var aLoader = new Loader();