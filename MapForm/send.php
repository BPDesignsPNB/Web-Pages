<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

mail("pablobeccalli@gmail.com",$asunto, $mensaje. "From: $email\r\n");

echo "Gracias por contactarnos";
 ?>
