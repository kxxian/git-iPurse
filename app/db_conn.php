<?php
  $serverName = "localhost";
  $userName = "root";
  $password = "";

  $databaseName = "ipurse";

  # creating database connection
  try {
    $conn = new PDO("mysql:host=$serverName;dbname=$databaseName", $userName, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    echo "Connection failed:". $e->getMessage();
  }
?>