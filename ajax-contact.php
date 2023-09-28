<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once 'assets/recaptcha.php';
require_once 'assets/PHPMailer/src/Exception.php';
require_once 'assets/PHPMailer/src/PHPMailer.php';
require_once 'assets/PHPMailer/src/SMTP.php';

$status_arr = '';
$return_arr = array();

$m_name = strip_tags( $_POST[ 'name' ] );
$m_email = strip_tags( $_POST[ 'email' ] );
$m_contact = strip_tags( $_POST[ 'contact' ] );
$m_subject = strip_tags( $_POST[ 'subject' ] );
$m_query = strip_tags( $_POST[ 'query' ] );
$m_page = $_SERVER[ 'HTTP_REFERER' ];

if ( $resp->isSuccess() ) {


 if ( !empty( $m_email ) && !empty( $m_name ) && !empty( $m_contact ) && !empty( $m_subject ) && !empty( $m_query ) ) {

  if ( preg_match( '/^[\w-]+(\.[\w-]+)*@([0-9a-z][0-9a-z-]*[0-9a-z]\.)+([a-z]{2,4})$/i', $m_email ) ) {

   $mail = new PHPMailer();
   $mail->isSMTP();
   // $mail->Host = "";
   $mail->SMTPAuth = true;
   $mail->SMTPSecure = "ssl";
   // $mail->Port = 465;
   // $mail->Username = "";
   // $mail->Password = "";

   $mail->setFrom( '', 'NMP Query' );
   $mail->addAddress( 'negiumesh.un@gmail.com', 'Test' );
   $mail->AddCC('', '');
	  $mail->addReplyTo( $m_email, $m_name );

   $mail->isHTML( true );
   $mail->Subject = ' NMP - User Query Dated:' . date( "jS F Y" );

   $body = "Name: " . $m_name . "<br><br>" .
   "Email: " . $m_email . "<br><br>" .
   "Contact: " . $m_contact . "<br><br>" .
   "Subject: " . $m_subject . "<br><br>" .
   "Page: " . $m_page . "<br><br>" .
   "query: " . $m_query . "<br><br>";


   $mail->Body = $body;

   if ( $mail->send() ) {
    $status_arr = "Yes";
   } else {
    $status_arr = "No";
   }
  }
  $return_arr[ "value" ] = $status_arr;
 }
 }
  else {
  $return_arr[ "value" ] = "Error";
 }

 echo json_encode( $return_arr );