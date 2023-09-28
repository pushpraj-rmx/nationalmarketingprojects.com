$(document).ready(function () {

$("#formail").submit(function (e) {

e.preventDefault();

var valid = '';
var isr = ' is required.';
var name = $("#name").val();
var email = $("#email").val();
var contact = $("#contact").val();
var subject = $("#subject").val();
var query = $("#query").val();

if (name.length < 1) {
valid += '<br />Name' + isr;
}
if (!email.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
valid += '<br />A valid email' + isr;
}
if (!contact.match(/^[0-9\-()+ ]+$/)) {
valid += '<br />A valid contact number' + isr;
} 
if (query.length < 1) {
valid += '<br /> query' + isr;
}
if (valid != "") {
$("#response").fadeIn("slow");
$("#response").html("Please correct the following error!" + valid);

} else {

grecaptcha.ready(function () {

grecaptcha.execute('6LcRlDghAAAAAKmZqCq_HNHYPUCxlfnaJOeyQ0E1', {
action: 'submit'
}).then(function (token) {
$('#formail').prepend('<input type="hidden" name="token" value="' + token + '">');
$('#formail').prepend('<input type="hidden" name="action" value="submit">');

dataString = $("#formail").serialize();

$.ajax({
type: "POST",
url: "https://nationalmarketingprojects.com/ajax-contact.php",
data: dataString,
dataType: "json",
success: function (data) {

if (data.value == "Error") {
$("#response").css("display", "block");
$("#response").html("<span>Error! Fill the Captcha</span>");
} else if (data.value == "Yes") {
$("#response").fadeIn("slow");
$("#response").css("display", "block");
$("#response").html("<span>Thank you for dropping in your query. We will get back to you soon!</span>");
setTimeout('$("#response").fadeOut("slow")', 10000);
$("#name").val("");
$("#email").val("");
$("#contact").val("");
$("#subject").val("");
$("#query").val("");
} else {
$("#response").html("<span>Error! All fields are mandatory.</span>");
}

}
});
});
});
}
});
});