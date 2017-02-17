//if(jQuery("body.checkout-cart-index").length == "" ) {
var hdata = jQuery(".messages").text();
var hdata ='';
var hdata = jQuery(".messages li:first").html();

var isRegistrationPage = false;
if ($j('body').hasClass('marketplace-seller-login')!=false) { 
	isRegistrationPage = true;
} else if ($j('body').hasClass('customer-account-login')) { 
	isRegistrationPage = true;
}

if (isRegistrationPage) {
	var helperVar = '';
	jQuery(".messages li:first ul li").each(function() { 
		//console.log($j(this).text());
		if (helperVar=='') { 
			hdata = $j(this).html()+"<br>";
		} else if (helperVar!=$j(this).text()) { 
			hdata += $j(this).html()+"<br>";
		}
		//console.log(hdata);
		helperVar = $j(this).html();
	});
}

jQuery( window ).load( function($){
	
	try {
		if (promoMsg!=='coupon_code') { 
			if(jQuery("body.checkout-cart-index").length != "" ) {
				console.log('inside body.checkout-cart-index');
				return;
			}
		}
	} catch(err) { 
		console.log(err);
	}
	
	if(hdata){

        jQuery.alert({
            title: msgTitle,
            confirmButtonClass: 'btn-info',
            content: hdata, // You can also LOAD the html data using LOAD FROM URL feature,
			confirmButton: confirmBTN
        });
    }
    jQuery('#tools-button').find('li').find('a').click(function(){
		setTimeout(function(){
		jQuery('#tools-button').find('li').find('a').show();
		},2);
    });

});
    //autoClose: 'cancel|6000';
   jQuery(".messages").hide();
//}

function popupValidation () {

}




