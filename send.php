<?php
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
$service = $_REQUEST['service'];
$amount = $_REQUEST['amount'];
$design = $_REQUEST['design'];
$comment = $_REQUEST['comment'];
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html;charset=utf-8 \r\n";

$message = "<p>Новый заказ</p>
<p><strong>Имя:</strong> $name</p>
<p><strong>Email:</strong> $email</p>
<p><strong>Телефон:</strong> $phone</p>
<p><strong>Услуга:</strong> $service</p>
<p><strong>Кол-во:</strong> $amount</p>
<p><strong>Дизайн нужен:</strong> $design</p>
<p><strong>Комментарий:</strong> $comment</p>";

mail( "dimongaga@gmail.com", "Новый заказ",
    $message, $headers );
  header( "Location: http://krds.zzz.com.ua/visitka/thank.html" );
?>