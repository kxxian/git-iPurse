<?php
require('../../app/db_conn.php');

$strOut = '';

if (isset($_POST['param'])) {
  $sql = "SELECT * FROM members";
  $stmt = $conn->query($sql);

  foreach ($stmt as $rows) {
    $strOut.= '<tr>';
    $strOut.= '<td>'.$rows['member_name'].'</td>';
    $strOut.= '<td>'.$rows['member_title'].'</td>';
    $strOut.= '<td>'.$rows['member_desc'].'</td>';
    $strOut.= '<td>'.$rows['member_liLink'].'</td>';
    $strOut.= '<td>'.$rows['member_gLink'].'</td>';
    $strOut.= '<td>'.$rows['member_twtLink'].'</td>';
    $strOut.= '<td>'.$rows['member_fbLink'].'</td>';
    $strOut.= '<td>'.$rows['member_img'].'</td>';
    $picture = '<img src="uploads/members/'.$rows['member_img'].'" class="w-100 img-mem" alt="member_img">';
    $strOut.= '<td>'.$picture.'</td>';
    $strOut.= '<td style="width: 11%">
                <button class="btn btn-warning" title="EDIT"><i class="fas fa-edit"></i></button>
                <button class="btn btn-danger" title="DELETE"><i class="fas fa-trash"></i></button>
              </td>';
    $strOut.= '</tr>';
  }

  echo $strOut;
}

?>
