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