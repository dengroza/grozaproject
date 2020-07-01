
  function popupcallback (){
    $('.popup').addClass('popup-open');
    $("html,body").css("overflow","hidden");
					}	
					
function hidecallback() {
    $('.popup').removeClass('popup-open');
	$("html,body").css("overflow","visible");}
	

$("body").on("click", ".header-button, .main-button, .tarif-item1-button, .tarif-item2-button", popupcallback);
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


$(document).on("mousemove",function(e){
	var X = ((e.pageX * 1 / 120)+100);
	var Y = ((e.pageY * 1 / 120)-15);
	
	$(".quiz-column-right").css('background-position', X*2 + 'px ' + Y*3 + 'px');
	
});