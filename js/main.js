$(document).ready(function () {

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//alert popup----------------------------------------------------
	$(function () {
		$('.signup').on('click', '.subscribe', function (event) {
			event.preventDefault();


			if ($('#txt').val().length <= 10) {
				alert('Please fill in a valid e-mail');

			} else {
				alert('Thank you for subscribing!');
			}
		});
	});
// flickity carousel------------------------------

$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
}(jQuery));

// shopping cart item increment

    var inc = 0;
    $('.counter').hide();
    $('.btn').on('click', function(event) {
        inc++;
   console.log(inc);

  if (inc === 0 ) {
            $('.counter').hide();
    } else {
    $('.counter').show();
    $('.counter').text(inc++);
      }
    });