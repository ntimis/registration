 <?php
  include_once 'server.php';
  $activeUsername= $_SESSION['username'];
  $query1 =  mysqli_query($db,"SELECT numeComplet FROM users");

?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="calendar.css" />
    </head>
<body>
</body>
</html> 

<?php
if (mysqli_num_rows($query1) > 0) {
?>
  <table>
  
  <tr>
    <td><strong>Username</strong></td>
  </tr>
<?php
$i=0;
while($row = mysqli_fetch_array($query1)) {
?>
<tr>
    <td><?php echo $row["numeComplet"]; ?></td>
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
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calendar</title>
    <link rel="stylesheet" href="calendar.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container">
    <div class="usersInCalendar">UsernamesHere</div>
      <div class="calendar">
        <div class="month">
          <i class="fas fa-angle-left prev"></i>
          <div class="date">
            <h1></h1>
            <p></p>
          </div>
          <i class="fas fa-angle-right next"></i>
        </div>
        <div class="days"></div>
      </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>