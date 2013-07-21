$(window).load(function(){

	var frame 	= $('.frame'),
		slider	= $('.slider'),
		image	= $('.slider li img'),
		prev	= $('.prev'),
		next	= $('.next');

		console.log(frame.width());
		console.log(slider.width());
		// console.log(image.length);

	var scrollWidth = image.width(),
		numImages	= image.length;

	console.log(scrollWidth);

	var i = 0;

		prev.click(function(){

			++i;
			console.log(i);

			if (i < numImages) {

				slider.animate({
					'margin-left':'-='+scrollWidth
				}, 'slow');
				console.log(slider.offset());

			}else if(i == numImages) {

				slider.animate({
					'margin-left':0
				}, 'slow');

				i = 0;
				return i;

			}
		});


		next.click(function(){

			--i;
			console.log(i);

			if (i < numImages) {

				slider.animate({
					'margin-left':'+='+scrollWidth
				}, 'slow');
				console.log(slider.offset());

			}else if(i == -1) {

				slider.animate({
					'margin-left':0
				}, 'slow');
				
				i = 0;
				return i;

			}
		});


});//this is the end of ready!
