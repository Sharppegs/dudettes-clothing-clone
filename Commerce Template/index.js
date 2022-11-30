$('.multiple-items').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 868,
            settings: {
              arrows: true,
              dots: true,        
              slidesToShow: 2,
              slidesToScroll: 2,
            }
        },
        
        
        
        {
        breakpoint: 568,
        settings: {
          arrows: false,
          dots: true,        
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      
    ]
    
  });

  $(document).ready(function(){

   
	$(".owl-carousel").owlCarousel({    
		items:1,
		margin: 10,
		autoplay:false,
    loop: true,
    animateOut: 'fadeOut'
    
    
	});
	
	dotcount = 1;
	
	$('.owl-dot').each(function() {
		jQuery( this ).addClass( 'dotnumber' + dotcount);
		jQuery( this ).attr('data-info', dotcount);
		dotcount=dotcount+1;
	});
	
	slidecount = 1;
	
	$('.owl-item').not('.cloned').each(function() {
		jQuery( this ).addClass( 'slidenumber' + slidecount);
		slidecount=slidecount+1;
	});
	
	$('.owl-dot').each(function() {	
		grab = jQuery(this).data('info');		
		slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
		jQuery(this).css("background-image", "url("+slidegrab+")");  	
	});
	
	amount = $('.owl-dot').length;
	gotowidth = 100/(amount + 1);			
	jQuery('.owl-dot').css("height", gotowidth+"%");

});


