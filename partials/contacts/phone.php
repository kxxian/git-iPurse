<div class="phone-agileits-w3layouts" id="phone">
  <h4>Phone</h4>
  <?php
    $sql = "SELECT * FROM phone";
    $stmt = $conn->query($sql);

    foreach ($stmt as $rows) {
      echo '
        <p><span class="'.$rows['phone_icon'].'" aria-hidden="true"></span> '.$rows['phone_num'].'</p>
      ';
    }
  ?>
</div>