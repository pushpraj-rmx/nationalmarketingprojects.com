<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $contact = $_POST["contact"];
  $nsubject = $_POST["nsubject"];
  $message = $_POST["message"];


  $to = "info@nationalmarketingprojects.com";
  $subject = "New form submission";
  $body = "Name: $name\nEmail: $email\ncontact: $contact\nSubject: $nsubject\nMessage: $message";

  if (mail($to, $subject, $body)) {
    header("Location: thank-you.php");
    exit();
  } else {
    echo "There was a problem sending your message. Please try again later.";
  }
}
?>
