<div class="team-w3layouts">
		<div class="container">
			<div class="w3l_team_grids-agile">
				<?php
					$sql = "SELECT * FROM members";
					$stmt = $conn->query($sql);

					foreach ($stmt as $rows) {
						echo '
							<div class="col-md-3 w3l_team_grid">
								<div class="view view-second">
									<img src="cms/uploads/members/'.$rows['member_img'].'" alt=" " class="img-responsive" />
									<div class="mask"></div>
									<div class="content">
										<div class="w3l_social_icons w3l_social_icons1">
											<ul>
												<li><a href="'.$rows['member_liLink'].'" class="linkedin"></a></li>
												<li><a href="'.$rows['member_gLink'].'" class="google"></a></li>
												<li><a href="'.$rows['member_twtLink'].'" class="twitter"></a></li>
												<li><a href="'.$rows['member_fbLink'].'" class="facebook"></a></li>
											</ul>
										</div>
										<p>'.$rows['member_desc'].'</p>
									</div>
								</div>
								<h4>'.$rows['member_name'].'</h4>
								<p>'.$rows['member_title'].'</p>
							</div>
						';
					}
				?>
				<div class="clearfix"> </div>
			</div>
		</div>
</div>