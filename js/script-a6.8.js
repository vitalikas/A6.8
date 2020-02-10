$(document).ready(function() {

	let progress = 0;
	function result() {
		$("#progressBarResult").text(progress + '%');
	}

	$("#button1").on('click', function() {
		progress++;
		if (progress > 100) {progress = 100};
		$("#my-progress-bar").width(progress + '%');
		$("#sum").text(progress + '%');
		result();
	});

	$("#button2").on('click', function() {
		progress = progress + 3;
		if (progress > 100) {progress = 100};
		$("#my-progress-bar").width(progress + '%');
		$("#sum").text(progress + '%');
		result();
	});

	$("#button3").on('click', function() {
		progress = progress + 7;
		if (progress > 100) {progress = 100};
		$("#my-progress-bar").width(progress + '%');
		$("#sum").text(progress + '%');
		result();
	});

	
});