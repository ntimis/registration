<?php
  include_once 'server.php';
  $activeUsername= $_SESSION['username'];
  $query1 =  mysqli_query($db,"SELECT * FROM users WHERE username LIKE '$activeUsername'");
  $userid = mysqli_fetch_row($query1);
  
      
  $resultQuery = mysqli_query($db,"SELECT * FROM `cursuriincepute` WHERE `idUserInscris` LIKE $userid[0]");
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cursuri Incepute</title>

</head>
<body>
    <h1>Cursuri incepute</h1>
</body>
</html>

<?php
if (mysqli_num_rows($resultQuery) > 0) {
?>
  <table>
  
  <tr>
    <td>Nume Curs</td>
    <td>Data Inceput</td>
  </tr>
<?php
$i=0;
while($row = mysqli_fetch_array($resultQuery)) {
?>
<tr>
    <td><?php echo $row["numeCurs"]; ?></td>
    <td><?php echo $row["dataInceput"]; ?></td>
</tr>
<?php
$i++;
}
?>
</table>
 <?php
}
else{
    echo "No result found";
}
?>
 </body>
</html>