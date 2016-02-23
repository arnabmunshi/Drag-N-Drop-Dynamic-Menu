<?php
include 'db.php';

$sql = "INSERT INTO menu (menu_name,create_date,update_date) VALUES('Menu Name', NOW(), NOW())";
$result = mysql_query($sql);

$menu_id = mysql_insert_id();

$sql = "SELECT * FROM menu_possion";
$result = mysql_query($sql);

if(mysql_num_rows($result) > 0) {
  $sql = "SELECT * FROM menu_possion where id in (SELECT MAX(id) FROM menu_possion)";
  $result = mysql_query($sql);
  $row = mysql_fetch_array($result);
  $sort = (string)$row['sorted'];
  $newSort = $sort.','.(string)$menu_id;

  $sql = "INSERT INTO menu_possion (sorted,update_date) VALUES('$newSort', NOW())";
  $result = mysql_query($sql);
} else {
  $sql = "INSERT INTO menu_possion (sorted,update_date) VALUES('$menu_id', NOW())";
  $result = mysql_query($sql);
}
mysql_close($connection);

echo $menu_id;
?>