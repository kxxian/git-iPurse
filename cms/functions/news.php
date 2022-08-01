<?php
require('../../app/db_conn.php');

$strOut = '';

if (isset($_POST['param'])) {
  $sql = "SELECT * FROM news";
  $stmt = $conn->query($sql);

  foreach ($stmt as $rows) {
    $strOut.= '<tr>';
    $strOut.= '<td>'.$rows['news_title'].'</td>';
    $strOut.= '<td>'.$rows['news_desc'].'</td>';
    $strOut.= '<td style="width: 11%">
              <button class="btn btn-warning" onclick="loadRecord('.$rows['news_id'].')" title="EDIT"><i class="fas fa-edit"></i></button>
              <button class="btn btn-danger" onclick="deleteRecord('.$rows['news_id'].')" title="DELETE"><i class="fas fa-trash"></i></button>
              </td>';
    $strOut.= '</tr>';
  }

  echo $strOut;
}

if (isset($_POST['upsert'])) {
  $newsTitle = htmlspecialchars(trim($_POST['news_title']));
  $newsDesc = htmlspecialchars(trim($_POST['news_desc']));
  $data = explode("^", $_POST['Data']);

  if ($data[2] == "") {
    $sql = "INSERT INTO news (news_title, news_desc) VALUES (?,?)";
    $data = array($data[0], $data[1]);
  } else {
    $sql = "UPDATE news SET news_title=?, news_desc=? WHERE news_id=?";
  }
  $stmt = $conn->prepare($sql);
  $stmt->execute($data);

}

if (isset($_POST['paramEdit'])) {
  $sql = "SELECT * FROM news WHERE news_id=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['NewsID']]);
  $row = $stmt->fetch();

  echo json_encode($row);
}

if (isset($_POST['paramDelete'])) {
  $sql = "DELETE FROM news WHERE news_id=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['NewsID']]);
}
?>