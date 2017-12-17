<?php
include "../control/db.php";
include "../control/connectie.php";
include "../control/function.php";
$sql= "SELECT * FROM videoInfo";
$result = $mysqli->query($sql);
$result= resultToArray($result);

?>