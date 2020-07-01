

	//$(".main").on("mousemove", (e) => {
	//	var x = e.pageX / $(window).width();
	//	var y = e.pageY / $(window).height();

//		$(".parallax1").css(

//		"transform", "translate(-" + x * 30 "px, -" + y * 30 + "px) " ); 
		

//	});





//});


$(document).on("mousemove",function(e){
        var X = (e.pageX * 1 / 120);
        var Y = (e.pageY * 1 / 120);
        $(".parallax1").css('background-position', X*2 + 'px ' + Y*2 + 'px');
        $(".parallax2").css('background-position', X + 'px ' + Y + 'px');
        $(".parallax3").css('background-position', X*2 + 'px ' + Y*3 + 'px');
        $(".market-heart").css('background-position', X*2 + 'px ' + Y*3 + 'px');
		
    });
// function check(){


//		let name = $(".popup-name").val(),
//			text = $(".popup-phone").val();
//
//		if (name.length !== 0 && text.length !== 0){
//		$(".popup-input").removeClass("error");
//		
//			
//			
//
//			
//
		// 	$(".popup-background").fadeOut();
		// 	$(".greateful-background").fadeIn();
		// setTimeout(function() {
		// 	$(".greateful-background").fadeOut();
		// 	$("html,body").css("overflow","visible");},2000);
////		$("body").on("click", ".popup-button", hidecallback);
//		
//			name = $(".popup-name").val("");
//			text = $(".popup-phone").val("");
//			}
//		else {
//			$(".popup-input").addClass("error");
//			}
	// }
	// $(".popup-button").on ("click", check);
	

	function popupcallback (){
		$(".popup-background").fadeIn();
		$("html,body").css("overflow","hidden");
//		$(document).bind('touchmove', false);					
						}	

	
	function hidecallback() {
		$(".popup-background").fadeOut();
		$(".greateful-background").fadeIn();

			setTimeout(function() {
		$(".greateful-background").fadeOut();
		$("html,body").css("overflow","visible");
//		$(document).bind('touchmove', true);
},2000);
}

	function hidecallbackk() {
		$(".popup-input").removeClass("error");

//		name = $(".popup-name").val("");
//			text = $(".popup-phone").val("");

		$(".popup-background").fadeOut();
		$("html,body").css("overflow","visible");
//		$(document).bind('touchmove', true);

	}
		

$("body").on("click", ".header-button, .main-button, .market-button", popupcallback);
 $("body").on("click", ".close", hidecallbackk);





$('form').each(function () {
	$(this).validate({
		errorPlacement(error, element) {
			return true;
		},
		focusInvalid: false,
		rules: {
			phone: {
				required: false,
			},
			name: {
				required: true,
				maxlength: 10,
			}
		},
		messages: {
			phone: {
				required: 'Нужно что-то ввести'
			},
			name: {
				required: 'Нужно что-то ввести',
				maxlength: 'Нужно ввести максимум 10 букв'
			}
		},
		submitHandler(form) {
		let th = $(form);

		$.ajax({
		type: 'POST',
		url: 'send.php',
		data: th.serialize(),
		// eslint-disable-next-line func-names
	}).done(() => {
		console.log("otpravleno")
		$(".popup-background").fadeOut();
			$(".greateful-background").fadeIn();
		setTimeout(function() {
			$(".greateful-background").fadeOut();
			$("html,body").css("overflow","visible");},2000);
		th.trigger('reset');
	});

	return false;
	}
});
});