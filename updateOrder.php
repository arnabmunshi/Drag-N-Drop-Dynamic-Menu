<?php
$newSort = $_POST['sorted'];
$newSort = trim($newSort, ",");

include 'db.php';

$sql = "INSERT INTO menu_possion (sorted,update_date) VALUES('$newSort', NOW())";
$result = mysql_query($sql);

mysql_close($connection);
?>