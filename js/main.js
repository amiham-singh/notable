(function(){
	var status = {}

	$('#submit').on('click',function(){
		status.headline = $('#heading').val();
		status.media = $('#media').val();
		status.link = $('#link').val();
		status.desc = $('#desc').val();
		status.text = $('#highlight').val();
		console.log(status)
	})
}).call(this);