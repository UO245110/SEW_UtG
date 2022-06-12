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
		 <link rel="stylesheet" type="text/css" href="estilos/tabla.css"/>
		 <link rel="stylesheet" type="text/css" href="estilos/layout.css"/>
	</head>
	
	<body>
		<header>
		<h1> Menú navegación - UtG </h1>
			
			 <nav>
				  <a title="Página inicial de Uniovi the Gathering." href="index.html">Inicio</a>
				  <a title="Historia sobre Magic the Gathering." href="historia.html">Historia</a>
				  <a title="Mapa de tiendas de MtG." href="mapa.html">Mapa</a>
				  <a title="Colección de mazos de MtG" href="mazos.html">Mazos</a>
				  <a title="Ofertas de mazos de MtG" href="ofertas.php">Ofertas</a>
				  <a title="Contacto sobre UtG" href="contacto.html">Contacto</a>
				  <a title="Gadgets de UtG" href="gadgets.html">Gadgets</a>
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
                    $this->database = "database";
                    $this->response = array();
                }
		
				public function inicioOffers()	{
					echo "<h2> Ofertas de cartas en UtG </h2>";
					echo "<p> La siguiente tabla muestra cada una de las ofertas que constan en el sistema, de momento el 
					número de unidades es ilimitadas. Pero por favor tenga cuidado con comprobar que la calidade de la carta se 
					adapte a sus necesidades.</p>";
				}
				
				public function selectOffers(){
					$connection = new mysqli($this->host, $this->user, $this->password, $this->database);
                    /* check connection */
					if ($connection->connect_errno) {
						printf("Connect failed: %s\n", $mysqli->connect_error);
						exit();
					}
					
					$query = "SELECT tcards.Name, toffers.Price, toffers.State, toffers.IDCard 
							  FROM toffers INNER JOIN tcards ON tcards.IDCard = toffers.IDCard;";                   
					$return = $connection->query($query);
                    $this->response['selectOffers'] =
						"<table>
							<tr> <th> Carta </th> <th> Precio </th> <th> Calidad </th> <th> Código Carta </th> </tr>";						
					if($return->num_rows >= 1){                              
                                while ($data = $return->fetch_assoc()) {
									 $this->response['selectOffers'] .= "
										<tr>
											<td> ".$data["Name"]." </td> 
											<td> ".$data["Price"]."€ </td> 
											<td> ".$data["State"]." </td>  
											<td> ".$data["IDCard"]." </td>  
											</tr> ";
								}
								   $this->response['selectOffers'] .= "</table> <br>";
                            }else{
                                $this->response['selectOffers'] = "<p>No se ha encontrado ninguna oferta</p> <br>";
							}
					echo $this->response['selectOffers'];
				}
				
				public function inicioComments(){
					echo "<h2> Comentarios de los usuarios de UtG</h2>";
					echo "<p> Los siguientes comentarios han sido realizados por parte de algunos usuarios del sistema. Los comentarios
					no se pueden modificar ni volver a realizar tras haberlo añadido a la página web.</p>";
				}
				
				public function selectComments(){
					$connection = new mysqli($this->host, $this->user, $this->password, $this->database);
                    /* check connection */
					if ($connection->connect_errno) {
						printf("Connect failed: %s\n", $mysqli->connect_error);
						exit();
					}
					
					$query = "SELECT tusers.Name, tcomments.Comment, tcomments.IDCard FROM tcomments INNER JOIN tusers ON tusers.IDUser = tcomments.IDUser;";                   
					$return = $connection->query($query);
                    $this->response['selectComments'] =
						"<table>
							<tr> <th> Nombre </th> <th> Comentario </th> <th> Código Carta </th> </tr>";						
					if($return->num_rows >= 1){                              
                                while ($data = $return->fetch_assoc()) {
									 $this->response['selectComments'] .= "
										<tr>
											<td>".$data["Name"]."</td> <td>".$data["Comment"]."</td> <td>".$data["IDCard"]."</td> </tr>";
								}
								   $this->response['selectComments'] .= "</table> <br>";
                            }else{
                                $this->response['selectComments'] = "<p>No se ha encontrado ningún comentario</p> <br>";
							}
					echo $this->response['selectComments'];
				}
				
				public function inicioUsers(){
					echo "<p> Seleccione la identidad de la persona con la que quiere realizar el comentario: </p>";
				}
				
				public function getUsers()	{
					$connection = new mysqli($this->host, $this->user, $this->password, $this->database);
					if ($connection->connect_errno) {
						printf("Connect failed: %s\n", $mysqli->connect_error);
						exit();
					}
					$query = "SELECT * FROM TUsers;";
					$return = $connection->query($query);
					$this->response['selectUsers'] =
						"<label for=\"selectedUser\">Usuario seleccionado:</label>";
					$this->response['selectUsers'] .=
							"<select id=selectedUser name=selectedUser>";
					if($return->num_rows >= 1){                              
                                while ($data = $return->fetch_assoc()) {
									 $this->response['selectUsers'] .= 
										"<option value=".$data["IDUser"].">".$data["Name"]."</option>";
								}
								   $this->response['selectUsers'] .= "</select>";
                            }else{
                                $this->response['selectUsers'] = "<p>No se ha encontrado ningún usuario</p>";
							}
					echo $this->response['selectUsers'];
				
				}
				
				public function inicioCards(){
					echo "<p> Seleccione la carta que quiera comentar y que no haya sido comentada anteriormente por el usuario escogido. </p>";
				}
				
				public function getCards()	{
					$connection = new mysqli($this->host, $this->user, $this->password, $this->database);
					if ($connection->connect_errno) {
						printf("Connect failed: %s\n", $mysqli->connect_error);
						exit();
					}
					$query = "SELECT * FROM TCards;";
					$return = $connection->query($query);
					$this->response['selectCards'] =
						"<label for=\"selectedCard\">Carta seleccionada:</label>";
					$this->response['selectCards'] .=
							"<select id=selectedCard name=selectedCard>";
					if($return->num_rows >= 1){                              
                                while ($data = $return->fetch_assoc()) {
									 $this->response['selectCards'] .= 
										"<option value=".$data["IDCard"].">".$data["Name"]."</option>";
								}
								   $this->response['selectCards'] .= "</select> <br>";
                            }else{
                                $this->response['selectCards'] = "<p>No se ha encontrado ningún usuario</p>";
							}
					echo $this->response['selectCards'];
				
				}
				
				public function inicioInsertar(){
					echo "<h2> Añade tu propio comentario</h2>";
				}
				
				public function setStatementInicio(){
					$this->response['inicioForm'] =
						"<form method=\"post\" name=\"form\">";
					echo $this->response['inicioForm'];						
				}
				
				public function inicioTextComentario(){
					echo "<p> A continuación introduzca su comentario, intente ser breve.</p>";
				}
				
				public function  setTextComentario(){
					$this->response['text'] =
						"<label for=\"comentario\">Mensaje a comentar:</label>";
					$this->response['text'] .=
					
						"<textarea id=\"comentario\" name=\"comentario\" required></textarea> <br>";
					echo $this->response['text'];	
				}
				
				public function setStatementFinal(){
					$this->response['finalForm'] =
						"<input name=\"insertarComentario\" type=\"submit\" value=\"Enviar\">";
					$this->response['finalForm'] .=
						"</form>";
					echo $this->response['finalForm'];						
				}
				
				public function insertComment()	{
					$connection = new mysqli($this->host, $this->user, $this->password, $this->database);
					if ($connection->connect_errno) {
						printf("Connect failed: %s\n", $mysqli->connect_error);
						exit();
					}
					$stmt = $connection->prepare("INSERT INTO TComments (IDUser, IDCard, Comment) VALUES (?, ?, ?)");
					$stmt->bind_param("iis", $iduser, $idcard, $comment);
					
					$iduser =  $_POST['selectedUser'];
					$idcard =  $_POST['selectedCard'];
					$comment =  $_POST['comentario'];
					
					$stmt->execute();
				}
				
				public function construirInicio(){
					echo " <section>
							<h2> Espacio de compras UtG</h2>
							<p> Esta zona de la página web está destinada para que todo usuario pueda ver las ofertas de las cartas
							actuales en el sistema y algunos comentarios de nuestros usuarios respecto a estas. </p>
							<p> De momento el sistema está cerrado y solo está disponible para determinados usuarios y unas cartas 
							específicas, pero estamos seguros de que a pesar de estar en un estado tan inicial podrás aprovecharlo. </p>
						   </section>";
				}
			}
			
				
			
			$bd = new GestorBD();
			
			if (isset($_POST['insertarComentario'])){
                $bd->insertComment();
            }
			
			$bd -> construirInicio();
			$bd -> inicioOffers();
			$bd -> selectOffers();
			$bd -> inicioComments();
			$bd -> selectComments();
			$bd -> inicioInsertar();
			$bd -> setStatementInicio();
			$bd -> inicioUsers();
			$bd -> getUsers();
			$bd -> inicioCards();
			$bd -> getCards();
			$bd -> inicioTextComentario();
			$bd -> setTextComentario();
			$bd -> setStatementFinal();
		
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