<?php 
  session_start(); 

  if (!isset($_SESSION['username'])) {
  	$_SESSION['msg'] = "You must log in first";
  	header('location: login.php');
  }
  if (isset($_GET['logout'])) {
  	session_destroy();
  	unset($_SESSION['username']);
  	header("location: login.php");
  }
?>
<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	 <script defer src="homepage.js"></script>
</head>
<body>

<div class="header">
	<h2>Home Page</h2>
</div>
<div class="content">
  	<!-- notification message -->
  	<?php if (isset($_SESSION['success'])) : ?>
      <div class="error success" >
      	<h3>
          <?php 
          	echo $_SESSION['success']; 
          	unset($_SESSION['success']);
          ?>
      	</h3>
      </div>
  	<?php endif ?>

    <!-- logged in user information -->
    <?php  if (isset($_SESSION['username'])) : ?>
    	<p>Welcome <strong><?php echo $_SESSION['username']?></strong></p>
      <!-- <p>with <strong><?php echo $_SESSION['userid']?></strong></p> -->
    	<p> <a href="homepage.php?logout='1'" style="color: red;">logout</a> </p>
    <?php endif ?>
    <h1>Setari Profil</h1>
    <h1>Nivel</h1>
    <h1 id="cursuriInceputeID">Cursuri incepute</h1>
    <h1 id="calendar">Calendar</h1>
    <h1 id="useriDB">Useri DB</h1>
    <h1 id="mesajeId">Mesaje</h1>
    <h1 id="clasamentID">Clasament</h1>

</div>
		
</body>
</html>