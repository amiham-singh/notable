(function(){

	var public_spreadsheet_url;

	var embed_html = $('#embed-highlight').html().trim();
	var embed_TF = _.template(embed_html);

	$('#submit').on('click',function(){
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
	    genStuff(data);
	  }

	  function genStuff(data){
	  	data.forEach(function(obj){
	  		$('#sample').append(embed_TF(obj))
	  	})
	  }

}).call(this);