<?php
require('../../app/db_conn.php');

$strOut = '';

if (isset($_POST['param'])) {
  $sql = "SELECT * FROM slider";
  $stmt = $conn->query($sql);

  foreach ($stmt as $rows) {
    $strOut.= '<tr>';
    $strOut.= '<td>'.$rows['slider_imgName'].'</td>';
    $strOut.= '<td>'.$rows['slider_img'].'</td>';
    $picture = '<img src="uploads/sliders/'.$rows['slider_img'].'" class="w-100" alt="slider_img">';
    $strOut.= '<td width="200vh">'.$picture.'</td>';
    $strOut.= '<td style="width: 5%">
              <button class="btn btn-danger" onclick="deleteRecord('.$rows['slider_id'].')" title="DELETE"><i class="fas fa-trash"></i></button>
              </td>';
    $strOut.= '</tr>';
  }

  echo $strOut;
}

if (isset($_POST['slider_imgName'])) {
  $sliderName = htmlspecialchars(trim($_POST['slider_imgName']));

  if (isset($_FILES['image'])) {
    $img_name = $_FILES['image']['name'];
    $tmp_name = $_FILES['image']['tmp_name'];
    $error = $_FILES['image']['error'];

    if ($error === 0) {
      $img_ex = pathinfo($img_name, PATHINFO_EXTENSION);
      $img_ex_lc = strtolower($img_ex);
      $img_new_name = $sliderName.'.'.$img_ex_lc;

      $img_upload_path = '../uploads/sliders/'.$img_new_name;
      move_uploaded_file($tmp_name, $img_upload_path);
    }
  }

  if (isset($img_new_name)) {
    $sql = "INSERT INTO slider (slider_imgName, slider_img) VALUES (?,?)";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$sliderName, $img_new_name]);
  }
}

if (isset($_POST['paramDelete'])) {
  $sql = "DELETE FROM slider WHERE slider_id=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['SliderID']]);
}
?>