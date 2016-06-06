<?php  
	
	// THIS CODE USED TO BE INTEGRATED WITH SINGLE.PHP

	print '<link href="http://fonts.googleapis.com/css?family=Crimson+Text:400,700,400italic" rel="stylesheet" type="text/css"><link rel="stylesheet" type="text/css" href="http://edsource.org/wp-content/iframe/where-they-stand/css/main.css">';

	print '<div class="wts-contain">';

	print '<section id="wts-all"><div class="wts-intro">';


		if(have_posts()) { while(have_posts()) { the_post();
			
			print article_byline($post, $topics);

			the_content();
		}}

	print '</div><a name="top"></a>';
	print '<div class="wts-box" role="against"><h3>Against</h3></div><div class="wts-box" role="middle"><h3>Unclear</h3></div><div class="wts-box" role="support"><h3>Support</h3></div>';
	print '</section>';
	print '<section id="wts-deet"></section></div>';
	print '<script type="text/javascript" src="http://edsource.org/wp-content/iframe/where-they-stand/js/main.js"></script>';

?>

