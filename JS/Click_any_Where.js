$('body').on('click', function(e){
    $('body').append('<div class="ball1 ball-effect"></div><div class="ball2 ball-effect"></div><div class="ball3 ball-effect"></div><div class="ball5 ball-effect"></div><div class="ball5 ball-effect">');
    $('.ball1').offset({
        top: e.pageY -10 ,
        left: e.pageX -15
    })
    $('.ball2').offset({
        top: e.pageY - 20,
        left: e.pageX - 25
    })
    $('.ball3').offset({
        top: e.pageY + 10,
        left: e.pageX + 15
    })
    $('.ball4').offset({
        top: e.pageY + 20,
        left: e.pageX + 25
    })
    $('.ball5').offset({
        top: e.pageY,
        left: e.pageX
    })
	console.log(1);
    $('.ball-effect')
		.delay(500)
		.fadeOut(0);
})
