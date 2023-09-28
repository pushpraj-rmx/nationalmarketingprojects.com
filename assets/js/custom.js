// scroll
$("document").ready(function () {

	$(".scroll").click(function (event) {
		event.preventDefault();
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#" + trgt).offset();
		var target_top = target_offset.top - 50;
		$('html, body').animate({
			scrollTop: target_top
		}, 500);
	});
var myDropdown = document.getElementsByClassName('dropdown-toggle')
for (i=0; i<myDropdown.length; i++) {
    myDropdown[i].addEventListener('click', function (e) {
        var el = this.nextElementSibling;
        el.style.display = el.style.display == 'block' ? 'none' : 'block';
    });
}
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            
            $('.filter').show('1000');
        }
        else
        {
          
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
$('.dropdown').hover(function(){ 
  $('.dropdown-toggle', this).trigger('click'); 
});

	var toTop = $("<a href='javascript:void(0)' class='gotoTop'>&uarr;</a>").appendTo("body");
	$(window).scroll(function () {
		if ($(window).scrollTop() > $(window).height()) {
			toTop.fadeIn("fast");s
		} else {
			toTop.fadeOut("fast");
		}
	});
	toTop.click(function (e) {
		e.preventDefault();
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
	});

});
 window.onscroll = function() {scrollFunction() };
 function scrollFunction() {
 	if (document.body.scrollTop > 647 || document.documentElement.scrollTop > 647) {
 		$('.nav_btn_free').css({'visibility':'visible','color':'#000' , });
 		$('.nav_top-main').css({'box-shadow':'0 0  10px #ccc', 'z-index':'999'    });
 	} else {
 		$('.nav_btn_free').css({'visibility':'hidden','color':'#000' , });
 		$('.nav_top-main').css({'box-shadow':'0 0  0 #ccc', 'z-index':'-1'   });
 	}};
 	var a = 0;

 	$(window).scroll(function() {
 		var oTop = $('#counter').offset().top - window.innerHeight;
 		if (a == 0 && $(window).scrollTop() > oTop) {
 			$('.counter-value').each(function() {
 				var $this = $(this),
 				countTo = $this.attr('data-count');
 				$({
 					countNum: $this.text()
 				}).animate({
 					countNum: countTo
 				},
 				{
 					duration: 3000,
 					easing: 'swing',
 					step: function() {
 						$this.text(Math.floor(this.countNum));
 					},
 					complete: function() {
 						$this.text(this.countNum);
//alert('finished');
}
});
 			});
 			a = 1;
 		}
 	});
document.addEventListener("DOMContentLoaded", function () {
	var div, n, v = document.getElementsByClassName("youtube-player");
	for (n = 0; n < v.length; n++) {
		div = document.createElement("div");
		div.setAttribute("data-id", v[n].dataset.id);
		div.setAttribute("data-list", v[n].dataset.list);
		div.innerHTML = Thumb(v[n].dataset.id);
		div.onclick = Iframe;
		v[n].appendChild(div);
	}
});

function Thumb(id) {
	var thumb = '<img src="https://i.ytimg.com/vi/ID/maxresdefault.jpg" class="lazyload">',
	play = '<div class="play"></div>';
	return thumb.replace("ID", id) + play;
}

function Iframe() {
	var iframe = document.createElement("iframe");
	if (this.dataset.list == "undefined") {
		var embed = "https://www.youtube.com/embed/ID?autoplay=1&amp;rel=0";
		iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
	} else {
		var embed = "https://www.youtube.com/embed/?listType=playlist&amp;list=LIST&amp;autoplay=1&amp;rel=0";
		iframe.setAttribute("src", embed.replace("LIST", this.dataset.list));
	}
	iframe.setAttribute("frameborder", "0");
	iframe.setAttribute("allowfullscreen", "1");
	this.parentNode.replaceChild(iframe, this);
}
$('#owl-clients').owlCarousel({
loop:true,
margin:20,
nav:false,
dots:false,
autoplay:true,
autoplayTimeout:3000,
autoplayHoverPause:false,
responsive:{
0:{items:2
},
600:{
items:3
},
1000:{
items:4
}
}
});

//Testimonial Slider
$(window).on("load", function () {

$("#testimonial-slider").owlCarousel({
items: 1,
loop: true,
nav: false,
autoplay: true,
dots: true,
dotsContainer: "#testimonials-avatar",
autoplayTimeout: 6000,
responsive: {
1280: {
items: 1,
},
600: {
items: 1,
},
320: {
items: 1,
},
}
});

$('[data-position]').each(function () {
var position = $(this).data('position').split(',')
$(this).css({top: position[0], right: position[1], bottom: position[2], left: position[3]})
});
});