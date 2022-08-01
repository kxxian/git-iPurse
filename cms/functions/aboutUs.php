<?php
require('../../app/db_conn.php');

$strOut = '';

if (isset($_POST['param'])) {
  $sql = "SELECT * FROM about_us";
  $stmt = $conn->query($sql);

  foreach ($stmt as $rows) {
    $strOut.= '<tr>';
    $strOut.= '<td>'.$rows['aboutUs_desc'].'</td>';
    $strOut.= '<td>'.$rows['aboutUs_img'].'</td>';
    $picture = '<img src="uploads/aboutUs/'.$rows['aboutUs_img'].'" class="w-100" alt="aboutUs_img">';
    $strOut.= '<td width="200vh">'.$picture.'</td>';
    $strOut.= '<td style="width: 11%">
                <button class="btn btn-warning" id="btnAboutUpd" onclick="loadRecord('.$rows['aboutUs_id'].')" title="EDIT"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger" onclick="deleteRecord('.$rows['aboutUs_id'].')" title="DANGER"><i class="fas fa-trash"></i></button>
               </td>';
    $strOut.= '</tr>';
  }

  echo $strOut;
}

if (isset($_POST['about_desc'])) {
  $aboutDesc = htmlspecialchars(trim($_POST['about_desc']));
  $aboutImgName = htmlspecialchars(trim($_POST['about_imgName']));
  if (isset($_FILES['image'])) {
    $img_name = $_FILES['image']['name'];
    $tmp_name = $_FILES['image']['tmp_name'];
    $error = $_FILES['image']['error'];

    if ($error === 0) {
      $img_ex = pathinfo($img_name, PATHINFO_EXTENSION);
      $img_ex_lc = strtolower($img_ex);
      $img_new_name = $aboutImgName.'.'.$img_ex_lc;

      $img_upload_path = '../uploads/aboutUs/'.$img_new_name;
      move_uploaded_file($tmp_name, $img_upload_path);

      if (isset($img_new_name)) {
        $sql = "INSERT INTO about_us (aboutUs_desc, aboutUs_imgName, aboutUs_img) VALUES (?,?,?)";
        $stmt = $conn->prepare($sql);
        $stmt->execute([$aboutDesc, $aboutImgName, $img_new_name]);
      }
    }
  }
}

if (isset($_POST['paramEdit'])) {
  $sql = "SELECT * FROM about_us WHERE aboutUs_id=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['AboutID']]);
  $row = $stmt->fetch();

  echo json_encode($row);
}

if (isset($_POST['paramUpdate'])) {
  $sql = "UPDATE about_us SET aboutUs_desc=? WHERE aboutUs_id=?";
  $data = explode("^", $_POST['Data']);
  $stmt = $conn->prepare($sql);
  $stmt->execute($data);
}

if (isset($_POST['paramDelete'])) {
  $sql = "DELETE FROM about_us WHERE aboutUs_id=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['AboutID']]);
}
?>