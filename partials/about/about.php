<div class="about-agileinfo" id="about">
		<div class="container">
			<h2>About Us</h2>
			<div class="about-grids-w3-agileits">
				<div class="col-md-6 about-grid-left-agileits-w3layouts">
					<ul>
						<?php
							$sql = "SELECT * FROM about_list";
							$stmt = $conn->query($sql);
							
							foreach ($stmt as $rows) {
								echo '
									<li><i>'.$rows['aboutList_num'].'</i><a class="link link--kumya" href="single.php"><span data-letters="'.$rows['aboutList_desc'].'">'.$rows['aboutList_desc'].'</span></a></li>
								
								';
							}
						?>
					</ul>
				</div>
				<div class="col-md-6 about-grid-right-w3-agile">
					<div class="grid-w3ls">
					<figure class="effect-zoe">
						<?php
							$sql = "SELECT * FROM about_us";
							$stmt = $conn->query($sql);

							foreach ($stmt as $rows) {
								echo '
									<img src="cms/uploads/aboutUs/'.$rows['aboutUs_img'].'" alt=" " class="img-responsive" />
									<figcaption>
										<h3>i<span>Purse</span>Game</h3>
										<p class="icon-links">
											<a href="#"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></a>
											<a href="#"><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a>
											<a href="#"><span class="glyphicon glyphicon-paperclip" aria-hidden="true"></span></a>
										</p>
										<p class="description">'.$rows['aboutUs_desc'].'</p>
									</figcaption>			
								';
							}
						?>
					</figure>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>