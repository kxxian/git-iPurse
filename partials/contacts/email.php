<div class="email">
  <h4>Email</h4>
  <?php
    $sql = "SELECT * FROM email";
    $stmt = $conn->query($sql);

    foreach ($stmt as $rows) {
      echo '
        <p><span class="'.$rows['email_icon'].'" aria-hidden="true"></span> <a href="mailto:mail@example.com"> '.$rows['email_acc'].'</a></p>
      ';
    }
  ?>
</div>