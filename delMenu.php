<?php
$menu_id = $_POST['menu_id'];
$sortID = $_POST['sortID'];

include 'db.php';

$sql = "DELETE FROM menu WHERE menu_id = '$menu_id'";
$result = mysql_query($sql);

$newSort = $_POST['sortID'];
$newSort = trim($sortID, ",");

$sql = "INSERT INTO menu_possion (sorted,update_date) VALUES('$newSort', NOW())";
$result = mysql_query($sql);

mysql_close($connection);
?>