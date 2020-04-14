$(document).ready(function () {
    init();
});

function init() {
    setHeroHeight();
    $(window).scroll(function() {
        var scrolledY = $(window).scrollTop();
        $('#hero').css('background-position', 'left ' + ((scrolledY)) + 'px');
      });

    setWaypoints();
    applyClickEvent();
}

function setWaypoints() {
    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeIn');
    }, {
        offset: '100%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeIn');
    }, {
        offset: '100%'
    });
    $('.wp-brand-icons').waypoint(function () {
        $('.wp-brand-icons').addClass('animated fadeIn');
    }, {
        offset: '85%'
    });
    $('.wp-social-icons').waypoint(function () {
        $('.wp-social-icons').addClass('animated fadeIn');
    }, {
        offset: '95%'
    });
    $('.wp-footer').waypoint(function () {
        $('.wp-footer').addClass('animated fadeIn');
    }, {
        offset: '100%'
    });
}

function setHeroHeight()
{
    let newHeight = $(window).height();
    $('.hero').css({ height:  newHeight + 'px' });

	$(window).on('resize', function() 
	{  	
        let newHeight = $(window).height(); 
		$('.hero').css({ height: newHeight + 'px' });
	}); 
}

function applyClickEvent()
{
	$("a[href*='#']").on('click', function(e)
	{
		e.preventDefault();
		
		if( $( $.attr(this, 'href') ).length > 0 )
		{
			$('html, body').animate(
			{
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 400);
		}
		return false;
	});
}