import $ from "jquery"
import {modal} from "jquery-modal"

$(document).ready(function() {
    var slideCount = $('.slider').children().length;
    var slideWidth = $('.slider').width();
    var slideIndex = 0;
  
    $('.slider').css('width', slideCount * slideWidth);
  
    $('.slider-forward').click(function() {
      if (slideIndex < slideCount - 1) {
        slideIndex++;
        $('.slider-backward').removeAttr('disabled');
      }
  
      if (slideIndex === slideCount - 1) {
        $('.slider-forward').attr('disabled', true);
      }
  
      $('.slider').css('transform', 'translateX(' + (-slideIndex * slideWidth) + 'px)');
    });
  
    $('.slider-backward').click(function() {
      if (slideIndex > 0) {
        slideIndex--;
        $('.slider-forward').removeAttr('disabled');
      }
  
      if (slideIndex === 0) {
        $('.slider-backward').attr('disabled', true);
      }
  
      $('.slider').css('transform', 'translateX(' + (-slideIndex * slideWidth) + 'px)');
    });
  });
  
$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	
});