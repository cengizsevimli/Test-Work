/* $(document).ready(function() {
	$(".megamenu").on("click", function(e) {
		e.stopPropagation();
	});
}); */

let loadMoreCount = 0;
let cartListCount = 0;
let wishlistListCount =0;

function ajaxCall(){
	$.ajax({
		
		url: "js/data.json",
		dataType:"json",
		type:"GET",
		success: (data) => {
			console.log(data.products[loadMoreCount].name);
			console.log(data.products[loadMoreCount].url);
			console.log(data.products[loadMoreCount].price);
			let html;           
			html = $('#loadMoreProductsTemplate').html();
			for(let i=1; i<5; i++){
				 html = html.replace("_url"+[i],data.products[loadMoreCount].url ) 
				html = html.replace("_alt"+[i], data.products[loadMoreCount].name )
				html = html.replace("_name"+[i], data.products[loadMoreCount].name )
				html = html.replace("_price"+[i], data.products[loadMoreCount].price )

				loadMoreCount++;
			}

			$("#product").append(html); 
			ajaxCall1.style.display='none'
		},
		error: (error) => {
			console.log(error);
		}
	})
}

function addCartList(){
	cartListCount++;
	$(".cartItemNumber").text(cartListCount);
}
function addWishlistList(){
	wishlistListCount++;
	$(".wishlistItemNumber").text(wishlistListCount);
}


$(".add-to-wishlist-button").on("click" , addWishlistList);
$(".add-to-cart-button").click(addCartList);
$("#ajaxCall1").click(ajaxCall);






    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
	});
	




	function CheckPassword(inputpsw,inputmail) 
{ 
	var mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var passw=  /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
if(inputpsw.value.match(passw) && inputmail.value.match(mail) ) 
{ 
alert('Correct formats of mail and password...')
return true;
}
else
{ 
alert('Wrong format of mail or password! Password should be  At least 6 characters length, contain 1 numeric, 1 uppercase letter, 1 special character...!')
return false;
}
}






(function () {
	"use strict";
   
	var cookieName = 'tplCookieConsent'; // The cookie name
	var cookieLifetime = 365; // Cookie expiry in days
   
	/**
	 * Set a cookie
	 * @param cname - cookie name
	 * @param cvalue - cookie value
	 * @param exdays - expiry in days
	 */
	var _setCookie = function (cname, cvalue, exdays) {
	  var d = new Date();
	  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	  var expires = "expires=" + d.toUTCString();
	  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	};
   
	/**
	 * Get a cookie
	 * @param cname - cookie name
	 * @returns string
	 */
	var _getCookie = function (cname) {
	  var name = cname + "=";
	  var ca = document.cookie.split(';');
	  for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
		  c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
		  return c.substring(name.length, c.length);
		}
	  }
	  return "";
	};
   
	/**
	 * Should the cookie popup be shown?
	 */
	var _shouldShowPopup = function () {
	  if (_getCookie(cookieName)) {
		return false;
	  } else {
		return true;
	  }
	};
   
	// Show the cookie popup on load if not previously accepted
	if (_shouldShowPopup()) {
	  $('#cookieModal').modal('show');
	}
   
	// Modal dismiss btn - consent
	$('#cookieModalConsent').on('click', function () {
	  _setCookie(cookieName, 1, cookieLifetime);
	});
   

	   

  })();

 /* $("#cookieModal").delay(10000).fadeIn(400);
  setTimeout(function() {
	$('#cookieModal').modal();
}, 10000);*/

/*$(window).load(function(){
	setTimeout(function(){
		$('#myModal').modal('show');
	}, 10000);
 });

 $("#delayedPopup").delay(10000).fadeIn(400); */




 /*setTimeout(function() {
	$('#cookieModal').find('.item').first().addClass('active');
	$('#cookieModal').modal({
		backdrop: 'static',
		keyboard: false
	});
}, 10000);*/



/*setTimeout(function () {
	$("#cookieModal").dialog("open");
}, 2000);*/


/* document.querySelector("#ajaxCall1").addEventListener("click", addCardList); */






