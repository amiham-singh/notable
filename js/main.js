(function(){
	var status = {}

	var embed_html = $('#embed-tooltip').html();
	var embed_TF = _.template(embed_html);

	$('#submit').on('click',function(){
		status.heading = $('#heading').val();
		status.media = $('#media').val();
		status.link = $('#link').val();
		status.desc = $('#desc').val().trim();
		status.highlight = $('#highlight').val();
		status.generated_id = guidGenerator();
		$('#sample').html(embed_TF(status));
	});

	function guidGenerator() {
	    var S4 = function() {
	       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	    };
	    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
	};

}).call(this);