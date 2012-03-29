<?php
class frontPageApplicationform extends Controller_Front{

	protected $oGet;

    protected function run($aArgs)
    {

    require_once('builder/builderInterface.php');
	usbuilder()->init($this, $aArgs);
    
 	/*assign objects*/
    $this->oGet = new modelGet;
    
    session_unset($_SESSION['seq']);
 
	$this->display($aArgs);

    }

    protected function display($aArgs){
		
    	/*define page*/
    	$APP_NAME = "applicationform";
    	$this->assign("APP_NAME",$APP_NAME);
    	
    	/*assign url*/
    	$sUrl = usbuilder()->getUrl(__CLASS__);
    	$this->assign("sUrl",$sUrl);
    	
    	/*needed files*/
    	$this->importCSS(__CLASS__);
    	
    	/*sequence session*/
    	$iSeq = $this->getSequence();
    	$aUserSetting = $this->oGet->getRow(2,"seq =".$iSeq);
    	
    	$sHTML_title = (empty($aUserSetting))?"Application form":$aUserSetting['title'];
    	
    	/*new code*/
    	$sHTML_position = 'application_form_position';
    	
    	$aPosition = array(
    			"-option-",
				"HR Assistant",
				"Illustrator",
				"Web Designer",
				"Html Coder",
				"Marketer",
				"SEO Assistant",
				"Web Product Planner",
    			"PHP Programmer",
    			"IT Staff",
				"QA Tester" );
    	
    	$sHTML_position_opt = '';
    	foreach($aPosition as $key=>$val){
    		$sHTML_position_opt .= '<option value="'.$val.'" >'.$val.'</option>';
    	}
    	
    	/*salary*/
    	$sHTML_salary = 'application_form_salary';
    	
    	$aSalary = array(
    			"-option-",
    			"above 20,000",
    			"15,000 - 20,000",
    			"10,000 - 15,000",
    			"below 10,000" );
    	
    	$sHTML_salary_opt = '';
    	foreach($aSalary as $key=>$val){
    		$sHTML_salary_opt .= '<option value="'.$val.'" >'.$val.'</option>';
    	}
    	
    
    	$sHTML_seq = '<input type="hidden" class="SEQ" value="'.$iSeq.'" />';
    	$sHTML_name = 'application_form_name';
    	$sHTML_address = 'application_form_address';
    	$sHTML_contactnum = 'application_form_contactnum';
    	$sHTML_email = 'application_form_email';
    	$sHTML_reemail = 'application_form_reemail';
    	$sHTML_yr_exp = 'application_form_yr_exp';
    	$sHTML_des_car = 'application_form_des_car';
    	$sHTML_save = 'submit';
    	$sHTML_reset = 'reset';
    	
		/*assigns*/
    	$this->assign("title",$sHTML_title);
    	$this->assign("position",$sHTML_position);
    	$this->assign("position_option",$sHTML_position_opt);
    	$this->assign("salary",$sHTML_salary);
    	$this->assign("salary_option",$sHTML_salary_opt);
    	
    	$this->assign("seq",$sHTML_seq);
    	$this->assign("name",$sHTML_name);
    	$this->assign("address",$sHTML_address);
    	$this->assign("contactnum",$sHTML_contactnum);
    	$this->assign("email",$sHTML_email);
    	$this->assign("reemail",$sHTML_reemail);
    	$this->assign("year_experience",$sHTML_yr_exp);
    	$this->assign("career_desc",$sHTML_des_car);
    	
    	$this->assign("save_button",$sHTML_save);
    	$this->assign("reset_button",$sHTML_reset);
    	
  
    	$this->init_js($aArgs);
    }
    
