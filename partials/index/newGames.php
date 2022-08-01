<div class="new-w3-agile">
	<div class="container">
		<h3>New Games</h3>
		<?php
			$sql = "SELECT * FROM new_games";
			$stmt = $conn->query($sql);

			foreach ($stmt as $rows) {
				echo '
					<div class="col-md-3 new-grid-w3l view view-eighth">
						<img src="cms/uploads/newGame/'.$rows['newGame_img'].'" alt="new_game" />
						<div class="mask">
							<a href="single.php"><h4>Click here</h4></a>
							<p>To learn more about this</p>
						</div>
					</div>
				';
			}
		?>
		<div class="clearfix"></div>
	</div>
</div>