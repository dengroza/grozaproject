

  function popupcallback (){
    $('.popup').addClass('popup-open');
    // $(".popup-background").fadeIn();
    $("html,body").css("overflow","hidden");
					
                    }	


function hidecallback() {
    $('.popup').removeClass('popup-open');
    // $(".popup-background").fadeOut();
    $("html,body").css("overflow","visible");
    // $(".greateful-background").fadeIn();

//         setTimeout(function() {
//     $(".greateful-background").fadeOut();


// },2000);
}

// function hidecallbackk() {
//     $(".popup-input").removeClass("error");

// //		name = $(".popup-name").val("");
// //			text = $(".popup-phone").val("");

//     $(".popup-background").fadeOut();
//     $("html,body").css("overflow","visible");
// //		$(document).bind('touchmove', true);

// }
    

$("body").on("click", ".header-button", popupcallback);
 $("body").on("click", ".close", hidecallback);


 


$('form').each(function () {
	$(this).validate({
		errorPlacement(error, element) {
			return true;
		},
		focusInvalid: false,
		rules: {
			phone: {
				required: true,
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
		url: 'mail.php',
		data: th.serialize(),
		// eslint-disable-next-line func-names
	}).done(() => {
        
		th.trigger('reset');
	});

	return false;
	}
});
});

function active_menu (){
	$(this).children().toggleClass("menu-icon-active");
	$(".toggle-menu").slideToggle();
}


$("body").on("click", ".menu-icon-wrapper", active_menu);