"use strict";
var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    var image1 = $("image1");           
    var image2 = $("image2");           
    
    // preload images 
    var links = $("image_list").getElementsByTagName("a");
    var i, link, image;
    for (i = 0; i < links.length; i ++){
		link = links[i];
		image = new Image();
		image.src = link.href;
	}

    // attach mouseover and mouseout events for each image
    image1.onmouseover = function() {

		image1.src = links[0].getAttribute('href');
    };
    image1.onmouseout = function() {
    
		image1.src = links[2].getAttribute('href');
    };
    
    image2.onmouseover = function() {
       
		image2.src = links[1].getAttribute('href');
    };
    image2.onmouseout = function() {
   
		image2.src = links[3].getAttribute('href');
    };
};
