var day = new Date();

var weekday = new Array(7);
	weekday[0] = 'Sunday';
	weekday[1] = 'Monday';
	weekday[2] = 'Tuesday';
	weekday[3] = 'Wednesday';
	weekday[4] = 'Thursday';
	weekday[5] = 'Friday';
	weekday[6] = 'Saturday';

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

	$('.product-headline').mouseover(function () {
		$(mainHeadline).stop().hide();
		$(productHeadline).stop().show();
		console.log('mouseover headline');
	});

	$(product).mouseleave(function (){
		$(productHeadline).stop().delay(1000).hide(0);
		$(mainHeadline).delay(1000).show(0);
		console.log('mouseleave product');
	});

	$('.product-headline').mouseleave(function (){
		$(productHeadline).stop().delay(1000).hide(0);
		$(mainHeadline).delay(1000).show(0);
		console.log('mouseleave headline');
	});

});












