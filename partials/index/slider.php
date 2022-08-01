<div class="slider">
  <ul class="rslides" id="slider">
		<?php
			$sql = "SELECT * FROM slider";
			$stmt = $conn->query($sql);

			foreach ($stmt as $rows) {
				echo '
					<li>
						<img src="cms/uploads/sliders/'.$rows['slider_img'].'" alt="slider_img" />
					</li>
				
				';
			}
		?>
  </ul>
</div>
<!-- Banner-Slider-JavaScript -->
	<script src="js/responsiveslides.min.js"></script>
	<script>
		$(function () {
			$("#slider").responsiveSlides({
				auto: true,
				nav: true,
				speed: 800,
				namespace: "callbacks",
				pager: true,
			});
		});
	</script>
	<!-- //Banner-Slider-JavaScript -->