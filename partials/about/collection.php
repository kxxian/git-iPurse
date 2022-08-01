<div class="collection-agileits">
	<div class="collection-grids-agileits-w3layouts">
		<div class="col-md-4 col-sm-4 collection-left">
			
		</div>
		<div class="col-md-8 col-sm-8 collection-right">
			<?php
				$sql = "SELECT * FROM collections";
				$stmt = $conn->query($sql);

				foreach ($stmt as $rows) {
					echo '
						<div class="col-md-4 col-sm-4 collection-grid collection-text collection-grid-1">
							<img src="images/'.$rows['collection_img'].'" alt="collection_img">
							<h3>'.$rows['collection_title'].'</h3>
							<p>'.$rows['collection_desc'].'</p>
						</div>
						<div class="col-md-4 col-sm-4 collection-grid collection-image '.$rows['collection_grid'].'">
							
						</div>
					';
				}
			?>
			<div class="clearfix"></div>
		</div>
		<div class="clearfix"></div>
	</div>
</div>