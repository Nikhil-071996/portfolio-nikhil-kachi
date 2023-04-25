<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once 'PHPMailer/src/Exception.php';
require_once 'PHPMailer/src/PHPMailer.php';
require_once 'PHPMailer/src/SMTP.php';


// $alert = ' ';
if(isset($_POST['submit'])){
    $name = htmlentities($_POST['name']);
    $email = htmlentities($_POST['email']);
    $subject = htmlentities($_POST['subject']);
    $message = htmlentities($_POST['message']);
    
    $mail = new PHPMailer(true);

        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'nikhilkachi68@gmail.com';
        $mail->Password = 'isouycmbgobhcspt';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->setFrom($email , $name);
        $mail->addAddress('nikhilkachi68@gmail.com');

        $mail->isHTML(true);
        $mail->Subject = 'Message Received from Contact Form:'. $name;
        $mail->Body = "Name : $name <br> Email: $email <br> Subject: $subject <br> Message: $message";
        $mail->send();

        header("Location: ./response.php");

}

?>