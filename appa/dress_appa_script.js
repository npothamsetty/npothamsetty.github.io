/* Script for Dress up Appa Page
add the dress up capabilities*/

/* Add the hover over the costume choice and have it change background color or something
	want it to have a shadow around it (can get code from regular large-container css)

	Fix "Start Over" button*/
	

$(document).ready(function() {
// jQuery and JavaScript code goes in here!



// $("name of selector").hover(function() {
	// code that should execute
	// when the button is hovered over 
	// $("#image").fadeIn()


	$(".costume-container").click(function()) {

		/* When you click a dress-up item of class costume-img,
		want it to show*/

		// set the name of the id = the object

		let id_name = $(this).id;

		// add the name of the object to the thing "large"

		let large_id_name = id_name + "_large";

		// change the CSS to "show" for the large id name 

		document.getElementByID(large_id_name).css("display", "show");

	}

});
