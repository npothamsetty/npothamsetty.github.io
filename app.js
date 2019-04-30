
// particlesJS.load('particles-js', 'assets/particles.json', function() {
//   console.log('callback - particles.js config loaded');

// });


$(document).ready(function() {
	// $("#BW").hide();

	$("#BW").mouseover(function() {

		$("#BW").hide();
		// $("#color").attr('src', 'assets/hot-air-balloon-color.png');
		$("#color").show();
	});

	$("#color").mouseout(function() {

		$("#color").hide();
		// $("#color").attr('src', 'assets/hot-air-balloon-color.png');
		$("#BW").show();
	});




});



