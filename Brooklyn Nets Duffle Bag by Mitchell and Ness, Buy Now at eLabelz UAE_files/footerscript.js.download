function adjustProductAttributes() {

	var configurabeSizeQty 		= $j(".product-view .configurabe_size_qty");
	var isCountryWiseSizeExist 	= configurabeSizeQty.find("#size_country").length;
	var isQuantityExist 		= configurabeSizeQty.find(".qty-wrapper").length;

	if (isCountryWiseSizeExist) {
		var countryOptions = configurabeSizeQty.find("#size_country").html();
		configurabeSizeQty.find("#size_country").remove();
		$j('#attribute-148-container').prepend("<select id='size_country'>"+countryOptions+"</select><br>");
	}
	if (isQuantityExist) {
		var qtyOptions = configurabeSizeQty.find(".qty-wrapper").html();
		configurabeSizeQty.find(".qty-wrapper").remove();
		$j('#attribute-148-container').after("<div class='qty-wrapper'>"+qtyOptions+"</div>");
	}

	//console.log(isCountryWiseSizeExist + ' country size');
	//console.log(isQuantityExist + ' quantity');

	var curheight = jQuery("#attribute-148-container").innerHeight();
	console.log(curheight);
	if (curheight) {
		if (curheight <= 38) {
			//jQuery(".product-view .configurabe_size_qty").css("margin-top", "-84px");
			jQuery(".product-view .detailpagewrrapperouter").css("margin-top", "-26px");
		}else if (curheight > 38 && curheight <= 76) {
			//jQuery(".product-view .configurabe_size_qty").css("margin-top", "-124px");
			jQuery(".product-view .detailpagewrrapperouter").css("margin-top", "-64px");
		} else if (curheight > 76 && curheight <= 114) {
			//jQuery(".product-view .configurabe_size_qty").css("margin-top", "-162px");
			jQuery(".product-view .detailpagewrrapperouter").css("margin-top", "-102px");
		} else if (curheight > 114 && curheight <= 152) {
			//jQuery(".product-view .configurabe_size_qty").css("margin-top", "-200px");
			jQuery(".product-view .detailpagewrrapperouter").css("margin-top", "-140px");
		} else if (curheight > 152 && curheight <= 228) {
			//jQuery(".product-view .configurabe_size_qty").css("margin-top", "-200px");
			jQuery(".product-view .detailpagewrrapperouter").css("margin-top", "-178px");
		} else if (curheight > 228 && curheight <= 266) {
			//jQuery(".product-view .configurabe_size_qty").css("margin-top", "-200px");
			jQuery(".product-view .detailpagewrrapperouter").css("margin-top", "-216px");
		} else if (curheight > 266 && curheight <= 304) {
			//jQuery(".product-view .configurabe_size_qty").css("margin-top", "-200px");
			jQuery(".product-view .detailpagewrrapperouter").css("margin-top", "-254px");
		}
	}

}
jQuery(document).ready(function(e) {

	adjustProductAttributes();

	jQuery('#file').click(function() {
		jQuery('#bulk-product-upload-csv-file').click();
	});
	jQuery('#bulk-product-upload-csv-file').change(function() {
		var file_name = jQuery(this).val();

		if(file_name.lastIndexOf('/')>0)
			file_name = file_name.substring(file_name.lastIndexOf('/') + 1); 

		if(file_name.lastIndexOf('\\')>0)
			file_name = file_name.substring(file_name.lastIndexOf('\\') + 1); 

		jQuery('.fpath').text( file_name );
	});

	jQuery('#file2').click(function() {
		jQuery('#bulk-product-upload-image-file').click();
	});
	jQuery('#bulk-product-upload-image-file').change(function() {
		var file_name = jQuery(this).val();

		if(file_name.lastIndexOf('/')>0)
			file_name = file_name.substring(file_name.lastIndexOf('/') + 1); 

		if(file_name.lastIndexOf('\\')>0)
			file_name = file_name.substring(file_name.lastIndexOf('\\') + 1); 
		jQuery('.fpath2').text(file_name);
	});


	jQuery('.addprofile #file1').click(function() {
		jQuery('.addprofile #store_logo').click();
	});
	jQuery('.addprofile #store_logo').change(function() {
		jQuery('.fpath1').text(jQuery(this).val());
	});

	jQuery('.addprofile #file2').click(function() {
		jQuery('.addprofile #store_banner').click();
	});
	jQuery('.addprofile #store_banner').change(function() {
		jQuery('.fpath2').text(jQuery(this).val());
	});


	$j(document).on('click', '.file', function() {
		$j(this).next().click();
	});
	$j(document).on('change', '.ufile',function() {
		$j(this).prev().find('.fpath').text($j(this).val());
	});


	//wrap input with a dive
	$j('body.customer-account input[type="checkbox"]').each(function(){
		//$j(this).wrapAll('<div class="e_c_field"/>');
	});

	// contact cms page script
	jQuery('.cont_file').click(function() {
		jQuery('#attachment').click();
	});
	jQuery('#attachment').change(function() {
		jQuery('.cont_fpath').text(jQuery(this).val());
	});
	var url = window.location.href;
	var array = url.split('/');
	var page_class = array[array.length-2];
	jQuery('.cms-page-view #side-bar .nav ul li').each(function(index,itm){
		var attribute = jQuery(this).attr("data-url");
		if(attribute  == page_class){
			jQuery(this).addClass("active");
		}
	});

});

$j(document).ready(function() {
	$j(".config_product_attr").each( function(){

		$j(document).on("click", ".config_product_attr .quantity_change_btn", function(){
			var attribval =  $j(this).parent().find("select").attr("data-unique-identifier");
			var curruntspan = $j(this).parent().find("span[id='"+attribval+"']");
			//alert(attribval);

			var checknext =  $j(this).parent().next();
			//alert(checknext.html);

			if(checknext.length != null) {
				//alert("yes");
				var nextattrib =  $j(this).parent().next()
				.find("select").attr("data-unique-identifier");

				var nextspan = $j(this).parent().next()
				.find("span[id='"+nextattrib+"']");
				nextspan.hide();
			}
			curruntspan.hide();
			
		});

	});

	$j(".cart_pro_qtn").each( function(){

		$j(document).on("click", ".cart_pro_qtn .quantity_change_btn", function (){
			var lablehtml = $j(this).parent().find(".qty_label").html();
			var finalstring = lablehtml.replace(/\d+/g, '');
			$j(this).parent().find(".qty_label").html(finalstring);
			//alert(finalstring);
		});

	}); 
});


$j(document).ready(function () {
	$j('.newsletter_radio label').click(function () {
		//alert($j(this).attr('for'));
		var checkradio = $j(this).attr('for');

		if(checkradio == "radio01") {
			$j('.newsletter_radio input#radio01').trigger("click");
		}

		if(checkradio == "radio02") {
			$j('.newsletter_radio input#radio02').trigger("click");
		}

		$j('.newsletter_female_signup_submit').trigger("click");
	});

});

//$j(".catalog-product-view .product-img-box").hide();
//$j(".catalog-product-view .product-img-box").css({"pointer-events":"none"});
$j(document).ready(function(){
	//$j(".catalog-product-view .product-img-box").hide();
	$j(".catalog-product-view .product-img-box").css({"pointer-events":"none"});
});

$j(window).load(function() {
	//$j(".catalog-product-view .product-img-box").show();
	$j(".catalog-product-view .product-img-box").css({"pointer-events":"auto"});

});