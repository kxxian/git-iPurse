<?php
require('../../app/db_conn.php');

$strOut = '';

if (isset($_POST['param'])) {
  $sql = "SELECT * FROM collections";
  $stmt = $conn->query($sql);


  foreach ($stmt as $rows) {
    $strOut.= '<tr>';
    $strOut.= '<td>'.$rows['collection_title'].'</td>';
    $strOut.= '<td>'.$rows['collection_desc'].'</td>';
    $strOut.= '<td style="width: 5%">
                <button class="btn btn-warning" id="btnCollectionUpd" onclick="loadRecord('.$rows['collection_id'].')" title="EDIT"><i class="fas fa-edit"></i></button>
              </td>';
    $strOut.= '</tr>';
  }

  echo $strOut;
}

if (isset($_POST['paramEdit'])) {
  $sql = "SELECT * FROM collections WHERE collection_id=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['CollectionID']]);
  $row = $stmt->fetch();

  echo json_encode($row);
}

if (isset($_POST['paramUpdate'])) {
  $sql = "UPDATE collections SET collection_title=?, collection_desc=? WHERE collection_id=?";
  $stmt = $conn->prepare($sql);
  $data = explode("^", $_POST['Data']);
  $stmt->execute($data);
}
?>