<div class="services-agileits-w3layouts">
	<div class="container">
		<h3>Services</h3>
		<?php
			$sql = "SELECT * FROM services";
			$stmt = $conn->query($sql);

			foreach ($stmt as $rows) {
				echo '
					<div class="col-md-3 service-grid-agileits service-grid-agileits-top" style="margin-bottom: 6rem">
						<span class="'.$rows['service_icon'].'" aria-hidden="true"></span>
						<h4>'.$rows['service_title'].'</h4>
						<p>'.$rows['service_desc'].'</p>
						<a href="single.php">Read More</a>
					</div>
				';
			}
		?>
		<div class="clearfix"></div>
	</div>
</div>