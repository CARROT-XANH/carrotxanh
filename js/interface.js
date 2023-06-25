( function($) {
  'use strict';



  	/*-------------------------------------------------------------------------------
	  Detect mobile device 
	-------------------------------------------------------------------------------*/



	var mobileDevice = false; 

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	  	$('html').addClass('mobile');
	  	mobileDevice = true;
	}

	else{
		$('html').addClass('no-mobile');
		mobileDevice = false;
	}

    /*-------------------------------------------------------------------------------
	  Window load
	-------------------------------------------------------------------------------*/

	$(window).load(function(){
		$('body').addClass('loaded');
		$('.loader').fadeOut(400);
    	var wow = new WOW({
		    offset: 200,          
		    mobile: false
		  }
		);
		wow.init();
	});

	var topPanelHeight=$('.top-panel').outerHeight();
	var navbar=$('.navbar-primary');
	var navbar2=$('.navbar-2');
	var affixPanelHeight=$('.affix').outerHeight();

	/*-------------------------------------------------------------------------------
	  Smooth scroll to anchor
	-------------------------------------------------------------------------------*/

    $('.js-target-scroll').on('click', function() {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top - affixPanelHeight + 1)
            }, 1000);
            return false;
        }
    });

    /*-------------------------------------------------------------------------------
	  Affix
	-------------------------------------------------------------------------------*/

	navbar.affix({
	  offset: {
	    top:topPanelHeight
	  }
	});

	/* Navbar 2 Affix */

	navbar2.affix({
	  offset: {
	    top:10
	  }
	});

	navbar2.on('affix.bs.affix', function() {
		if (!navbar2.hasClass('affix')){
			navbar2.addClass('animated fadeInDown');
		}
	});

	navbar2.on('affix-top.bs.affix', function() {
	  	navbar2.removeClass('animated fadeInDown');
	  	$('.navbar-collapse').collapse('hide');
	});


	if (navbar2.hasClass('affix')){
		navbar2.find('.js-brand-hinge').addClass('animated hinge');
	}

	/*-------------------------------------------------------------------------------
	 Navbar collapse
	-------------------------------------------------------------------------------*/

	$('.navbar-collapse').on('show.bs.collapse', function () {
	 	navbar2.addClass('affix');
	});

	$('.navbar-collapse').on('hide.bs.collapse', function () {
		if (navbar2.hasClass('affix-top')){
			navbar2.removeClass('affix');
		}
	});

	$(".navbar-nav > li > a").on('click', function() {
	    $(".navbar-collapse").collapse('hide');
	});

	/*-------------------------------------------------------------------------------
	 Scrollspy
	-------------------------------------------------------------------------------*/

	$('body').scrollspy({
		offset:  affixPanelHeight + 1
	});

	/*-------------------------------------------------------------------------------
	  Parallax
	-------------------------------------------------------------------------------*/

	if(!mobileDevice){
		$(window).stellar({
		  	responsive: true,
		  	horizontalScrolling: false,
		  	hideDistantElements: false,
		  	horizontalOffset: 0,
		  	verticalOffset: 0
		});
	}

	/*-------------------------------------------------------------------------------
	  Background slider
	-------------------------------------------------------------------------------*/



	



	/*-------------------------------------------------------------------------------
	  Pie chart
	-------------------------------------------------------------------------------*/



    $(window).scroll( function(){
	    $('.chart').each( function(i){
	        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
	        var bottom_of_window = $(window).scrollTop() + $(window).height();
	        if( bottom_of_window > bottom_of_object ){
		        $('.chart').easyPieChart({
		          scaleColor:false,
		          trackColor:'#ebedee',
		          barColor: function(percent) {
				    var ctx = this.renderer.getCtx();
				    var canvas = this.renderer.getCanvas();
				    var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
				        gradient.addColorStop(0, "#0fa64b");
				        gradient.addColorStop(1, "#094c26");
				    return gradient;
				  },
			      lineWidth:5,
			      lineCap: 'butt',
			      size:150,
		          animate:1000
		        });
	        }
	    }); 
	});

	// Popular Causes Progress Bar
	if ($(".count-bar").length) {
		$(".count-bar").appear(
		  function () {
			var el = $(this);
			var percent = el.data("percent");
			$(el).css("width", percent).addClass("counted");
		  },
		  {
			accY: -10
		  }
		);
	  }
	
	
	

	  var originalCursor = document.body.style.cursor;
	
	  document.addEventListener('mousedown', function() {
		// Thay đổi con trỏ chuột khi người dùng click
		document.body.style.cursor = "url('cursor.svg'), auto";
	  });
	
	  document.addEventListener('mouseup', function() {
		// Trở lại con trỏ chuột ban đầu sau khi người dùng thả chuột
		document.body.style.cursor = originalCursor;
	  });
	
	  
	/*-------------------------------------------------------------------------------
	  Post gallery
	-------------------------------------------------------------------------------*/



	 $(".js-post-gallery").owlCarousel({
    	singleItem : true,
    	transitionStyle : "fadeUp",
    	responsiveRefreshRate : 0,
    	pagination:false,
    	navigation:true,
    	navigationText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
    	
	});



	/*-------------------------------------------------------------------------------
	  Portfolio masonry
	-------------------------------------------------------------------------------*/



	$('.js-iso').each(function() {		
		var $container = $(this);
		$container.imagesLoaded( function(){
			$container.isotope({		 
				itemSelector: '.js-iso-item',
				percentPosition: true,
				layoutMode: 'masonry',	
				masonry: {
				  columnWidth: '.grid-sizer'
				}	
			});	
		});
    }); 


	$('.filter li').on('click', function() {
		$('.filter .active').removeClass('active');
		$(this).closest('li').addClass('active');
		var selector = $(this).attr('data-filter');
		$('.js-iso').isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				queue: false
			}
		});
		return false;
	});



	/*-------------------------------------------------------------------------------
	  Video pop-up
	-------------------------------------------------------------------------------*/



	$('.js-play').magnificPopup({
	    type: 'iframe',
	    removalDelay: 300
    });
	
	
	var elements = document.querySelectorAll('.statistic-number'); 
	var values = []; 
	elements.forEach(function(element) { 
	  values.push(parseInt(element.innerHTML)); 
	  element.innerHTML = '0'; // Thiết lập giá trị ban đầu cho các con số là 0 
	});
	
	function animateNumber(element, finalNumber) {
	  var counter = 0;
	  var interval = setInterval(function() {
		if (counter < finalNumber) {
		  element.innerHTML = counter;
		  counter++;
		} else {
		  clearInterval(interval); 
		}
	  }, 50); 
	}
	
	function isElementInViewport(el) {
	  // ...
	}
	
	function checkKeyPoint() {
	  var keyPoint = document.querySelector('#my-key-point');
	  var rect = keyPoint.getBoundingClientRect();
	  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
		window.removeEventListener('scroll', checkKeyPoint);
		startCounting();
	  }
	}
	
	function startCounting() {
	  elements.forEach(function(element, index) {
		animateNumber(element, values[index]);
	  });
	}
	
	window.addEventListener('scroll', checkKeyPoint);


	/*-------------------------------------------------------------------------------
	  Reviews carousel
	-------------------------------------------------------------------------------*/



	var reviewCarousel=$(".review-carousel").owlCarousel({
		singleItem:true,
	 	autoHeight : true,
	 	addClassActive:true,
    	navigation:true,
    	responsiveRefreshRate:0,
    	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    	slideSpeed:400,
    	afterMove:function(){
    		$('.thumbnail-pagination a').removeClass('active');
    		$('.thumbnail-pagination a').eq(this.currentItem).addClass('active');
    	}
	});

	if ($(".review-carousel").size() > 0){
		setTimeout(function(){
		    reviewCarousel.data('owlCarousel').updateVars();
		},100);
	}

	

	reviewCarousel.trigger('owl.jumpTo',1);


    $('.thumbnail-pagination a').click(function (e) {
    	var index=$(this).index();
        reviewCarousel.trigger('owl.goTo', index);
        e.preventDefault();
    });

	$(".custom-next").click(function () {
        reviewCarousel.trigger('owl.next');
    });

    $(".custom-prev").click(function () {
        reviewCarousel.trigger('owl.prev');
    });

	/*-------------------------------------------------------------------------------
	  Tạo nút like
	-------------------------------------------------------------------------------*/

