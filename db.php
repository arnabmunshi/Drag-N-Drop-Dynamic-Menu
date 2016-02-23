<?php
$username = "root";
$password = "";
$hostname = "localhost";
$connection = mysql_connect($hostname,$username, "") or die ("Oops!! connection failed! Sorry!!");

$database = mysql_select_db("menu_db" , $connection) or die ("This is annyoing! Database selection failed");
?>