/* Script for Dress up Appa Page
add the dress up capabilities*/

/* Add the hover over the costume choice and have it change background color or something
	want it to have a shadow around it (can get code from regular large-container css)

	Add functionality to "Start Over" button*/
	

$(document).ready(function() {
	// $("#BW").hide();

	$(".costume-container").click(function() {

		/* When you click a dress-up item of class costume-img,
		want it to show*/

		// get the new 

		let large_id_name = '"#' + this.id + '_large"'

		// wnat the thing of the class "costume", not costue contianer

		$(large_id_name).show();
	});

	$("#start-over").click(function() {

		// want to take everything off 

		$(".costume").hide();
	});


});
