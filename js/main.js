$( document ).ready(function() {

   $('a').smoothScroll();

});


$(function() {
		$('div').on('click', '.subscribe', function(event) {
			event.preventDefault();
			

			if ($('#txt').val().length == 0 ) {
				alert('Please fill in a valid e-mail');
			
			}else {
				alert('Thank you for subscribing!');
			}
		});

  }(jQuery));
  
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  
  cellAlign: 'left',
  contain: true
});

var flkty = new Flickity( '.main-carousel', {
 
});

