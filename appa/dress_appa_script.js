$(document).ready(function() {
	

	$(".costume-container").click(function() {

		/* When you click a dress-up item of class costume-img,
		want it to show*/

		// let id_name = document.querySelector(this).id

		let id_name = $(this).id;

		let large_id_name = '#' + id_name + '_large'; 

		document.querySelector(large_id_name).show();

	});

	$("#start-over").click(function() {

		// want to take everything off 

		$(".costume").hide();
	});


});
