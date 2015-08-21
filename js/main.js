(function(){

	var public_spreadsheet_url;

	var srclink = "/js/notable.app.js"

	var highlight_template = $('#embed-highlight').html().trim();
	var highlight_TF = _.template(highlight_template);
	var embed_html = $('#embed-box-each').html().trim();
	var embed_TF = _.template(embed_html);

	$('#submit').on('click',function(){
		$('#embed-html-later').html(genTop)
		$('#sample-space').addClass('visible')
		public_spreadsheet_url = $('#spreadsheet').val();
  		init();
	});

	function guidGenerator() {
	    var S4 = function() {
	       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	    };
	    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
	};

	function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: generateData,
                     simpleSheet: true } )
	}

	function generateData(data, tabletop) {
		$('#topcode').append(genTop())
	    genStuff(data);
	  }
	
	
	 function genTop(){
	 	var code = "<div class = 'notable_embed_key'><textarea readonly><script id = 'notable-app-source-box' src='"+srclink+"?sheetURL="+public_spreadsheet_url+"></script></textarea></div>"
	  	return code;
	  }

	function genStuff(data){
	  	data.forEach(function(obj){
	  		$('#sample').append(embed_TF(obj))
	  		$('#sample .notable_embed_box[notable-data-which="'+obj.slug+'"] .notable_highlight_key').html(highlight_TF(obj));
	  		$('#sample .notable_embed_box[notable-data-which="'+obj.slug+'"] .notable_embed_key textarea').html(highlight_TF(obj))
	  	})
	  }

}).call(this);