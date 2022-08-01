<div class="footer">
	<div class="container">
		<div class="col-md-3 footer-left-w3">
			<h4>Contact</h4>
			<?php
				$sql = "SELECT * FROM contacts";
				$stmt = $conn->query($sql);

				foreach ($stmt as $rows) {
					echo '
						<ul>
							<li><span class="'.$rows['contact_icon'].'" aria-hidden="true"></span></li>
							<li><a href="contact.php"><h6>'.$rows['contact_list'].'</h6></a></li>
						</ul>
					';
				}
			?>
		</div>
		<div class="col-md-5 footer-middle-w3">
			<h4>Latest Games</h4>
			<?php
				$sql = "SELECT * FROM new_games";
				$stmt = $conn->query($sql);

				foreach ($stmt as $rows) {
					echo '
						<div class="col-md-3 img-w3-agile" style="margin-bottom: 2.5rem">
							<a href="single.php"><img src="cms/uploads/newGame/'.$rows['newGame_img'].'" alt="new_games" /></a>
						</div>	
					';
				}
			?>
			<div class="clearfix"></div>
		</div>
		<div class="col-md-4 footer-right-w3">
			<?php
				$sql = "SELECT * FROM footer";
				$stmt = $conn->query($sql);

				foreach ($stmt as $rows) {
					echo '
						<br>
						<a href="index.php"><h4><img src="images/'.$rows['footer_img'].'" alt="footer_image" /></h4></a>
						<p>'.$rows['footer_desc'].'</p>
					';
				}
			?>
		</div>
		<div class="clearfix"></div>
		<div class="copyright">
			<p>&copy; 2022 iPurse. All Rights Reserved | Design by <a href="#" target="_blank"> code1118 </a></p>
		</div>
	</div>
</div>