<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $contact = $_POST["contact"];
  $nsubject = $_POST["nsubject"];
  $message = $_POST["message"];


  $to = "pushpraj@nationalmarketingprojects.com";
  $subject = "New form submission";
  $body = "Email: $email";

  if (mail($to, $subject, $body)) {
    header("Location: thank-you.php");
    exit();
  } else {
    echo "There was a problem sending your message. Please try again later.";
  }
}
?>
