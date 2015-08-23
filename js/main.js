(function(){
	var notabledata;

	var public_spreadsheet_url;

	var srclink = "/js/notable.app.js"

	var highlight_template = $('#embed-highlight').html().trim();
	var highlight_TF = _.template(highlight_template);
	var embed_html = $('#embed-box-each').html().trim();
	var embed_TF = _.template(embed_html);

	$('#submit').on('click',function(){
		public_spreadsheet_url = $('#spreadsheet').val();
		public_spreadsheet_id = public_spreadsheet_url.split('spreadsheets/d/')[1].split('/pubhtml')[0]
		$('#embed-html-later').html("<script id = 'notable-app-source-box' src='"+srclink+"' sheetid='"+public_spreadsheet_id+"'></script>")
		$('#sample-space').addClass('visible')
  		init();
	});

	function init() {
    Tabletop.init( { 
    				key: public_spreadsheet_url,
                     callback: generateData,
                     simpleSheet: true } )
	}

	function generateData(data, tabletop) {
		$('#topcode').append(genTop())
	    genStuff(data);
	   	notabledata = data;
	   	notableapp();
	  }
	
	
	 function genTop(){
	 	var code = "<div class = 'notable_embed_key'><textarea readonly><script id = 'notable-app-source-box' src='"+srclink+"' sheetid='"+public_spreadsheet_id+"'></script></textarea></div>"
	  	return code;
	  }

	function genStuff(data){
	  	data.forEach(function(obj){
	  		$('#sample').append(embed_TF(obj))
	  		$('#sample .notable_embed_box[notable-data-which="'+obj.slug+'"] .notable_highlight_key').html(highlight_TF(obj));
	  		$('#sample .notable_embed_box[notable-data-which="'+obj.slug+'"] .notable_embed_key textarea').html(highlight_TF(obj))
	  	})
	  }

	function notableapp(){

		var embed_html = "<div class = 'notable_block' notable-data-which = '<%= slug %>'><% if (heading){ %><h1><%= heading %></h1><%}%><% if (media){ %><img class = 'notable_blockimg' src='<%= media %>'><%}%><% if (desc){ %><p><%= desc %></p><%}%></div>";
		var embed_TF = _.template(embed_html);

		var tooltip_height,tooltip_width, x, buffery = 10,bufferx = 10;

		$(document).on('mouseover','.notable_highlight', function() { 
			x = $(this).attr('notable-data-which');
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
	}

}).call(this);