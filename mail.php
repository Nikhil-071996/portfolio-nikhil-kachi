<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['Message'];

$mailheader = "From:".$name."<".$email.">/r/n"

$recipient = "nikhilkachi68@gmail.com"

mail($recipient, $subject , $message , $mailheader)
or die('Error!')


?>