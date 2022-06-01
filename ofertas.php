<!DOCTYPE HTML>

<html lang="es">
	<head>
		 <!-- Datos que describen el documento -->
		 <meta charset="UTF-8" />
		 <!-- Metadatos pedidos en el ejercicio 3 -->
		 <meta name = "keywords" content="Magic, The, Gathering">
		 <meta name = "author" content="Xurde Mares Omar">
		 <meta name ="viewport" content ="width=device-width, initial scale=1.0" />
		 <title>
			Uniovi the Gathering - Ofertas
		 </title>
		 <link rel="stylesheet" type="text/css" href="estilos/estilo.css"/>
		 <link rel="stylesheet" type="text/css" href="estilos/layout.css"/>
	</head>
	
	<body>
		<header>
		<h1> Menú navegación - UtG </h1>
			
			 <nav>
				  <a title="Página inicial de Uniovi the Gathering." href="index.html">Index</a>
				  <a title="Historia sobre Magic the Gathering." href="historia.html">Historia</a>
				  <a title="Mapa de tiendas de MtG." href="mapa.html">Mapa</a> 
				  <a title="Colección de mazos de MtG" href="mazos.html">Mazos</a>
				  <a title="Ofertas de mazos de MtG" href="ofertas.html">Ofertas</a>
				  <a title="Contacto sobre UtG" href="contacto.html">Contacto</a>
			</nav>
		</header>
		
		<main>
			<?php
			class GestorBD{
                private $user;
                private $host;
                private $password;
                private $weblibros;
                public $response;

                public function __construct(){
                    $this->user = "DBUSER2021";
                    $this->host = "localhost";
                    $this->password = "DBPSWD2021";
                    $this->database = "weblibros";
                    $this->response = array();
                }
		
					
				public function selectOffers(){
					$connection = new mysqli($this->host, $this->user, $this->password, $this->database);
                    /* check connection */
					if ($mysqli->connect_errno) {
						printf("Connect failed: %s\n", $mysqli->connect_error);
						exit();
					}
					
					$query = "SELECT tcards.Name, toffers.Price, toffers.State FROM toffers INNER JOIN tcards ON tcards.IDCard = toffers.IDCard;";                   
					$return = $connection->query($query);
                    $this->response['selectOffers'] =
						"<table>
							<tr> <th> Carta </th> <th> Precio </th> <th> Calidad </th> </tr>";
							
					if($return->num_rows >= 1){                              
                                while ($data = $return->fetch_assoc()) {
									 $this->response['selectOffers'] .= "
										<tr>
											<td>".$data["Name"]."</td> <td>".$data["Price"]."</td> <td>".$data["State"]."</td> </tr>";
								}
								   $this->response['selectOffers'] .= "</table>";
                            }else{
                                $this->response['selectOffers'] = "<p>No se ha encontrado nada</p>";
							}
					echo $this->response['selectOffers'];
				}
			}
			
			$bd = new GestorBD();
			$bd -> selectOffers();
			?>
		</main>
		
		<footer>
			<p> Esta página web es el proyecto de la asignatura de Software Y Estándares Web 2021/2022</p>
				<img src= "multimedia/Escudo_UO.png" alt= "Logo de UniOvi" />
				<img src= "multimedia/HTML5.png" alt= "HTML5 válido!" />
				<img src= "multimedia/CSS3.png" alt= "CSS3 válido!" />
		</footer>	
	</body>

</html>