var wts = {
	template: {
		entry: '<div class="wts-entry"></div>',
		meta:'<div class="wts-meta"></div>',
		content: '<div class="wts-content"></div>'
	},
	elements: {
		image:'<div class="wts-image"><img src=""></div>',
		name:'<div class="wts-name"><h2></h2></div>',
		party:'<div class="wts-party"><h3></h3></div>',
		position:'<div class="wts-position"></div>',
		flipflop:'<div class="wts-flip"><img src="assets/flip-white.png">Flipflopped</div>',
		social:'<div class="wts-social"></div>',
		twiter:'<a class="twitter-share" href=""><i class="fa fa-twitter"></i></a>',
		quote:'<div class="wts-quote"><i class="fa fa-quote-left"></i><p></p><p></p></div>',
		content:'<div class="wts-text"></div>'
	},
	processData:function(){
		jQuery.getJSON('data/data.json', function(d){
			wts.populateTopArea(d);
		});
	},
	populateTopArea: function(d){
		for (var i=1; i < d.length ; i++){
			var topimage = '<div data="'+i+'"><img src=""><img class="flip" src="assets/flip.png"></div>';
			var topflipimage = '<div data="'+i+'"><img src=""></div>';
			var position = d[i][3], box;

			/* GET POSITION
			=================================*/
			if (position === 'no'){box = 'against';}
			else if (position === 'yes'){box = 'support';}
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
		}
	},
	executeBlog:function(){
		this.processData();
	}		
}


wts.executeBlog();