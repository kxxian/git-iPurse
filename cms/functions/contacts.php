<?php
require('../../app/db_conn.php');

$strOut = '';

if (isset($_POST['param'])) {
  $sql = "SELECT * FROM contacts";
  $stmt = $conn->query($sql);
  
  foreach ($stmt as $rows) {
    $strOut.= '<tr>';
    $strOut.= '<td>'.$rows['contact_list'].'</td>';
    $strOut.= '<td>'.$rows['contact_icon'].'</td>';
    $strOut.= '<td style="width: 11%">
              <button class="btn btn-warning" onclick="recordLoader('.$rows['contact_id'].')" title="EDIT"><i class="fas fa-edit"></i></button>
              <button class="btn btn-danger" onclick="deleteRecord('.$rows['contact_id'].')" title="DELETE"><i class="fas fa-trash"></i></button>
              </td>';
    $strOut.= '</tr>';
  }

  echo $strOut;
}

if (isset($_POST['upsert'])) {
  $contactList = htmlspecialchars(trim($_POST['contact_list']));
  $contactIcons = htmlspecialchars(trim($_POST['contact_icons']));
  $data = explode("^", $_POST['Data']);

  if ($data[2] == "") {
    $sql = "INSERT INTO contacts (contact_list, contact_icon) VALUES (?,?)";
    $data = array($data[0], $data[1]);
  } else {
    $sql = "UPDATE contacts SET contact_list=?, contact_icon=? WHERE contact_id=?";
  }
  $stmt = $conn->prepare($sql);
  $stmt->execute($data);
}

if (isset($_POST['paramEdit'])) {
  $sql = "SELECT * FROM contacts WHERE contact_id=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['ContactID']]);
  $row = $stmt->fetch();

  echo json_encode($row);
}

if (isset($_POST['paramDelete'])) {
  $sql = "DELETE FROM contacts WHERE contact_id=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['ContactID']]);
}
?>