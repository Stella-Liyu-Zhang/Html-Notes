

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });


    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Stella (Liyu) Zhang"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: false,
        showCursor: true
    });
});

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

$(document).ready(function(){
    $(this).scrollTop(0);
});

var about = document.getElementById('about');
function fadeOutOnScroll(element) {
	if (!element) {
		return;
	}
	
	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;
	
	var opacity = 1;
	if (scrollTop > distanceToTop) {
		opacity = 1 - ((scrollTop - distanceToTop) / elementHeight);
	}
	
	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

var hide = document.querySelectorAll('#hideme');
console.log(hide)
function fadeInOnScroll(element) {
	if (!element) {
		return;
	}

    var position = element.getBoundingClientRect();
	var visible = false;
	var opacity = 0;
    if (position.top < window.innerHeight) {
        opacity = (window.innerHeight - position.top) / element.offsetHeight;
    }
	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

// function scrollHandler() {
//     // fadeOutOnScroll(about);
//     for (var i = 0, len = hide.length; i < len; i++) {
//         fadeInOnScroll(hide[i])
//     }
// }

window.addEventListener('scroll', scrollHandler);
