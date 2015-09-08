var wts = {
	processData:function(){
		jQuery.getJSON('data/data.json', function(d){
			wts.populateTopArea(d);
		});
	},
	populateTopArea: function(d){
		for (var i=1; i < d.length ; i++){
			var topimage = '<div data="'+i+'" class="wts-button"><img src=""><img class="flip" src="assets/flip.png"></div>';
			var topflipimage = '<div data="'+i+'" class="wts-button"><img src=""></div>';
			var position = d[i][3], box;

			/* GET POSITION
			=================================*/
			if (position === 'Oppose'){box = 'against';}
			else if (position === 'Support'){box = 'support';}
			else {box = 'middle';}
			console.log(d[i][4])

			/* POPULATE IMAGES
			=================================*/
			if (d[i][4] !== 'yes'){
				jQuery('.wts-box[role="'+box+'"]').append(topflipimage);
				jQuery('.wts-box[role="'+box+'"] div[data="'+i+'"] img:eq(0)').attr('src', 'assets/' + d[i][2] + '.png');
			}
			else {
				jQuery('.wts-box[role="'+box+'"]').append(topimage);
				jQuery('.wts-box[role="'+box+'"] div[data="'+i+'"] img:eq(0)').attr('src', 'assets/' + d[i][2] + '.png');
			}

			jQuery('.wts-box[role="'+box+'"] div[data="'+i+'"]').on('click', function(){
				var loc = jQuery(this).attr('data');

				jQuery('html, body').animate({
					scrollTop: $('.wts-entry[data="'+loc+'"]').offset().top
				}, 500);
			})
		}

		this.populateProfiles(d);
	},
	populateProfiles: function(d){
		for (var i=1; i < d.length ; i++){
			var elements = {
				entry:'<div data="'+i+'" class="wts-entry"></div>',
				image:'<div class="wts-image"><img src="assets/' + d[i][2] + '.png"></div>',
				name:'<div class="wts-name"><h2>' + d[i][0] + '</h2></div>',
				party:'<div class="wts-party"><h3>' + d[i][1] + '</h3></div>',
				position:'<div class="wts-position">' + d[i][3] + '</div>',
				flipflop:'<div class="wts-flip"><img src="assets/flip-white.png">Flipflopped</div>',
				social:'<div class="wts-social"></div>',
				twiter:'<a class="twitter-share" href=""><i class="fa fa-twitter"></i></a>',
				quote:'<div class="wts-quote"><i class="fa fa-quote-left"></i><p>' + d[i][5] + '"</p><p>- ' + d[i][6] + '</p></div>',
				text:'<div class="wts-text"></div>',
				meta:'<div class="wts-meta"></div>',
				content: '<div class="wts-content"></div>'
			}

			/* APPEND LIKE CRAY CRAY
			=================================*/
			jQuery('#wts-deet').append(elements.entry);
			jQuery('#wts-deet').append('<hr />');
			jQuery('#wts-deet .wts-entry[data="'+i+'"]').append(elements.meta);
			jQuery('#wts-deet .wts-entry[data="'+i+'"]').append(elements.content);
			jQuery('#wts-deet .wts-entry[data="'+i+'"] .wts-meta').append(elements.image);
			jQuery('#wts-deet .wts-entry[data="'+i+'"] .wts-meta').append(elements.name);
			jQuery('#wts-deet .wts-entry[data="'+i+'"] .wts-meta').append(elements.party);
			jQuery('#wts-deet .wts-entry[data="'+i+'"] .wts-meta').append(elements.position);

			if (d[i][3] === 'Oppose'){jQuery('.wts-entry[data="'+i+'"] .wts-position').addClass('against');}
			else if (d[i][3] === 'Support'){jQuery('.wts-entry[data="'+i+'"] .wts-position').addClass('support');}
			else {jQuery('.wts-entry[data="'+i+'"] .wts-position').addClass('neutral');} 

			if (d[i][4] === 'yes'){
				jQuery('#wts-deet .wts-entry[data="'+i+'"] .wts-meta').append(elements.flipflop);
			}

			jQuery('#wts-deet .wts-entry[data="'+i+'"] .wts-content').append(elements.quote);
			jQuery('#wts-deet .wts-entry[data="'+i+'"] .wts-content').append(elements.text);

			jQuery('.wts-entry[data="'+i+'"]').append('<div class="wts-top"><a href="#top"><i class="fa fa-arrow-circle-up"></i></a></div>');

		
		}
	},
	executeBlog:function(loc){
		this.processData(loc);
	}		
}


wts.executeBlog();