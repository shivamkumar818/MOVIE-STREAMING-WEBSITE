
<?php

$firstname = $_POST['firstname'];
$Email=$_POST['Email'];
$Password=$_POST['Password'];

$conn= new mysqli('localhost', 'root' ,'','userinfo');
if($conn->connect_error){
    die('connection failed :' .$conn->connect_error);
}else{
    $stmt=$conn->prepare("insert into registration(firstname, Email, Password) values(?,?,?) ");
    $stmt->bind_param("sss",$firstname,$Email,$Password);
    $stmt->execute();
    echo "registration successfull...";
    $stmt->close();
    $conn->close();

}

?>
