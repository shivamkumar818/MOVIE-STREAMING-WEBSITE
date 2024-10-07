<?php
    session_start();
    $con = mysqli_connect("localhost", "root", "", "userinfo");

    // Sanitize user input for email
    $usertrim = trim($_POST['Email']);
    $userstrip = stripcslashes($usertrim);
    $finaluser = htmlspecialchars($userstrip);

    // Sanitize user input for password
    $passtrim = trim($_POST['Password']);
    $passstrip = stripcslashes($passtrim);
    $finalpass = htmlspecialchars($passstrip);

    // Using prepared statement to prevent SQL injection
    $sql = "SELECT * FROM registration WHERE Email = ? AND Password = ?";
    $stmt = mysqli_prepare($con, $sql);
    mysqli_stmt_bind_param($stmt, "ss", $finaluser, $finalpass);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if(mysqli_num_rows($result) >= 1) {
        $_SESSION["myuser"] = $finaluser;
        header("Location: newpge.html");
    } else {
        $_SESSION["error"] = "You are not a valid user";
        header("Location: error.html");
    }

    mysqli_close($con);
?>
