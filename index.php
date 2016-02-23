<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Drag N Drop Menu</title>

    <link rel="shortcut icon" href="icon.ico" type="image/x-icon">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <link href='https://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel=stylesheet href="master.css">
  </head>
  <body>

<?php
include 'db.php';

$sql = "SELECT * FROM menu_possion where id in (SELECT MAX(id) FROM menu_possion)";
$result = mysql_query($sql);
if(mysql_num_rows($result) > 0) {
  $row = mysql_fetch_array($result);
  $sort = (string)$row['sorted'];
  $sortArray = explode(",", $sort);
}
?>
    <div class="browser-header">
      <ul class="right-ul">
        <li><img src="icon.ico" alt="Drag-N-Drop" class="icon" /></li>
        <li><b>Drag-N-Drop Dynamic Menu</b></li>
      </ul>
      <ul class="left-ul">
        <li><i class="fa fa-circle fa-lg"></i></li>
        <li><i class="fa fa-circle fa-lg"></i></li>
        <li><i class="fa fa-circle fa-lg"></i></li>
      </ul>
    </div>
    <div class="browser-container">
      
        <div class="container">
        <ul id="sortable">
        <?php
        if(mysql_num_rows($result) > 0) {
          foreach($sortArray as $sa) {
            echo '<li class="drag-it" id='.$sa.'>';
              echo '<ul class="menu">';
                echo '<li><i class="fa fa-bars" title="Drag and Move"></i></li>';

                $sql = "SELECT * FROM menu where menu_id = '$sa'";
                $result = mysql_query($sql);
                $row = mysql_fetch_array($result);
                $menu_name = (string)$row['menu_name'];

                echo '<li>'.$menu_name.'</li>';
                echo '<li><i class="fa fa-pencil-square-o" title="Edit"></i></li>';
                echo '<li><i class="fa fa-trash-o" title="Delete"></i></li>';
              echo '</ul>';
            echo '</li>';
          }
        }
        ?>
          <span class="add-hear"></span>
        </ul>
        <!-- <div id="save"></div> -->
        <div class="btn"><button class="add-menu"><i class="fa fa-plus-circle"></i> Create Menu</button></div>
      </div>
    </div>
    
    <script src="main.js"></script>
  </body>
</html>