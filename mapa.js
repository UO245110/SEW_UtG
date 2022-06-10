"use strict"
class Geolocalization{
	
    constructor (){
		//Valor por defecto		
       
        this.apiKey = "pk.eyJ1IjoidW8yNjUwMDkiLCJhIjoiY2t3bjA2MnNzMjE5bjJ4bWR3d3NqNTJjZCJ9.iyyVaTeZEOR5fInt3lSN-g";
		
		//Dinámico:
		this.container = "map";
		this.mapStyle = "mapbox://styles/mapbox/outdoors-v11";
		this.center = [];
		this.zoom = 12;
		this.localizaciones = [
            [-5.699953202521691, 43.54068232376046],
            [-5.699996117997264, 43.53928241561731],
            [-5.669139984457058, 43.538815772328256],
            [-5.658203914240776, 43.539751012410264],
            [-5.666572407157487, 43.528924043081894],
            [-5.649148777045029, 43.53019973523924],
            [-5.859209977919118, 43.356567893629624],
            [-5.847311091326111, 43.36327249277625],
            [-5.842849632610594, 43.35927273490079],
            [-5.854152942331615,43.36683218671677]
        ];
		
		//Estático:
		this.mapSize = 0.05;
        this.size = [750, 400];
		
		//Cargamos la posición:
		 navigator.geolocation.getCurrentPosition(this.cargarUbicacion.bind(this),this.verErrores.bind(this));
    }
	
    cargarUbicacion(posicion){
        this.latitude = posicion.coords.latitude;
        this.longitude = posicion.coords.longitude;
		this.center = [this.longitude,this.latitude];
       
    }
	
    verErrores(error){
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert("Se ha denegado la peticion de geolocalizacion por el usuario");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Geolocalización no disponible")
                break;
            case error.TIMEOUT:
                alert("La petición de geolocalización ha caducado");
                break;
            case error.UNKNOWN_ERROR:
                alert("Se ha producido un error desconocido");
                break;
            }
    }
	
    verPosicion(){     
        var bounds = [
            this.longitude - this.mapSize,
            this.latitude - this.mapSize,
            this.longitude + this.mapSize,
            this.latitude + this.mapSize
        ];
        console.log("Ejecución")
        //En funcion de los bordes y el tamaño nos calcula el centro y el zoom
        var vp = geoViewport.viewport(bounds, this.size);
        var rutaMapa = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/' +
            vp.center.join(',') + ',' +
            vp.zoom + '/' +
            this.size.join('x') +
            '?access_token=' + this.apiKey;
        document.getElementById("map").innerHTML = "<img src='"+rutaMapa+"' alt='mapa estático' />";
    }
	
	mostrarMapaDinamico(){       
        mapboxgl.accessToken = this.apiKey;
        var map = new mapboxgl.Map({
			  container: this.container, // Specify the container ID
			  style: this.mapStyle, // Specify which map style to use
			  center: this.center, // Specify the starting position [lng, lat]
			  zoom: this.zoom // Specify the starting zoom
        });
		
		for (var index = 0; index < this.localizaciones.length; index++) {
			const marcador = new mapboxgl.Marker()
            .setLngLat(this.localizaciones[index])
            .addTo(map);
			}
      }     
}

var localizacion = new Geolocalization();