    protected function init_js($aArgs){
    	
    	$sJs = '
		sdk_Module("'.usbuilder()->getModuleSelector().'").ready(function($M){
			
			var frontPageApplicationform= {
		
				/*save settings*/
				form_submit: function(form){
					
					/*gather variables*/
					var valid = true;
					var position = ($M(".application_form_position").length) ? $M(".application_form_position").val() : "NA";
					var salary = ($M(".application_form_salary").length) ? $M(".application_form_salary").val() : "NA";
					var name = ($M(".application_form_name").length) ? $.trim($M(".application_form_name").val()) : "NA";
					var address = ($M(".application_form_address").length) ? $.trim($M(".application_form_address").val()) : "NA";
					var contactnum = ($M(".application_form_contactnum").length) ? $.trim($M(".application_form_contactnum").val()) : "NA";
					var email = ($M(".application_form_email").length) ? $.trim($M(".application_form_email").val()) : "NA";
					var reemail = ($M(".application_form_reemail").length) ? $.trim($M(".application_form_reemail").val()) : "NA";
					var yr_exp = ($M(".application_form_yr_exp").length) ? $.trim($M(".application_form_yr_exp").val()) : "NA";
					var des_car = ($M(".application_form_des_car").length) ? $.trim($M(".application_form_des_car").val()) : "NA";
					
					var checker = frontPageApplicationform.check_sdk_values();
					
					
					
					
					if(checker[\'bExist\'] === false){
						
						var sdk_values = checker[\'sVal\'].split("+");
						var sValues = \'\';
						
						
						
						$.each(sdk_values, function(){
							 sValues += "{$"+this+"}<br/>";
						});
						
						$M(".applicationform_errmess").remove();
						$M("body").children().eq(0).css("position","relative");
						$M("body").children().eq(0).prepend("<div class=\'applicationform_errmess\' ></div>");
						$M(".applicationform_errmess").empty().append("Expecting <br/> "+sValues+" on file. <br /><br /><img src=\'/_sdk/img/applicationform/warn.png\' >");
						$M(".applicationform_errmess").show(0).delay(3000).fadeOut("slow");
						
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
							type: "post",
							dataType: "json",
							data: {
							get_seq: $M(".SEQ").val(),
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
								
									var sText = "Saved successfully";
									if($M(".message").html() == ""){
										$M(".message").html(sText).show(0).delay(2000).fadeOut("medium", function(){frontPageApplicationform.reset_default();});
									}else{
    									$M(".message").show(0).delay(2000).fadeOut("medium", function(){frontPageApplicationform.reset_default();});
    								}
    								
								}else {
								
									var sText = "Error saving";
									if($M(".message").html() == ""){
										$M(".message").html(sText).show(0).delay(2000).fadeOut("medium");
									}else{
    									$M(".message").show(0).delay(2000).fadeOut("medium");
    								}
									
								}
						
							}
						});
				
						
					}
							
					
				},
				
				
				
				
				/*check if all sdk needed values exist */
				check_sdk_values: function(){
					
					var aReturn = new Array();
					var exist_all = true;
					var sSdk_values = "";
					
					var aSdk_val = new Array("application_form_name","application_form_email","application_form_reemail");
					
					$.each(aSdk_val, function(i, val) {
						
						if($M("."+val).length <= 0){
							sSdk_values += "+"+val;
							exist_all = false;
						}
						
					});
				
					aReturn[\'bExist\'] = exist_all;
					aReturn[\'sVal\'] = sSdk_values.substr(1);
						
					return aReturn;
					
				},
				
				/*validate the values*/
				validate: function(type,val){
					var elem = "application_form";
					 
					switch(type){
					case elem+"_position":
						if(val == "-option-"){$M("."+type).addClass("invalid");return false;}else{return true;}
						break;
						
					case elem+"_salary":
						if(val == "-option-"){
							$M("."+type).addClass("invalid");return false;}else{return true;}
						break;
						
					case elem+"_name":
						if(val.length < 5){
							$M("."+type).addClass("invalid");
							return false;
							}else{return true;}
						break;
						
					case elem+"_address":
						if(val.length < 5){
							$M("."+type).addClass("invalid");return false;}else{return true;}
						break;
						
					case elem+"_contactnum":
						if(val.length < 5){
							$M("."+type).addClass("invalid");return false;}else{return true;}
						break;
						
					case elem+"_email":
						if(frontPageApplicationform.validateEmail(val) == false){
							$M("."+type).addClass("invalid");return false;}else{return true;}
						break;
						
					case elem+"_reemail":
						if(frontPageApplicationform.validateEmail(val) == false || $("."+type).val() != $("."+elem+"_email").val()){
							$M("."+type).addClass("invalid");return false;}else{return true;}
						break;
					
					case elem+"_yr_exp":
						if(isNaN(val) || val == ""){
							$M("."+type).addClass("invalid");return false;}else{return true;}
						break;
						
						
					case elem+"_des_car":
						if(val.length > 10000){
							$M("."+type).addClass("invalid");return false;}else{return true;}
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
					
					$M(".application_form_position").val($M("#target option:first").val());
					$M(".application_form_salary").val($M("#target option:first").val());
					
					/*give default style*/
					$M(".application_form_name,.application_form_address,.application_form_contactnum,.application_form_email,.application_form_reemail,.application_form_yr_exp,.application_form_des_car").val("");
					$M(".application_form_position,.application_form_salary,.application_form_name,.application_form_address,.application_form_contactnum,.application_form_email,.application_form_reemail,.application_form_yr_exp,.application_form_des_car").removeClass("invalid");
					
				}
				
				
		};
		
			
			$M(".submit").click(function(){
				
				 frontPageApplicationform.form_submit();
				
			});
			
			$M(".reset").click(function(){
				
				frontPageApplicationform.reset_default();
				
			});
			
			/*validate element on keyup*/
			$M(".application_form_name,.application_form_address,.application_form_contactnum,.application_form_email,.application_form_reemail,.application_form_yr_exp,.application_form_des_car").keyup(function() {
				var selector = $(this).attr(\'class\');
				if(frontPageApplicationform.validate($.trim(selector.replace("invalid","")),$.trim($M(this).val())) == true){
					$M(this).removeClass("invalid");
				}
			});
			
			/*validate dropdown on change*/
			$M(".application_form_position, .application_form_salary").change(function() {
				if($M(this).val() == "-option-"){
					$M(this).addClass("box");
				}else{
					$M(this).removeClass("box");
					$M(this).removeClass("invalid");
				}
			});

				
    	});';
    
    	$this->writeJs($sJs);
    
    }
    
}
