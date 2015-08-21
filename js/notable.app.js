(function(){

	var public_spreadsheet_url
	var requestURL = document.getElementById("notable-app-source-box").getAttribute("src");
	public_spreadsheet_url = requestURL.split('?sheetURL=')[1]

	var notabledata;

	function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: getData,
                     simpleSheet: true } )
	 }

	  function getData(data, tabletop) {
	    genStuff(data);
	  }

	  function genStuff(data){
	  	notabledata = data;
	  }

	var embed_html = "<div class = 'notable_block' notable-data-which = '<%= slug %>'><% if (heading){ %><h1><%= heading %></h1><%}%><% if (media){ %><img class = 'notable_blockimg' src='<%= media %>'><%}%><% if (desc){ %><p><%= desc %></p><%}%></div>";
	var embed_TF = _.template(embed_html);

	var tooltip_height,tooltip_width, x, buffery = 10,bufferx = 10;

	$(document).on('mouseover','.notable_highlight', function() { 
		x = $(this).attr('notable-data-which');
		console.log(x)
		$('#notable-tooltip').attr('data-active-code',x)
		bakenotableTooltip();
	});

	function bakenotableTooltip(){
		var id = $('#notable-tooltip').attr('data-active-code');
		var y = (_.findWhere(notabledata,{'slug':id}))
		$('#notable-tooltip').html(embed_TF(y));
		$('#notable-tooltip').addClass('active');
		tooltip_height = $('#notable-tooltip').height();
		tooltip_width = $('#notable-tooltip').width();
	}

	$(document).on('mousemove','.notable_highlight', function(e) {
		var pos = $(this).position()
		var highlight_height = $(this).height()
		var highlight_width = $(this).width()

		if ((pos.left+(highlight_width/2)-(tooltip_width/2))<0){
			$('#notable-tooltip').css({
		        top: pos.top+(highlight_height/2)-(tooltip_height/2) ,
		        left: pos.left+highlight_width+bufferx ,
		        position: 'absolute'
		    });
		} else {
		$('#notable-tooltip').css({
		        top: pos.top+highlight_height+buffery,
		        left: pos.left+(highlight_width/2)-(tooltip_width/2),
		        position: 'absolute'
		    });
		}
	});

	$(document).on('mouseout','.notable_highlight', function() { 
		$('#notable-tooltip').removeClass('active');
	});

}).call(this);