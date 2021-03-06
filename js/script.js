
var ww = document.body.clientWidth;

$(document).ready(function() {
	$(".nav-menu li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})

	$(".toggleMenu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".nav-menu").toggle();
	});
	adjustMenu();
})

$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 801) {
		$(".toggleMenu").css("display", "inline-block");
		if (!$(".toggleMenu").hasClass("active")) {
			$(".nav-menu").hide();
		} else {
			$(".nav-menu").show();
		}
		$(".nav-menu li").unbind('mouseenter mouseleave');
		$(".nav-menu li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
	}
	else if (ww >= 801) {
		$(".toggleMenu").css("display", "none");
		$(".nav-menu").show();
		$(".nav-menu li").removeClass("hover");
		$(".nav-menu li a").unbind('click');
		$(".nav-menu li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	$(this).toggleClass('hover');
		});
	}
}
