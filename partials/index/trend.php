<div class="trend-w3layouts">
	<div class="container">
		<h2>Trending Games</h2>
		<ul id="flexiselDemo1">		
			<?php
				$sql = "SELECT * FROM trend";
				$stmt = $conn->query($sql);

				foreach ($stmt as $rows) {
					echo '
						<li>
							<div class="trend-grid">
								<h4>'.$rows['trend_title'].'</h4>
								<img src="././cms/uploads/trend/'.$rows['trend_img'].'" alt="trend_img" class="img-responsive" />
							</div>
						</li>
					';
				}
			?>	
			</ul>
						<script type="text/javascript">
							$(window).load(function() {
								$("#flexiselDemo1").flexisel({
									visibleItems: 5,
									animationSpeed: 1000,
									autoPlay: true,
									autoPlaySpeed: 3000,    		
									pauseOnHover: true,
									enableResponsiveBreakpoints: true,
									responsiveBreakpoints: { 
										portrait: { 
											changePoint:480,
											visibleItems: 2
										}, 
										landscape: { 
											changePoint:640,
											visibleItems:3
										},
										tablet: { 
											changePoint:768,
											visibleItems: 4
										}
									}
								});
								
							});
					</script>
					<script type="text/javascript" src="js/jquery.flexisel.js"></script>
	</div>
</div>