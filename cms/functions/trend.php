<?php
  require('../../app/db_conn.php');
  
  $strOut = '';

  if (isset($_POST['param'])) {
    $sql = "SELECT * FROM trend";
    $stmt = $conn->query($sql);

    foreach ($stmt as $rows) {
      $strOut.= '<tr>';
      $strOut.= '<td>'.$rows['trend_title'].'</td>';
      $strOut.= '<td>'.$rows['trend_img'].'</td>';
      $picture = '<img src="uploads/trend/'.$rows['trend_img'].'" class="w-100" alt="slider_img">';
      $strOut.= '<td width="200vh">'.$picture.'</td>';
      $strOut.= '<td style="width: 11%">
                  <button class="btn btn-warning" id="btnTrendUpd" onclick=loadRecord('.$rows['trend_id'].') title="EDIT"><i class="fas fa-edit"></i></button>
                  <button class="btn btn-danger" onclick=deleteRecord('.$rows['trend_id'].') title="DELETE"><i class="fas fa-trash"></i></button>
                </td>';
      $strOut.= '</tr>';
    }
    
    echo $strOut;

  }
  
  if (isset($_POST['trend'])) {
    $trend = htmlspecialchars(trim($_POST['trend']));
    if (isset($_FILES['image'])) {
      $img_name = $_FILES['image']['name'];
      $tmp_name = $_FILES['image']['tmp_name'];
      $error = $_FILES['image']['error'];

      if ($error === 0) {
        $img_ex = pathinfo($img_name, PATHINFO_EXTENSION);
        $img_ex_lc = strtolower($img_ex);
        $new_img_name = $trend.'.'.$img_ex_lc;

        $img_upload_path = '../uploads/trend/'.$new_img_name;
        move_uploaded_file($tmp_name, $img_upload_path);
      }
    }

    if (isset($new_img_name)) {
        $sql = "INSERT INTO trend (trend_title, trend_img) VALUES (?,?)";
        $stmt = $conn->prepare($sql);
        $stmt->execute([$trend, $new_img_name]);
      } 
  }
  

  if (isset($_POST['paramEdit'])) {
    $sql = "SELECT * FROM trend WHERE trend_id=?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$_POST['TrendID']]);
    $row = $stmt->fetch();

    echo json_encode($row);
  }

  if (isset($_POST['paramUpdate'])) {
    $sql = "UPDATE trend SET trend_title=? WHERE trend_id=?";
    $data = explode("^", $_POST['Data']);
    $stmt = $conn->prepare($sql);
    $stmt->execute($data);
  }

  if (isset($_POST['paramDelete'])) {
    $sql = "DELETE FROM trend WHERE trend_id=?";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$_POST['TrendID']]);
  }
?>