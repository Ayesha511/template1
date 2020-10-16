function menuToggle() {
	var nav = document.getElementById('nav');
	var toggle = document.getElementById('toggle');
	var brandImg = document.getElementById('brandImg');
	nav.classList.toggle("active");
	toggle.classList.toggle("active");
	brandImg.classList.toggle("active");
}

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed:1500,
    autoheight:true,
    dots:true,
    dotsEach:true,
    nav:true,
    responsive:{
      0:{
        items:1,
        nav:false,
        dots:false,
      },
      600:{
        items:1,
        nav:false,
        dots:false,
      },
      1000:{
        items:1,
        nav:true
      }
    }
});


AOS.init();