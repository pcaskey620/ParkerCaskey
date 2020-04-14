$(document).ready(function () {
    init();
});

function init() {
    
    setHeroHeight();

    setWaypoints();
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
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeIn');
    }, {
        offset: '75%'
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