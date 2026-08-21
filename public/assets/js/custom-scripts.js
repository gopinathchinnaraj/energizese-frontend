jQuery(document).ready(function($){	
	$('body').on('click','.mob-nav',function(){
		$(this).toggleClass('open');
		$('.main-nav ul, .overlay').fadeToggle(250);
		if($('.mob-nav').hasClass('open')){
			$('body').css('overflow','hidden');
		}else{
			$('body').css('overflow','visible');
		}
	});
	$('.home-hero-wrapper .owl-carousel').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots: true,
		lazyLoad:true,
		smartSpeed: 800,
		mouseDrag: false,
		animateOut: 'fadeOut',
		autoplay: true,
	})
	$('.active .hexagon').css({opacity:'1',transform:'scale(1) rotateY(0deg)'});
	setTimeout(function(){
		$('.active .banner-content').css({opacity:'1'});
	},600);

	$('.home-hero-wrapper .owl-carousel').on('changed.owl.carousel', function(){
		$('.hexagon').css({transform:'scale(0.5) rotateY(180deg)', opacity:'0'});
			$('.banner-content').css({opacity:'0'});
	});

	$('.home-hero-wrapper .owl-carousel').on('change.owl.carousel', function(){
		setTimeout(function(){
		$('.active .hexagon').css({transform:'scale(1) rotate(0)',opacity:'1'});
		},800);

		setTimeout(function(){
			$('.active .banner-content').css({opacity:'1'});
		},1300);
	});

	$('.tab-content:eq(0)').show();
	$('.btn-tab:eq(0)').addClass('active');
	$('body').on('click','.btn-tab',function(){			
		$(this).toggleClass('active');		
		$(this).next('.tab-content').slideToggle(250);		
		if($(this).next('.tab-content').is(':visible')==true){
			$(this).next('.tab-content').siblings('.tab-content').slideUp(250);
			$(this).siblings().removeClass('active');
		}
	});
	$(".client-slider").owlCarousel({
		loop:false,
		nav: false,
		autoplay: true,
		dots: true,
		responsiveClass:true,
		smartSpeed: 800,
		autoplay: 1500,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:6
			}
		}
	});
	
	$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

	$('body').on('click','.category-wrapper li',function(){
		var getRel = $(this).attr('rel'); 
		$('.popup-container').hide();
		$('#'+getRel).fadeIn(150,function(){
			$('.popup-content').fadeIn(250);		
		});
	});
	$('body').on('click','.close',function(){
		$('.popup-content').fadeOut(250,function(){
			$('.popup-container').fadeOut(250);			
		});
	});
		
	$(".product-slider").owlCarousel({
		loop:true,
		nav: true,
		dots: true,
		responsiveClass:true,
		smartSpeed: 500,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			768:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});

	
});


$(function() {
  
	var controller = new ScrollMagic.Controller();
		$(".bottom-in").each(function(){
			$(this).addClass("bottom-in-hide");
			new ScrollMagic.Scene({triggerElement: this,triggerHook: .85}).setClassToggle(this, 'from-bottom').addTo(controller);
		});
	
  });
