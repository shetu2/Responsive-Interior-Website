

$(document).ready(function(){
  $("#banner-slider").owlCarousel({

    items:2,
    loop:true,
    mouseDrag:true,
    autoplay:true,
    nav:false,
    margin:0,
    dots:true,
    center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })

});
$(document).ready(function(){
  $("#customer-testimonial").owlCarousel({

  	items:1,
  	loop:true,
  	mouseDrag:true,
  	autoplay:true,
  	nav:false,
  	margin:0,

  	center:true,
  	responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })

});
$(document).ready(function(){
$('.skill-per').each(function(){

  var $this= $(this);
  var per= $this.attr('per');
  $this.css("width",per+'%');
})

});
