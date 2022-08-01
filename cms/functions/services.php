<?php
require('../../app/db_conn.php');

$strOut = '';

if (isset($_POST['param'])) {
  $sql = "SELECT * FROM services";
  $stmt = $conn->query($sql);
  
  foreach ($stmt as $rows) {
    $strOut.= '<tr>';
    $strOut.= '<td>'.$rows['service_title'].'</td>';
    $strOut.= '<td>'.$rows['service_desc'].'</td>';
    $strOut.= '<td>'.$rows['service_icon'].'</td>';
    $strOut.= '<td style="width: 11%">
                <button class="btn btn-warning" title="EDIT" onclick="loadRecord('.$rows['service_id'].')"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger" title="DELETE" onclick="deleteRecord('.$rows['service_id'].')"><i class="fas fa-trash"></i></button>
              </td>';
    $strOut.= '</tr>';
  }

  echo $strOut;
}

if (isset($_POST['upsert'])) {
  $serviceTitle = htmlspecialchars(trim($_POST['service_title']));
  $serviceDesc = htmlspecialchars(trim($_POST['service_desc']));
  $serviceIcon = htmlspecialchars(trim($_POST['service_icon']));
  $data = explode("^", $_POST['Data']);
  if ($data[3] == "") {
    $sql = "INSERT INTO services (service_title, service_desc, service_icon) VALUES (?,?,?)";
    $data = array($data[0], $data[1], $data[2]);
  } else {
    $sql = "UPDATE services SET service_title=?, service_desc=?, service_icon=? WHERE service_id=?";
  }
  $stmt = $conn->prepare($sql);
  $stmt->execute($data);
}

if (isset($_POST['paramEdit'])) {
  $sql = "SELECT * FROM services WHERE service_id=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['servId']]);
  $row = $stmt->fetch();

  echo json_encode($row);
}

if (isset($_POST['paramDelete'])) {
  $sql = "DELETE FROM services WHERE service_id=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['servId']]);
}
?>