<!--A Design by W3layouts 
Author: W3layout
Author URL: http://w3layouts.com
-->
<?php
	require('app/db_conn.php')
?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>iPurse | Contact</title>
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
		$pageValue = 4;
		include('partials/header.php') ?>
</div>
<!-- banner -->
<div class="contact-agileinfo">
	<div class="container">
		<h2>Reach Us</h2>
		<div class="col-md-4 contact-left-agile">
			<!-- address  -->
			<?php include('partials/contacts/address.php') ?>
			<!-- phone  -->
			<?php include('partials/contacts/phone.php') ?>
			<!-- email  -->
			<?php include('partials/contacts/email.php') ?>
		</div>
		<div class="col-md-8 contact-right-w3">
			<form action="https://sendmail.w3layouts.com/submitForm" method="post">
				<input type="text" class="text" name="w3lName" placeholder="Name" required="">
				<input type="text" class="text" name="w3lSender" placeholder="Email" required="">
				<input type="text" class="text" name="w3lPhone" placeholder="Phone" required="">
				<input type="text" class="text" name="w3lSubject" placeholder="Subject" required="">
				<textarea name="w3lMessage" placeholder="Message" required=""></textarea>
				<input type="submit" class="more_btn" value="Send Message">
			</form>
		</div>
		<div class="clearfix"></div>
	</div>
</div>

<!-- Map-iFrame -->
<?php include('partials/contacts/maps.php') ?>
<!-- //Map-iFrame -->

<!-- footer -->
<?php include('partials/footer.php') ?>
<!-- //footer -->
</body>
</html>