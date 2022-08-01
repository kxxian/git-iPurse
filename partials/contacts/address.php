<div class="address-w3-agileits" id="address">
  <h4>Address</h4>
  <address>
  <ul>
    <?php
      $sql = "SELECT * FROM address";
      $stmt = $conn->query($sql);

      foreach ($stmt as $rows) {
        echo '
          <li><span class="'.$rows['address_icon'].'" aria-hidden="true"></span> '.$rows['address_loc'].'</li>
        ';
      }
    ?>
  </ul>
  </address>
</div>