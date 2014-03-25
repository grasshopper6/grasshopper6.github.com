var defaultManualSpeed = 10;
var defaultAutoSpeed = 1500;
var defaultAutoSpeedEdge = 7500; // optimal - half of defaultAutoSpeed
function goToPoint1(speed, gearbox, way) {
	if (!speed) speed = defaultManualSpeed;
	if (gearbox != 'auto') showIntroPart('Welcome');
	if (way == 'throughEdge') {

		if (gearbox == 'auto') {

			$('#timeline .inside').animate({
				backgroundPosition: '-7px -42px'
			}, defaultAutoSpeedEdge, function() {
				$('#introNav .nav li').removeClass('active').filter('.p1').addClass('active');
				$('#timeline .inside').css({ backgroundPosition: '-990px -42px' });
				$('#timeline .inside').animate({
					backgroundPosition: '-913px -42px'
				}, defaultAutoSpeedEdge, function() {
					$('#introNav .nav li').removeClass('active').filter('.p1').addClass('active');
					if (gearbox == 'auto') showIntroPart('Welcome');
					setTimeout(function() { introStop(); }, defaultManualSpeed);
				});
			});

		} else {

			$('#timeline .inside').animate({
				backgroundPosition: '-7px -42px'
			}, 250, function() {
				$('#introNav .nav li').removeClass('active').filter('.p1').addClass('active');
				$('#timeline .inside').css({ backgroundPosition: '-990px -42px' });
				$('#timeline .inside').animate({
					backgroundPosition: '-913px -42px'
				}, 250, function() {
					$('#introNav .nav li').removeClass('active').filter('.p1').addClass('active');
					if (gearbox == 'auto') showIntroPart('Welcome');
					setTimeout(function() { introStop(); }, defaultManualSpeed);
				});
			});

		}
	} else {
		if (!speed) speed = defaultManualSpeed;
		$('#timeline .inside').animate({
			backgroundPosition: '-913px -42px'
		}, speed, function() {
			$('#introNav .nav li').removeClass('active').filter('.p1').addClass('active');
			if (gearbox == 'auto') showIntroPart('Welcome');
		});
	}
}

function goToPoint2(speed, gearbox) {
	if (!speed) speed = defaultManualSpeed;
	if (gearbox != 'auto') showIntroPart('Welcome1');
	$('#timeline .inside').animate({
		backgroundPosition: '-837px -42px'
	}, speed, function() {
		$('#introNav .nav li').removeClass('active').filter('.p2').addClass('active');
		if (gearbox == 'auto') showIntroPart('Welcome1');
	});
}
function goToPoint3(speed, gearbox) {
	if (!speed) speed = defaultManualSpeed;
	if (gearbox != 'auto') showIntroPart('Welcome2');
	$('#timeline .inside').animate({
		backgroundPosition: '-763px -42px'
	}, speed, function() {
		$('#introNav .nav li').removeClass('active').filter('.p3').addClass('active');
		if (gearbox == 'auto') showIntroPart('Welcome2');
	});
}
function goToPoint4(speed, gearbox) {
	if (!speed) speed = defaultManualSpeed;
	if (gearbox != 'auto') showIntroPart('Welcome3');
	$('#timeline .inside').animate({
		backgroundPosition: '-689px -42px'
	}, speed, function() {
		$('#introNav .nav li').removeClass('active').filter('.p4').addClass('active');
		if (gearbox == 'auto') showIntroPart('Welcome3');
	});
}
function goToPoint5(speed, gearbox) {
	if (!speed) speed = defaultManualSpeed;
	if (gearbox != 'auto') showIntroPart('Welcome4');
	$('#timeline .inside').animate({
		backgroundPosition: '-615px -42px'
	}, speed, function() {
		$('#introNav .nav li').removeClass('active').filter('.p5').addClass('active');
		if (gearbox == 'auto') showIntroPart('Welcome4');
	});
}
function goToPoint6(speed, gearbox) {
	if (!speed) speed = defaultManualSpeed;
	if (gearbox != 'auto') showIntroPart('Welcome5');
	$('#timeline .inside').animate({
		backgroundPosition: '-541px -42px'
	}, speed, function() {
		$('#introNav .nav li').removeClass('active').filter('.p6').addClass('active');
		if (gearbox == 'auto') showIntroPart('Welcome5');
	});
}
function goToPoint7(speed, gearbox) {
	if (!speed) speed = defaultManualSpeed;
	if (gearbox != 'auto') showIntroPart('Welcome6');
	$('#timeline .inside').animate({
		backgroundPosition: '-467px -42px'
	}, speed, function() {
		$('#introNav .nav li').removeClass('active').filter('.p7').addClass('active');
		if (gearbox == 'auto') showIntroPart('Welcome6');
	});
}
function goToPoint8(speed, gearbox) {
	if (!speed) speed = defaultManualSpeed;
	if (gearbox != 'auto') showIntroPart('Welcome7');
	$('#timeline .inside').animate({
		backgroundPosition: '-393px -42px'
	}, speed, function() {
		$('#introNav .nav li').removeClass('active').filter('.p8').addClass('active');
		if (gearbox == 'auto') showIntroPart('Welcome7');
	});
}
function goToPoint9(speed, gearbox) {
	if (!speed) speed = defaultManualSpeed;
	if (gearbox != 'auto') showIntroPart('Welcome8');
	$('#timeline .inside').animate({
		backgroundPosition: '-319px -42px'
	}, speed, function() {
		$('#introNav .nav li').removeClass('active').filter('.p9').addClass('active');
		if (gearbox == 'auto') showIntroPart('Welcome8');
	});
}
function goToPoint10(speed, gearbox) {
	if (!speed) speed = defaultManualSpeed;
	if (gearbox != 'auto') showIntroPart('Welcome9');
	$('#timeline .inside').animate({
		backgroundPosition: '-245px -42px'
	}, speed, function() {
		$('#introNav .nav li').removeClass('active').filter('.p10').addClass('active');
		if (gearbox == 'auto') showIntroPart('Welcome9');
	});
}
function goToPoint11(speed, gearbox) {
	if (!speed) speed = defaultManualSpeed;
	if (gearbox != 'auto') showIntroPart('Welcome10');
	$('#timeline .inside').animate({
		backgroundPosition: '-171px -42px'
	}, speed, function() {
		$('#introNav .nav li').removeClass('active').filter('.p11').addClass('active');
		if (gearbox == 'auto') showIntroPart('Welcome10');
	});
}

