var newItemsBar = $('div[class*="js-new-items-bar-container"]');
var topBarHeight = $('div[class*="global-nav-inner"]').height();

if (newItemsBar) {
	// remember last read tweet
	var lastReadTweet = $('li[id|="stream-item-tweet"]:first');
		
	newItemsBar.click(function() {
		setTimeout(function() {
			// scroll to last read tweet
			var top = (lastReadTweet.offset().top - topBarHeight);
			$('html, body').animate({
                scrollTop: top
            }, 500);
			
			// get new last read tweet	
			lastReadTweet = $('li[id|="stream-item-tweet"]:first');
		}, 100);
	});
}

//TODO: Need to handle keyboard shortcut too!
