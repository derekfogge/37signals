var day = new Date();

var weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday')

var today = weekday[day.getDay()];

document.getElementById('today').innerHTML=today;



$(document).ready(function () {

	var mouseIsOverHeadline= false;
	var productHeadline = null;
	var product = '.product';
	var mainHeadline = '#headline';

//Sets the true/false var when mouse is over headline
	$(headline).mouseover(function(){
	   mouseIsOverHeadline = true;
	}).mouseleave(function () {
	   mouseIsOverHeadline = false;
	});


//When ever you mouse over a product div this gets executed to hide the main headline and show the desired product headline

	$(product).mouseover(function () {
		$(mainHeadline).stop().hide();
		$(productHeadline).stop().hide();

		productHeadline = '#headline-' + $(this).attr('id');

		$(productHeadline).show();
		console.log('mouseover product');
	});


//This keeps the product headline visible when you mouseover

	$('.product-headline').mouseover(function () {
		$(mainHeadline).stop().hide();
		$(productHeadline).stop().show();
		console.log('mouseover headline');
	});


//These give you time to move the mouse over the product headline before it is set to hide and the main headline is shown again

	$(product).mouseleave(function (){
		$(productHeadline).stop().delay(500).hide(0);
		$(mainHeadline).delay(500).show(0);
		console.log('mouseleave product');
	});

	$('.product-headline').mouseleave(function (){
		$(productHeadline).stop().delay(500).hide(0);
		$(mainHeadline).delay(500).show(0);
		console.log('mouseleave headline');
	});

});












