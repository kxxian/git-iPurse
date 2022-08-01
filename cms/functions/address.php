<?php
require('../../app/db_conn.php');

$strOut = '';

if (isset($_POST['param'])) {
  $sql = "SELECT * FROM address";
  $stmt = $conn->query($sql);

  foreach ($stmt as $rows) {
    $strOut.= '<tr>';
    $strOut.= '<td>'.$rows['address_loc'].'</td>';
    $strOut.= '<td>'.$rows['address_icon'].'</td>';
    $strOut.= '<td style="width: 11%">
                <button class="btn btn-warning" onclick="loadRecord('.$rows['address_id'].')" title="EDIT"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger" onclick="deleteRecord('.$rows['address_id'].')" title="DELETE"><i class="fas fa-trash"></i></button>
              </td>';
    $strOut.= '</tr>';
  }

  echo $strOut;
}

if (isset($_POST['upsert'])) {
  $data = explode("^", $_POST['Data']);

  if ($data[2] == "") {
    $sql = "INSERT INTO address (address_loc, address_icon) VALUES (?,?)";
    $data = array($data[0], $data[1]);
  } else {
    $sql = "UPDATE address SET address_loc=?, address_icon=? WHERE address_id=?";
  }
  $stmt = $conn->prepare($sql);
  $stmt->execute($data);
}

if (isset($_POST['paramEdit'])) {
  $sql = "SELECT * FROM address WHERE address_id=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['AddressID']]);
  $row = $stmt->fetch();

  echo json_encode($row);
}

if (isset($_POST['paramDelete'])) {
  $sql = "DELETE FROM address WHERE address_id=?";
  $stmt = $conn->prepare($sql); 
  $stmt->execute([$_POST['AddressID']]);
}
?>