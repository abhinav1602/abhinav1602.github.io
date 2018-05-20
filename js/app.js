$(document).ready(function(){

	$('.collapsible').collapsible();	
	$(".button-collapse").sideNav();
})

$(document).ready(function(){
	var $username = "abhinav2506293";
	var $hostname = "gmail.com";
	combine = '<p>' + $username +"@"+ $hostname + '</p>';
	$('.email-id').html(combine);
	
	// add push-l2 to every even jobs class div
	$( ".jobs:odd" ).addClass('push-l2');


})