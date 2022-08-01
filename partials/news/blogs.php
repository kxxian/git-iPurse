<div class="events-section2-agileinfo">
  <div class="container">
    <div class="blog1-w3ls">
      <?php
        $sql = "SELECT * FROM blogs";
        $stmt = $conn->query($sql);

        foreach ($stmt as $rows) {
          echo '
            <div class="col-md-4 blog-image-w3l" style="margin-bottom: 3rem">
              <a href="single.php"><img src="images/'.$rows['blog_img'].'" alt="blog_img"/></a>
            </div>
            <div class="col-md-8 blog-text-w3ls">
              <a href="single.php"><h4>'.$rows['blog_title'].'</h4></a>
              <div class="item_info">
                  <ul>
                    <li><a href="#"><i class="glyphicon glyphicon-user"></i>'.$rows['blog_creator'].'</a></li>
                    <li><i class="glyphicon glyphicon-calendar"></i>'.$rows['blog_date'].'</li>
                    <li><a href="#"><i class="glyphicon glyphicon-comment"></i>'.$rows['blog_comments'].'</a></li>
                    <li><a href="#"><i class="glyphicon glyphicon-heart"></i>'.$rows['blog_likes'].'</a></li>
                  </ul>				
              </div>
              <p>'.$rows['blog_desc'].'</p>
              <a href="single.php" class="blog-read" >Read More</a>
            </div>
            <div class="clearfix"></div>
          ';
        }
      ?>
    </div>
  </div>
</div>