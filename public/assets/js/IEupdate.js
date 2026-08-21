if(/MSIE d|Trident.*rv:/.test(navigator.userAgent)) {
	window.location = 'microsoft-edge:' + window.location;
	setTimeout(function() {
	   window.open('', '_self', '').close();
	   // window.location = 'https://support.microsoft.com/en-us/topic/we-recommend-viewing-this-website-in-microsoft-edge-160fa918-d581-4932-9e4e-1075c4713595?ui=en-us&rs=en-us&ad=us';            
	}, 0);
 }