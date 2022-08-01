<?php
require('../../app/db_conn.php');

$strOut = '';

if (isset($_POST['param'])) {
  $sql = "SELECT * FROM email";
  $stmt = $conn->query($sql);

  foreach ($stmt as $rows) {
    $strOut.= '<tr>';
    $strOut.= '<td>'.$rows['email_acc'].'</td>';
    $strOut.= '<td>'.$rows['email_icon'].'</td>';
    $strOut.= '<td style="width: 11%">
                <button class="btn btn-warning" onclick="loadRecord('.$rows['email_id'].')" title="EDIT"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger" onclick="deleteRecord('.$rows['email_id'].')" title="DELETE"><i class="fas fa-trash"></i></button>
              </td>';
    $strOut.= '</tr>';
  }
  echo $strOut;
}

if (isset($_POST['upsert'])) {
  $data = explode("^", $_POST['Data']);

  if ($data[2] == "") {
    $sql = "INSERT INTO email (email_acc, email_icon) VALUES (?,?)";
    $data = array($data[0], $data[1]);
  } else {
    $sql = "UPDATE email SET email_acc=?, email_icon=? WHERE email_id=?";
  }
  $stmt = $conn->prepare($sql);
  $stmt->execute($data);
}

if (isset($_POST['paramEdit'])) {
  $sql = "SELECT * FROM email WHERE email_id=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['EmailID']]);
  $row = $stmt->fetch();

  echo json_encode($row);
}

if (isset($_POST['paramDelete'])) {
  $sql = "DELETE FROM email WHERE email_id=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['EmailID']]);
}
?>