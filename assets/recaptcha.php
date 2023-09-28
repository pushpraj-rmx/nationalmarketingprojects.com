<?php

require_once 'recaptcha/src/autoload.php';
 
define("RECAPTCHA_V3_SECRET_KEY", '6LcRlDghAAAAAE_lj7ZP4435krNkEf-jxEbXf2So');

$token = $_POST['token'];
$action = $_POST['action'];

// use the reCAPTCHA PHP client library for validation
$recaptcha = new \ReCaptcha\ReCaptcha(RECAPTCHA_V3_SECRET_KEY);

$resp = $recaptcha->setExpectedAction($action)
                  ->setScoreThreshold(0.7)
                  ->verify($token, $_SERVER['REMOTE_ADDR']);
?>