// Lấy tất cả các nút thả tim
var heartButtons = document.querySelectorAll(".heart-button");

// Áp dụng sự kiện click cho tất cả các nút thả tim
heartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Thêm hoặc xóa lớp "clicked" khi được click
        this.classList.toggle("clicked");
    });
});


	
	/*-------------------------------------------------------------------------------
	  Gallery carousel
	-------------------------------------------------------------------------------*/



	$(".gallery-carousel").owlCarousel({
		singleItem:true,
	 	autoHeight : true,
	 	pagination:false,
	 	navigation:true,
	 	transitionStyle : "fadeUp",
	 	navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});



	/*-------------------------------------------------------------------------------
	  Clients carousel
	-------------------------------------------------------------------------------*/


	$(".clients-carousel").owlCarousel({
		items: 2,
		navigation: false,
		transitionStyle : "backSlide",
    	slideSpeed:200,
    	responsiveRefreshRate : 0,
    	addClassActive:true,
    	autoPlay : 7000,
		autoPlayHoverPause: true,
	  });
	


	/*-------------------------------------------------------------------------------
	  Ajax Form
	-------------------------------------------------------------------------------*/



	if ($('.js-ajax-form').length) {
		$('.js-ajax-form').each(function(){
			$(this).validate({
				errorClass: 'error wobble-error',
			    submitHandler: function(form){
		        	$.ajax({
			            type: "POST",
			            url:"mail.php",
			            data: $(form).serialize(),
			            success: function() {
			                
		                },

		                error: function(){
			            	
			            }
			        });
			    }
			});
		});
	}
})(jQuery);

  function copyLink() {
    var link = window.location.href; // Lấy đường dẫn hiện tại
    navigator.clipboard.writeText(link); // Sao chép đường dẫn vào clipboard
    alert("Đường dẫn đã được sao chép!");
  }