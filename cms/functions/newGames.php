<?php
require('../../app/db_conn.php');

$strOut = '';
 
if (isset($_POST['param'])) {
  $sql = "SELECT * FROM new_games";
  $stmt = $conn->query($sql);

  foreach ($stmt as $rows) {
    $strOut.= '<tr>';
    $strOut.= '<td>'.$rows['newGame_name'].'</td>';
    $strOut.= '<td>'.$rows['newGame_img'].'</td>';
    $picture = '<img src="uploads/newGame/'.$rows['newGame_img'].'" class="w-100" alt="new_game">';
    $strOut.= '<td width="200vh">'.$picture.'</td>';
    $strOut.= '<td style="width: 5%">
                <button class="btn btn-danger" title="DELETE" onclick="deleteRecord('.$rows['newGame_id'].')"><i class="fas fa-trash"></i></button>
              </td>';
    $strOut.= '</tr>';
  }

  echo $strOut;

}

if (isset($_POST['name'])) {
  $name = htmlspecialchars(trim($_POST['name']));
  if (isset($_FILES['image'])) {
    $img_name = $_FILES['image']['name'];
    $tmp_name = $_FILES['image']['tmp_name'];
    $error = $_FILES['image']['error'];

    if ($error === 0) {
      $img_ex = pathinfo($img_name, PATHINFO_EXTENSION);
      $img_ex_lc = strtolower($img_ex);
      $img_new_name = $name.'.'.$img_ex_lc;

      $img_upload_path = '../uploads/newGame/'.$img_new_name;
      move_uploaded_file($tmp_name, $img_upload_path);
    }
  }

  if (isset($img_new_name)) {
    $sql = "INSERT INTO new_games (newGame_name, newGame_img) VALUES (?,?)";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$name, $img_new_name]);
  }
}

if (isset($_POST['paramDelete'])) {
  $sql = "DELETE FROM new_games WHERE newGame_id=?";
  $stmt = $conn->prepare($sql);
  $stmt->execute([$_POST['newGameID']]);
}
?>