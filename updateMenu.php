<?php
$menu_name = $_POST['menu_name'];
$menu_id = $_POST['menu_id'];

include 'db.php';

$sql = "UPDATE menu SET menu_name = '$menu_name', update_date = NOW() WHERE menu_id = '$menu_id'";
$result = mysql_query($sql);

mysql_close($connection);
?>