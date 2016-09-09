(function(){
	// dojoQuery object constructor
	function dojoQuery(selector){
		if (!(this instanceof dojoQuery)) {
   // the constructor was called without "new".
		   return new dojoQuery(selector);
 		}

		console.log("selector is: ", selector);		
		this.DOMobject = document.querySelector(selector);
		console.log("DOMobject is:", this.DOMobject);

		this.hover = function(fnOver, fnOut){
			this.DOMobject.addEventListener("mouseenter", fnOver);
			this.DOMobject.addEventListener("mouseleave", fnOut);
		}

		this.click = function(fnClick){
			this.DOMobject.addEventListener("click", fnClick);
		}
		return this;
	}

// hopefully exposing the dojoQuery object...
	document = window.document;
	window.dojoQuery = window.$Dojo = dojoQuery;


})();