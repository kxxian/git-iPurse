<!--A Design by W3layouts 
Author: W3layout
Author URL: http://w3layouts.com
-->
<?php
	include('app/db_conn.php')
?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>iPurse | About</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Kids Video Game Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<!-- css -->
<link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />	
<!--// css -->
<!-- icon  -->
<link rel="icon" href="images/c1.png">
<!-- //icon  -->
<!-- font -->
<link href='//fonts.googleapis.com/css?family=Josefin+Sans:400,100,100italic,300,300italic,400italic,600,600italic,700,700italic' rel='stylesheet' type='text/css'>
<link href='//fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'>
<!-- //font -->
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.js"></script>
</head>
<body> 
<!-- banner -->
<div class="sub-banner">
		<!-- Navbar -->
		<?php 
		$pageValue = 2;
		include('partials/header.php') ?>
</div>
<!-- banner -->

<!-- about-->
<?php include('partials/about/about.php') ?>
<!-- //about -->

<!-- Collection -->
<?php include('partials/about/collection.php') ?>
<!-- //Collection -->


<!-- team -->
<?php //include('partials/about/team.php') ?>
<!-- //team -->


<!-- footer -->
<?php include('partials/footer.php') ?>
<!-- //footer -->
</body>
</html>