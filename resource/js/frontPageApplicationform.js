var frontPageApplicationform= {
		
		/*save settings*/
		form_submit: function(form){
			
			/*gather variables*/
			var valid = true;
			var position = ($(".application_form_position").length) ? $(".application_form_position").val() : "NA";
			var salary = ($(".application_form_salary").length) ? $(".application_form_salary").val() : "NA";
			var name = ($(".application_form_name").length) ? $.trim($(".application_form_name").val()) : "NA";
			var address = ($(".application_form_address").length) ? $.trim($(".application_form_address").val()) : "NA";
			var contactnum = ($(".application_form_contactnum").length) ? $.trim($(".application_form_contactnum").val()) : "NA";
			var email = ($(".application_form_email").length) ? $.trim($(".application_form_email").val()) : "NA";
			var reemail = ($(".application_form_reemail").length) ? $.trim($(".application_form_reemail").val()) : "NA";
			var yr_exp = ($(".application_form_yr_exp").length) ? $.trim($(".application_form_yr_exp").val()) : "NA";
			var des_car = ($(".application_form_des_car").length) ? $.trim($(".application_form_des_car").val()) : "NA";
			
			var checker = frontPageApplicationform.check_sdk_values();
			
			
			
			
			if(checker['bExist'] === false){
				
				var sdk_values = checker['sVal'].split("+");
				var sValues = '';
				
				
				
				$.each(sdk_values, function(){
					 sValues += "{$"+this+"}<br/>";
				});
				
				$(".applicationform_errmess").remove();
				$("body").children().eq(0).css("position","relative");
				$("body").children().eq(0).prepend("<div class='applicationform_errmess' ></div>");
				$(".applicationform_errmess").empty().append("Expecting <br/> "+sValues+" on file. <br /><br /><img src='/_sdk/img/applicationform/warn.png' >");
				$(".applicationform_errmess").show(0).delay(3000).fadeOut("slow");
				
				return;
				
			}
		
	        /*validate*/
			var elem = "application_form";
			if(position != "NA"){
				var valid_position = frontPageApplicationform.validate(elem+"_position",position);
				if(valid_position == false)
					valid = false;
			}
			
			if(salary != "NA"){
				var valid_salary =frontPageApplicationform.validate(elem+"_salary",salary);
				if(valid_salary == false)
					valid = false;
			}
					
			if(name != "NA"){
			var valid_name = frontPageApplicationform.validate(elem+"_name",name);
				if(valid_name == false)
					valid = false;
			}
			
			if(address != "NA"){
				var valid_address = frontPageApplicationform.validate(elem+"_address",address);
				if(valid_address == false)
					valid = false;
			}
			
			if(contactnum != "NA"){
				var valid_contactnum = frontPageApplicationform.validate(elem+"_contactnum",contactnum);
				if(valid_contactnum == false)
					valid = false;
			}
			
			if(email != "NA"){
				var valid_email = frontPageApplicationform.validate(elem+"_email",email);
				if(valid_email == false)
					valid = false;
			}
			
			if(reemail != "NA"){
				var valid_email = frontPageApplicationform.validate(elem+"_reemail",reemail);
				if(valid_email == false)
					valid = false;
			}
			
			if(yr_exp != "NA"){
				if(yr_exp != ""){
					var valid_yr_exp = frontPageApplicationform.validate(elem+"_yr_exp",yr_exp);
					if(valid_yr_exp == false)
						valid = false;
				}
				
			}
			
			if(des_car != "NA"){
				if(des_car != ""){
				var valid_des_car = frontPageApplicationform.validate(elem+"_des_car",des_car);
				if(valid_des_car == false)
					valid = false;
				}
			}
			
			if(valid == true){
				/*ajax submit*/
				$.ajax({  
					url: usbuilder.getUrl("apiExec"),
					type: 'post',
					dataType: 'json',
					data: {
					get_position: position,
					get_salary: salary,
					get_name: name,
					get_address: address,
					get_contactnum: contactnum,
					get_email: email,
					get_yr_exp: yr_exp,
					get_des_car: des_car
					
				},
					success: function(data){
					
						if(data.Data === true){
							$(".applicationform_mess").remove();
							$("body").children().eq(0).css("position","relative");
							$("body").children().eq(0).prepend("<div class='applicationform_mess' ></div>");
							$(".applicationform_mess").empty().append("Application saved <br /> successfully! <br /><br /><img src='/_sdk/img/applicationform/save.png' >");
							$(".applicationform_mess").show(0).delay(3000).fadeOut("slow", function(){frontPageApplicationform.reset_default();});
							
						}else {
							$(".applicationform_errmess").remove();
							$("body").children().eq(0).css("position","relative");
							$("body").children().eq(0).prepend("<div class='applicationform_errmess' ></div>");
							$(".applicationform_errmess").empty().append("Error saving <br /> application. <br /><br /><img src='/_sdk/img/applicationform/warn.png' >");
							$(".applicationform_errmess").show(0).delay(3000).fadeOut("slow");
						}
				
					}
				});
		
				
			}
					
			
		},
		
		/*check if all sdk needed values exist */
		check_sdk_values: function(){
			
			var aReturn = new Array();
			var exist_all = true;
			var sSdk_values = '';
			
			var aSdk_val = new Array("application_form_name","application_form_email","application_form_reemail");
			
			$.each(aSdk_val, function(i, val) {
				
				if($("."+val).length <= 0){
					sSdk_values += '+'+val;
					exist_all = false;
				}
				
			});
		
			aReturn['bExist'] = exist_all;
			aReturn['sVal'] = sSdk_values.substr(1);
				
			return aReturn;
			
		},
		
		/*validate the values*/
		validate: function(type,val){
			var elem = "application_form";
			 
			switch(type){
			case elem+"_position":
				if(val == "-option-"){$("."+type).addClass("invalid");return false;}else{return true;}
				break;
				
			case elem+"_salary":
				if(val == "-option-"){
					$("."+type).addClass("invalid");return false;}else{return true;}
				break;
				
			case elem+"_name":
				if(val.length < 5){
					$("."+type).addClass("invalid");
					return false;
					}else{return true;}
				break;
				
			case elem+"_address":
				if(val.length < 5){
					$("."+type).addClass("invalid");return false;}else{return true;}
				break;
				
			case elem+"_contactnum":
				if(val.length < 5){
					$("."+type).addClass("invalid");return false;}else{return true;}
				break;
				
			case elem+"_email":
				if(frontPageApplicationform.validateEmail(val) == false){
					$("."+type).addClass("invalid");return false;}else{return true;}
				break;
				
			case elem+"_reemail":
				if(frontPageApplicationform.validateEmail(val) == false || $("."+type).val() != $("."+elem+"_email").val()){
					$("."+type).addClass("invalid");return false;}else{return true;}
				break;
			
			case elem+"_yr_exp":
				if(isNaN(val) || val == ""){
					$("."+type).addClass("invalid");return false;}else{return true;}
				break;
				
				
			case elem+"_des_car":
				if(val.length > 10000){
					$("."+type).addClass("invalid");return false;}else{return true;}
				break;	
				
			}
			
		},
		
		/*validate email*/
		validateEmail: function(email) { 
		    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    return re.test(email);
		},
		
		/*reset to default*/
		reset_default: function(){
			
			$(".application_form_position").val($(".target option:first").val());
			$(".application_form_salary").val($(".target option:first").val());
			
			/*give default style*/
			$(".application_form_name,.application_form_address,.application_form_contactnum,.application_form_email,.application_form_reemail,.application_form_yr_exp,.application_form_des_car").val("");
			$(".application_form_position,.application_form_salary,.application_form_name,.application_form_address,.application_form_contactnum,.application_form_email,.application_form_reemail,.application_form_yr_exp,.application_form_des_car").removeClass("invalid");
			
		}
		
		
}

$(document).ready(function(){
	
	$(".submit").click(function(){
		
		 frontPageApplicationform.form_submit();
		
	});
	
	$(".reset").click(function(){
		
		frontPageApplicationform.reset_default();
		
	});
	
	/*validate element on keyup*/
	$(".application_form_name,.application_form_address,.application_form_contactnum,.application_form_email,.application_form_reemail,.application_form_yr_exp,.application_form_des_car").keyup(function() {
		var selector = $(this).attr('class');
		if(frontPageApplicationform.validate($.trim(selector.replace("invalid","")),$.trim($(this).val())) == true){
			$(this).removeClass("invalid");
		}
	});
	
	/*validate dropdown on change*/
	$('.application_form_position, .application_form_salary').change(function() {
		if($(this).val() == "-option-"){
			$(this).addClass("box");
		}else{
			$(this).removeClass("box");
			$(this).removeClass("invalid");
		}
	});
	
	
});