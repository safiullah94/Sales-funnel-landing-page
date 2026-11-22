(function ($) {
    "use strict";
	var $window = $(window); 
	var $body = $('body'); 
	/* Preloader Effect */
	$window.on('load', function(){
		$(".preloader").fadeOut(600);
	});
	/* Sticky Header */	
	if($('.active-sticky-header').length){
		$window.on('resize', function(){
			setHeaderHeight();
		});
		function setHeaderHeight(){
	 		$("header.main-header").css("height", $('header .header-sticky').outerHeight());
		}	
		$(window).on("scroll", function() {
			var fromTop = $(window).scrollTop();
			setHeaderHeight();
			var headerHeight = $('header .header-sticky').outerHeight()
			$("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
			$("header .header-sticky").toggleClass("active", (fromTop > 600));
		});
	}
	var initialMenuItems = $('#menu > li').toArray();  // Store initial items of #menu
	var initialMenu2Items = $('#menu2 > li').toArray();  // Store initial items of #menu2
	function handleMobileMenus() {
		if ($(window).width() <= 768) { // Mobile breakpoint
			// Only append if not already done (to avoid duplicating)
			if ($(document).find(".slicknav_nav").length === 0) {
				// Combine #menu2 items into #menu
				$('#menu2').children().appendTo('#menu');
				// Initialize SlickNav for #menu with both menus combined
				$('#menu').slicknav({
					label: '', // No label for the toggle button
					prependTo: '.responsive-menu' // Place the mobile menu in this container
				});
			}
		} else {
			// Desktop view
			if ($(document).find(".slicknav_nav").length > 0) {
				// Destroy SlickNav to restore original structure
				$('#menu').slicknav('destroy');
				// Move items back to their original containers
				$('#menu > li').not(initialMenuItems).each(function() {
					$(this).appendTo('#menu2');  // Move any items from #menu back to #menu2
				});
				// Ensure #menu2 is restored
				initialMenu2Items.forEach(function(item) {
					$(item).appendTo('#menu2');  // Append original items of #menu2 back
				});
				// Append original items of #menu back
				initialMenuItems.forEach(function(item) {
					$(item).appendTo('#menu');  // Append original items of #menu back
				});
			}
		}
	}
	// Run the function on page load
	handleMobileMenus();
	// Re-run the function on window resize
	$(window).resize(function () {
		handleMobileMenus();
	});
	if($("a[href='#top']").length){
		$("a[href='#top']").click(function() {
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});
	}
	/* Hero Slider Layout JS */
	new Swiper('.hero-slider-layout .swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 0,
		loop: true,
		autoplay: {
			delay: 4000,
		},
		pagination: {
			el: '.hero-pagination',
			clickable: true,
		},
		navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
	});
	/* Core Value Image Carousel JS */
	if ($('.sisf-testimonioal-slider').length) {
		const core_value_slider = new Swiper('.sisf-testimonioal-slider .swiper', {
			slidesPerView : 1,
			speed: 1000,
			spaceBetween: 10,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: '.testimonioal-next',
				prevEl: '.testimonioal-prev',
			},
		});
	}
	if ($('.sisf-sis-slider').length) {
		const core_value_slider = new Swiper('.sisf-sis-slider .swiper', {
			slidesPerView : 3,
			speed: 1000,
			spaceBetween: 10,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: '.testimonioal-next',
				prevEl: '.testimonioal-prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					centeredSlides: false
				},
				768: {
					slidesPerView: 2,
					centeredSlides: false
				},
				1024: {
					slidesPerView: 3,
					centeredSlides: false
				}
			}
		});
	}
	/* Service Single Image Carousel JS */
	if ($('.service-single-slider').length) {
		const service_single_slider = new Swiper('.service-single-slider .swiper', {
			slidesPerView : 1,
			speed: 1000,
			spaceBetween: 10,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: '.service-single-button-next',
				prevEl: '.service-single-button-prev',
			},
		});
	}
	/* Ministry Single Image Carousel JS */
	if ($('.ministry-single-slider').length) {
		const ministry_single_slider = new Swiper('.ministry-single-slider .swiper', {
			slidesPerView : 1,
			speed: 1000,
			spaceBetween: 10,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});
	}
	/* Skill Bar */
	if ($('.skills-progress-bar').length) {
		$('.skills-progress-bar').waypoint(function() {
			$('.skillbar').each(function() {
				$(this).find('.count-bar').animate({
				width:$(this).attr('data-percent')
				},2000);
			});
		},{
			offset: '50%'
		});
	}
	/* Youtube Background Video JS */
	if ($('#herovideo').length) {
		var myPlayer = $("#herovideo").YTPlayer();
	}
	/* Audio JS */
	const player = new Plyr('#player');
	/* Init Counter */
	if ($('.counter').length) {
		$('.counter').counterUp({ delay: 6, time: 3000 });
	}
	/* Image Reveal Animation */
	if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }
	/* Text Effect Animation */
	if ($('.text-anime-style-1').length) {
		let staggerAmount 	= 0.05,
			translateXValue = 0,
			delayValue 		= 0.5,
		   animatedTextElements = document.querySelectorAll('.text-anime-style-1');
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.words, {
				duration: 1,
				delay: delayValue,
				x: 20,
				autoAlpha: 0,
				stagger: staggerAmount,
				scrollTrigger: { trigger: element, start: "top 85%" },
				});
		});		
	}
	if ($('.text-anime-style-2').length) {				
		let	 staggerAmount 		= 0.03,
			 translateXValue	= 20,
			 delayValue 		= 0.1,
			 easeType 			= "power2.out",
			 animatedTextElements = document.querySelectorAll('.text-anime-style-2');
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.chars, {
					duration: 1,
					delay: delayValue,
					x: translateXValue,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%"},
				});
		});		
	}
	if ($('.text-anime-style-3').length) {		
		let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');
		 animatedTextElements.forEach((element) => {
			//Reset if needed
			if (element.animation) {
				element.animation.progress(1).kill();
				element.split.revert();
			}
			element.split = new SplitText(element, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(element, { perspective: 400 });
			gsap.set(element.split.chars, {
				opacity: 0,
				x: "50",
			});
			element.animation = gsap.to(element.split.chars, {
				scrollTrigger: { trigger: element,	start: "top 90%" },
				x: "0",
				y: "0",
				rotateX: "0",
				opacity: 1,
				duration: 1,
				ease: Back.easeOut,
				stagger: 0.02,
			});
		});		
	}
	/* Parallaxie js */
	var $parallaxie = $('.parallaxie');
	if($parallaxie.length && ($window.width() > 991))
	{
		if ($window.width() > 768) {
			$parallaxie.parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	}
	/* Zoom Gallery Screenshot */
	$('.gallery-items').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
			  return element.find('img');
			}
		}
	});
	/* Contact form validation */
	var $contactform = $("#contactForm");
	$contactform.validator({focus: false}).on("submit", function (event) {
		if (!event.isDefaultPrevented()) {
			event.preventDefault();
			submitForm();
		}
	});
	function submitForm(){
		/* Initiate Variables With Form Content*/
		var email = $("#email").val();
		var phone = $("#phone").val();
		var message = $("#msg").val();
		$.ajax({
			type: "POST",
			url: "../form-process.php",
			 data: { 
				email: email,
				phone: phone, 
				message: message 
			},
			success : function(text){
				if (text == "success"){
					formSuccess();
				} else {
					submitMSG(false,text);
				}
			}
		});
	}
	function formSuccess(){
		$contactform[0].reset();
		submitMSG(true, "Message Sent Successfully!")
	}
	function submitMSG(valid, msg){
		if(valid){
			var msgClasses = "h3 text-success";
		} else {
			var msgClasses = "h3 text-danger";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}
	/* Contact form validation end */

	/* Animated Wow Js */	
	new WOW().init();
	/* Popup Video */
	if ($('.popup-video').length) {
		$('.popup-video').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: true
		});
	}
	/* Lesson Swiper Slider */
	if ($('.sisf-lessons-info-below').length) {
		new Swiper('.sisf-lessons-info-below', {
			slidesPerView: 2,
			speed: 1000,
			spaceBetween: 10,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				767: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 2,
				},
				1367: {
					slidesPerView: 2,
				},
				1920: {
					slidesPerView: 2,
				}
			}
		});
	}
	/* Logo Swiper Slider */
	if ($('.logo-slider').length) {
		new Swiper('.logo-slider', {
			slidesPerView: 5,
			speed: 1000,
			spaceBetween: 10,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				650: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 5,
				},
				1367: {
					slidesPerView: 5,
				},
				1920: {
					slidesPerView: 5,
				}
			}
		});
	}
	/* Gallery Slider */
	if ($('.gallery-slider').length) {
		new Swiper('.gallery-slider', {
			slidesPerView: 5,
			speed: 1000,
			spaceBetween: 10,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				650: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 5,
				},
				1367: {
					slidesPerView: 5,
				},
				1920: {
					slidesPerView: 5,
				}
			}
		});
	}
	/* Client Slider */
	if ($('.client-slider').length) {
		new Swiper('.client-slider', {
			slidesPerView: 5,
			speed: 1000,
			spaceBetween: 10,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				650: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 5,
				},
				1367: {
					slidesPerView: 5,
				},
				1920: {
					slidesPerView: 5,
				}
			}
		});
	}
	/* Info aside Slider */
	if ($('.layout--info-aside-slider').length) {
		new Swiper('.layout--info-aside-slider', {
			slidesPerView: 4,
			speed: 1000,
			spaceBetween: 10,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 4,
				},
				1367: {
					slidesPerView: 4,
				},
				1920: {
					slidesPerView: 4,
				}
			}
		});
	}
	/* Product & Cart Page Quantity Changes */
	var sisfWooQuantityButtons = {
        init: function () {
            $( document ).on(
                'click',
                '.sisf-quantity-minus, .sisf-quantity-plus',
                function ( e ) {
                    e.stopPropagation();
                    var $button     = $( this ),
                        $inputField = $button.siblings( '.sisf-quantity-input' ),
                        step        = parseFloat( $inputField.data( 'step' ) ),
                        max         = parseFloat( $inputField.data( 'max' ) ),
                        min         = parseFloat( $inputField.data( 'min' ) ),
                        minus       = false,
                        inputValue  = typeof Number.isNaN === 'function' && Number.isNaN( parseFloat( $inputField.val() ) ) ? min : parseFloat( $inputField.val() ),
                        newInputValue;
                    if ( $button.hasClass( 'sisf-quantity-minus' ) ) {
                        minus = true;
                    }
                    if ( minus ) {
                        newInputValue = inputValue - step;
                        if ( newInputValue >= min ) {
                            $inputField.val( newInputValue );
                        } else {
                            $inputField.val( min );
                        }
                    } else {
                        newInputValue = inputValue + step;
                        if ( max === undefined ) {
                            $inputField.val( newInputValue );
                        } else {
                            if ( newInputValue >= max ) {
                                $inputField.val( max );
                            } else {
                                $inputField.val( newInputValue );
                            }
                        }
                    }
                    $inputField.trigger( 'change' );
                }
            );
        }
    };
    sisfWooQuantityButtons.init();
})(jQuery);