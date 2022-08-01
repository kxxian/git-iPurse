<div class="services-bottom-w3-agileits">
	<div class="container">
		<div class="wthree_info">
			<section class="slider">
				<div class="flexslider">
					<ul class="slides">
						<?php
							$sql = "SELECT * FROM news";
							$stmt = $conn->query($sql);

							foreach ($stmt as $rows) {
								echo '
										<li>
											<div class="wthree_info_grid">
												<h3>'.$rows['news_title'].'</h3>
												<p>'.$rows['news_desc'].'</p>
												<a href="single.php" class="learn">Learn More</a>
											</div>
										</li>
								';
							}
						?>
					</ul>
				</div>
			</section>
					<!-- flexSlider -->
						
						<script defer src="js/jquery.flexslider.js"></script>
						<script type="text/javascript">
						$(window).load(function(){
							$('.flexslider').flexslider({
							animation: "slide",
							start: function(slider){
								$('body').removeClass('loading');
							}
							});
						});
						</script>
					<!-- //flexSlider -->
		</div>
	</div>
</div>
