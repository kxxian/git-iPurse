<?php
require('../../app/db_conn.php');

$strOut = '';

if (isset($_POST['param'])) {
  $sql = "SELECT * FROM phone";
  $stmt = $conn->query($sql);

  foreach ($stmt as $rows) {
    $strOut.= '<tr>';
    $strOut.= '<td>'.$rows['phone_num'].'</td>';
    $strOut.= '<td>'.$rows['phone_icon'].'</td>';
    $strOut.= '<td style="width: 11%">
                <button class="btn btn-warning" onclick="loadRecord('.$rows['phone_id'].')" title="EDIT"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger" onclick="deleteRecord('.$rows['phone_id'].')" title="DELETE"><i class="fas fa-trash"></i></button>
              </td>';
    $strOut.= '</tr>';
  }

  echo $strOut;
}

if (isset($_POST['upsert'])) {
  $data = explode("^", $_POST['Data']);
  
  if ($data[2] == "") {
    $sql = "INSERT INTO phone (phone_num, phone_icon) VALUES (?,?)";
    $data = array($data[0], $data[1]);
  } else {
    $sql = "UPDATE phone SET phone_num=?, phone_icon=? WHERE phone_id=?";
  }
  $stmt = $conn->prepare($sql);
  $stmt->execute($data);
}

if (isset($_POST['paramEdit'])) {
  $sql = "SELECT * FROM phone WHERE phone_id=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['PhoneID']]);
  $row = $stmt->fetch();

  echo json_encode($row);
}

if (isset($_POST['paramDelete'])) {
  $sql = "DELETE FROM phone WHERE phone_id=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['PhoneID']]);
}
?>