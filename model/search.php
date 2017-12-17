<?php
include "../control/db.php";
include "../control/connectie.php";


$searchString = $_GET["search"];

$sql= "SELECT * FROM videoInfo WHERE title LIKE '". $searchString ."%'";
$result = $mysqli->query($sql);
while($searchRow = $result->fetch_assoc()){
    echo "<p>".$searchRow["title"]."</p>";
}