function goToPoint12(speed, gearbox, way) {
	if (!speed) speed = defaultManualSpeed;
	if (gearbox != 'auto') showIntroPart('Welcome12');
	if (way == 'throughEdge') {

		if (gearbox == 'auto') {

			$('#timeline .inside').animate({
				backgroundPosition: '-990px -42px'
			}, defaultAutoSpeedEdge, function() {
				$('#introNav .nav li').removeClass('active').filter('.p12').addClass('active');
				$('#timeline .inside').css({ backgroundPosition: '-7px -42px' });
				$('#timeline .inside').animate({
					backgroundPosition: '-97px -42px'
				}, defaultAutoSpeedEdge, function() {
					$('#introNav .nav li').removeClass('active').filter('.p12').addClass('active');
					if (gearbox == 'auto') showIntroPart('Welcome12');
				});
			});

		} else {

			$('#timeline .inside').animate({
				backgroundPosition: '-990px -42px'
			}, 250, function() {
				$('#introNav .nav li').removeClass('active').filter('.p12').addClass('active');
				$('#timeline .inside').css({ backgroundPosition: '-7px -42px' });
				$('#timeline .inside').animate({
					backgroundPosition: '-97px -42px'
				}, 250, function() {
					$('#introNav .nav li').removeClass('active').filter('.p12').addClass('active');
					if (gearbox == 'auto') showIntroPart('Welcome12');
				});
			});

		}

	} else {
		$('#timeline .inside').animate({
			backgroundPosition: '-97px -42px'
		}, speed, function() {
			$('#introNav .nav li').removeClass('active').filter('.p12').addClass('active');
			if (gearbox == 'auto') showIntroPart('Welcome12');
		});
	}
}


function introAutoPlay() {
	$('#introNav #playback .play').hide().parent().parent().find('.pause').show();
	if ($('#introNav .nav li.active').size() > 0) {
		var activePointNo = $('#introNav .nav li.active').attr('class').substr(1, 2);
	}
	if (activePointNo < 2) goToPoint2(defaultAutoSpeed, 'auto');
	if (activePointNo < 3) goToPoint3(defaultAutoSpeed, 'auto');
	if (activePointNo < 4) goToPoint4(defaultAutoSpeed, 'auto');
	if (activePointNo < 5) goToPoint5(defaultAutoSpeed, 'auto');
	if (activePointNo < 6) goToPoint6(defaultAutoSpeed, 'auto');
	if (activePointNo < 7) goToPoint7(defaultAutoSpeed, 'auto');
	if (activePointNo < 8) goToPoint8(defaultAutoSpeed, 'auto');
	if (activePointNo < 9) goToPoint9(defaultAutoSpeed, 'auto');
	if (activePointNo < 10) goToPoint10(defaultAutoSpeed, 'auto');
	if (activePointNo < 11) goToPoint11(defaultAutoSpeed, 'auto');
	if (activePointNo < 12) goToPoint12(defaultAutoSpeed, 'auto');
	goToPoint1(defaultAutoSpeed, 'auto', 'throughEdge');
	
}

function introStop() {
	$('#timeline .inside').stop(function() { $('#timeline .inside').stop(); });
	$('#introNav #playback .pause').hide().parent().parent().find('.play').show();
}

