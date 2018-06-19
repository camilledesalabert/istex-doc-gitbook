var header, hauteur;
window.onload = function(){
	// Call allow to have the transition for 
	// the first consult	

	header = document.getElementById("istex_web_header");
	hauteur = header.offsetHeight;

	callback();

	var targetNode = document.body;

	// Options of the observer
	var config = { attributes: true, childList: true };
	
	var observer = new MutationObserver(callback);
	
	observer.observe(targetNode, config);
	
};

function callback(){
	
	var book = document.getElementsByClassName('body-inner');
	document.getElementById("istex_web_header").style.height = hauteur + "px";
	book[0].onscroll = headerTransform;
	function headerTransform() {
	    if (book[0].scrollTop > 200) {
		document.getElementById("istex_web_header").style.height = 0 + "px";
	    } else {
		document.getElementById("istex_web_header").style.height = hauteur + "px";
	    }
	}
}