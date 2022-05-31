var $ = jQuery;
$(function(){	
	$('.menu').parent().prepend('<div class="hamburger"><span>☰</span> MENU</div>');
	$(".hamburger").click(function() {
		$(this).next('.menu').toggleClass("show");
	});
});