function showIntroPart(part) {
	if ( $.browser.msie )
	{
		$('.introPart').hide();
		$('#intro' + part).show();
	}
	else
	{
		$('.introPart').fadeOut(defaultManualSpeed);
		$('#intro' + part).fadeIn(defaultManualSpeed);
	}
}
$(document).ready(function() {
	$('#introNav #playback .play a').click(function() {
		introAutoPlay();
		return false;
	});
	$('#introNav #playback .pause a').click(function() {
		introStop();
		return false;
	});

	$('#introNav #playback .prev a').click(function() {
		introStop();
		var activePointNo = $('#introNav .nav li.active').attr('class').substr(1, 2);
		if (activePointNo < 2) {goToPoint12(defaultManualSpeed, '', 'throughEdge');}
	    else if (activePointNo < 3) {goToPoint1();}
	    else if (activePointNo < 4) goToPoint2();
	    else if (activePointNo < 5) goToPoint3();
	    else if (activePointNo < 6) goToPoint4();
	    else if (activePointNo < 7) goToPoint5();
	    else if (activePointNo < 8) goToPoint6();
	    else if (activePointNo < 9) goToPoint7();
	    else if (activePointNo < 10) goToPoint8();
	    else if (activePointNo < 11) goToPoint9();
	    else if (activePointNo < 12) goToPoint10();
	    else if(activePointNo < 13) goToPoint11();
	});

	$('#introNav #playback .next a').click(function() {
		introStop();
		var activePointNo = $('#introNav .nav li.active').attr('class').substr(1, 2);
		if (activePointNo < 2) {goToPoint2();}
	    else if (activePointNo < 3) {goToPoint3();}
	    else if (activePointNo < 4) goToPoint4();
	    else if (activePointNo < 5) goToPoint5();
	    else if (activePointNo < 6) goToPoint6();
	    else if (activePointNo < 7) goToPoint7();
	    else if (activePointNo < 8) goToPoint8();
	    else if (activePointNo < 9) goToPoint9();
	    else if (activePointNo < 10) goToPoint10();
	    else if (activePointNo < 11) goToPoint11();
	    else if (activePointNo < 12) goToPoint12();
	    else if(activePointNo < 13) goToPoint1(defaultManualSpeed, '', 'throughEdge');
		
	});

	$('#introNav .p1 a').click(function() {
		introStop();
		if (!$(this).parent().hasClass('active')) goToPoint1();
		return false;
	});
	$('#introNav .p2 a').click(function() {
		introStop();
		if (!$(this).parent().hasClass('active')) goToPoint2();
		return false;
	});
	$('#introNav .p3 a').click(function() {
		introStop();
		if (!$(this).parent().hasClass('active')) goToPoint3();
		return false;
	});
	$('#introNav .p4 a').click(function() {
		introStop();
		if (!$(this).parent().hasClass('active')) goToPoint4();
		return false;
	});
	$('#introNav .p5 a').click(function() {
		introStop();
		if (!$(this).parent().hasClass('active')) goToPoint5();
		return false;
	});
	$('#introNav .p6 a').click(function() {
		introStop();
		if (!$(this).parent().hasClass('active')) goToPoint6();
		return false;
	});
	$('#introNav .p7 a').click(function() {
		introStop();
		if (!$(this).parent().hasClass('active')) goToPoint7();
		return false;
	});
	$('#introNav .p8 a').click(function() {
		introStop();
		if (!$(this).parent().hasClass('active')) goToPoint8();
		return false;
	});
	$('#introNav .p9 a').click(function() {
		introStop();
		if (!$(this).parent().hasClass('active')) goToPoint9();
		return false;
	});
	$('#introNav .p10 a').click(function() {
		introStop();
		if (!$(this).parent().hasClass('active')) goToPoint10();
		return false;
	});
	$('#introNav .p11 a').click(function() {
		introStop();
		if (!$(this).parent().hasClass('active')) goToPoint11();
		return false;
	});
	$('#introNav .p12 a').click(function() {
		introStop();
		if (!$(this).parent().hasClass('active')) goToPoint12();
		return false;
	});
	

	if ($('#mainnav ul').size() > 0) {
		var pointLeft = Math.ceil($('#mainnav > li.withSubnav > a').width() / 2) - 3;
		$('#mainnav > li.withSubnav > a span').after('<div id="subnavPoint"></div>');
		$('#subnavPoint').css('left', pointLeft);
	}

	$('#timeline .inside').css('background-position', '-913px -42px');

	$('#leading, #mainnav ul, #main h2, .demoNav li, .featuresNav li.active').not('h2.title, .customerList h2').append('<span class="corner1"></span><span class="corner2"></span><span class="corner3"></span><span class="corner4"></span>');

	$('.btnDemo a, .btnDownload a, .btnLearn a, .btnBuyNow a, p.downloads a, .boxProductTour p a').hover(function() {
		$(this).fadeTo(200, '0.8');
	}, function() {
		$(this).stop().fadeTo(200, '1');
	});


});


function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}

addLoadEvent(function() {
	introAutoPlay();
});