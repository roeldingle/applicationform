<?php
class frontPageApplicationform extends Controller_Front{

	protected $oGet;

    protected function run($aArgs)
    {

    require_once 'builder/builderInterface.php';
		
	$sInitScript = usbuilder()->init($this->Request->getAppID(), $aArgs);
	$this->writeJs($sInitScript);
    
 	/*assign objects*/
    $this->oGet = new modelGet;
 
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
    	$this->importJS(__CLASS__);
    	$this->importCSS(__CLASS__);


    	/*set the user setting
    	$aUserSetting = $this->oGet->getRow(2,null);*/
    	
    	
    	/*set default values
    	if(empty($aUserSetting) || isset($aArgs['reset'])){
    		$aUserSetting = array(
    				'username' => "skype.user",
    				'image_type' => "balloon",
    				'timer' => 5000,
    				"custom"=> "0"
    				);
    	
    	}*/
    	
    	
    	/*position*/
    	$aPositions = array(
    			"HR Assistant",
    			"Illustrator",
    			"Web Designer",
    			"Html Coder",
    			"Marketer",
    			"SEO Assistant",
    			"Web Product Planner",
    			"QA Tester" );
		
    	$sHTML_position = '';
    	$sHTML_position .= '<span class="application_form_select"><select name="position" title="position" ><option value="none" >-position desired-</option>';
    	
    	foreach($aPositions as $key=>$val){
    		$sHTML_position .= '<option value="'.$val.'" >'.$val.'</option>';
    	}
    	
    	$sHTML_position .= '</select></span>';
    	
    	/*salary*/
    	$aSalary = array(
    			"above 20,000",
    			"15,000 - 20,000",
    			"10,000 - 15,000",
    			"below 10,000" );
    	
    	$sHTML_salary = '';
    	$sHTML_salary .= '<span class="application_form_select"><select name="position" title="position" ><option value="none" >-expected salary-</option>';
    	
    	foreach($aSalary as $key=>$val){
    		$sHTML_salary .= '<option value="'.$val.'" >'.$val.'</option>';
    	}
    	
    	$sHTML_salary .= '</select></span>';
    	
    	
    	/*name*/
    	$sHTML_name = '<span class="application_form_row"><input type="text" name="name" title="name" value="Name" ></span>';
    	
    	/*address*/
    	$sHTML_address = '<span class="application_form_row"><textarea name="address" title="address" >Address</textarea></span>';
    	
    	/*contactnum*/
    	$sHTML_contactnum = '<span class="application_form_row"><input type="text" name="contactnum" title="contactnum" value="Contact number" ></span>';
    	
    	/*email*/
    	$sHTML_email = '<span class="application_form_row"><input type="text" name="email" title="email" value="E-mail" ></span>';
    	
    	/*yr_exp*/
    	$sHTML_yr_exp = '<span class="application_form_row"><input type="text" name="yr_exp" title="yr_exp" value="Year of Experience" ></span>';
    	
    	/*description of career*/
    	$sHTML_des_car = '<span class="application_form_row"><textarea name="des_car" title="des_car"  >Career description</textarea></span>';
    	
    	/*save*/
    	$sHTML_save = '<span class="application_form_save"><input type="submit" name="save" title="save" value="Save" class="application_btn_save" ></span>';
    	
    	/*reset*/
    	$sHTML_reset = '<span class="application_form_reset"><a href="#" name="reset" title="reset" class="application_btn_reset">Reset</a></span>';
    	
    	
		/*assigns*/
    	$this->assign("sHTML_position",$sHTML_position);
    	$this->assign("sHTML_salary",$sHTML_salary);
    	$this->assign("sHTML_name",$sHTML_name);
    	$this->assign("sHTML_address",$sHTML_address);
    	$this->assign("sHTML_contactnum",$sHTML_contactnum);
    	$this->assign("sHTML_email",$sHTML_email);
    	$this->assign("sHTML_yr_exp",$sHTML_yr_exp);
    	$this->assign("sHTML_des_car",$sHTML_des_car);
    	
    	$this->assign("sHTML_save",$sHTML_save);
    	$this->assign("sHTML_reset",$sHTML_reset);
    	
  
    }
    
}