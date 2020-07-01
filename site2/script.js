$(document).ready(function(){

	function popup (){
		$(".toggle-menu").slideToggle();
		$(this).addClass("close");
		$(this).children().toggleClass("icon-active");
		$("html,body").css("overflow","hidden");
		$(document).bind('touchmove', false);					
						}

//	function popup(){
//		$("#popup, #popup-back").fadeIn();
//		$("html,body").css("overflow","hidden");
//		$(document).bind('touchmove', false);
		
		

//	}
	function hide() {
		$(this).removeClass("close");
		$("html,body").css("overflow","visible");
		$(document).bind('touchmove', true);
		
	}
	//61461a40374b3d34bef2180927fd5ea1
	
		$.get("http://data.fixer.io/api/latest",{"access_key":"61461a40374b3d34bef2180927fd5ea1"},
			function(response){
				console.log(response.base);
				let euro = (response.rates.RUB);
				let dollar = (response.rates.RUB/response.rates.USD);
				$("#eurjs").text(euro.toFixed(3));
				$("#usdjs").text(dollar.toFixed(3));
				}
			);

	$("body").on("click", ".toggle-button", popup);
	$("body").on("click", ".toggle-button.close", hide);
	
	



});