<?php
require('../../app/db_conn.php');

$strOut = '';

if (isset($_POST['param'])) {
  $sql = "SELECT * FROM about_list";
  $stmt = $conn->query($sql);

  foreach ($stmt as $rows) {
    $strOut.= '<tr>';
    $strOut.= '<td>'.$rows['aboutList_num'].'</td>';
    $strOut.= '<td>'.$rows['aboutList_desc'].'</td>';
    $strOut.= '<td style="width: 11%">
                <button class="btn btn-warning" onclick="loadRecord('.$rows['aboutList_id'].')" title="EDIT""><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger" onclick="deleteRecord('.$rows['aboutList_id'].')" title="DELETE"><i class="fas fa-trash"></i></button>
              </td>';
    $strOut.= '</tr>';
  }

  echo $strOut;
}

if (isset($_POST['upsert'])) {
  $aboutListNum = htmlspecialchars(trim($_POST['aboutList_num']));
  $aboutListDesc = htmlspecialchars(trim($_POST['aboutList_desc']));
  $data = explode("^", $_POST['Data']);

  if ($data[2] == "") {
    $sql = "INSERT INTO about_list (aboutList_num, aboutList_desc) VALUES (?,?)";
    $data = array($data[0], $data[1]);
  } else {
    $sql = "UPDATE about_list SET aboutList_num=?, aboutList_desc=? WHERE aboutList_id=?";
  }
  $stmt = $conn->prepare($sql);
  $stmt->execute($data);
}

if (isset($_POST['paramEdit'])) {
  $sql = "SELECT * FROM about_list WHERE aboutList_id=? ";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['AboutListID']]);
  $row = $stmt->fetch();

  echo json_encode($row);
}

if (isset($_POST['paramDelete'])) {
  $sql = "DELETE FROM about_list WHERE aboutList_id=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['AboutListID']]);
}
?>