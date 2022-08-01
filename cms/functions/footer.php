<?php
require('../../app/db_conn.php');

$strOut = '';

if (isset($_POST['param'])) {
  $sql = "SELECT * FROM footer";
  $stmt = $conn->query($sql);

  foreach ($stmt as $rows) {
    $strOut.= '<tr>';
    $strOut.= '<td>'.$rows['footer_desc'].'</td>';
    $strOut.= '<td style="width: 11%">
              <button class="btn btn-warning" onclick="loadRecord('.$rows['footer_id'].')" title="EDIT"><i class="fas fa-edit"></i></button>
              <button class="btn btn-danger" onclick="deleteRecord('.$rows['footer_id'].')" title="DELETE"><i class="fas fa-trash"></i></button>
              </td>';
    $strOut.= '</tr>';
  }

  echo $strOut;
}

if (isset($_POST['upsert'])) {
  $footerDesc = htmlspecialchars(trim($_POST['footer_desc']));
  $data = explode("^", $_POST['Data']);
  if ($data[1] == "") {
    $sql = "INSERT INTO footer (footer_desc) VALUES (?)";
    $data = array($data[0]);
  } else {
    $sql = "UPDATE footer SET footer_desc=? WHERE footer_id=?";
  }
  $stmt = $conn->prepare($sql);
  $stmt->execute($data);
}

if (isset($_POST['paramEdit'])) {
  $sql = "SELECT * FROM footer WHERE footer_id=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['FooterID']]);
  $row = $stmt->fetch();

  echo json_encode($row);
}

if (isset($_POST['paramDelete'])) {
  $sql = "DELETE FROM footer WHERE footer_id=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['FooterID']]);
}
?>