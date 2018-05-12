"use strict";
var $ = function(id) { return document.getElementById(id); };

// the event handler for the click event of each a element
var toggle = function() {
    var a = this;                    // clicked a tag 
	var h2 = a.parentElement;
    var divs = h2.nextElementSibling;  // h2 tag's sibling div tag
	
    // toggle plus and minus image in h2 elements by adding or removing a class
    if (a.hasAttribute("class")) { 
        //a.removeAttribute("class");	
		  a.className = '';
		//h2.removeAttribute("class");
		  h2.className = '';
    } else { 
		//a.setAttribute("class", "minus"); 
		 a.className = 'minus';
        //h2.setAttribute("class", "minus"); 
		 h2.className = 'minus';
    }

    // toggle div visibility by adding or removing a class
    if (divs.hasAttribute("class")) { 
        //divs.removeAttribute("class");
		divs.className = '';
    } else { 
        //divs.setAttribute("class", "open"); 
		divs.className = 'open';
    }
    
};

window.onload = function() {
    // get the h2 tags
    var faqs = $("faqs");
    var aElements = faqs.getElementsByTagName("a");
    
    // attach event handler for each h2 tag	    
    for (var i = 0; i < aElements.length; i++ ) {
    	aElements[i].onclick = toggle;
    }
    // set focus on first h2 tag's <a> tag
    aElements[0].firstChild.focus();       
};
