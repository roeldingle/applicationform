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
    	$this->importJS(__CLASS__);
    	$this->importCSS(__CLASS__);
    	
    	/*sequence session*/
    	$_SESSION['seq'] = $this->getSequence();
    	
    	/*new code*/
    	$sHTML_position = 'id="application_form_position" title="Position" ';
    	
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
    	$sHTML_salary = 'id="application_form_salary" title="salary" ';
    	
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
    	
    	
    	$sHTML_name = 'id="application_form_name" title="Name" ';
    	$sHTML_address = 'id="application_form_address" title="Address" ';
    	$sHTML_contactnum = 'id="application_form_contactnum" title="Contactnum" ';
    	$sHTML_email = 'id="application_form_email" title="Email" ';
    	$sHTML_reemail = 'id="application_form_reemail" title="Reemail" ';
    	$sHTML_yr_exp = 'id="application_form_yr_exp" title="Yr_exp" ';
    	$sHTML_des_car = 'id="application_form_des_car" title="Des_car" ';
    	$sHTML_save = 'frontPageApplicationform.form_submit();';
    	$sHTML_reset = 'frontPageApplicationform.reset_default();';
    	
		/*assigns*/
    	$this->assign("application_form_position",$sHTML_position);
    	$this->assign("sHTML_position_opt",$sHTML_position_opt);
    	$this->assign("application_form_salary",$sHTML_salary);
    	$this->assign("sHTML_salary_opt",$sHTML_salary_opt);
    	
    	$this->assign("application_form_name",$sHTML_name);
    	$this->assign("application_form_address",$sHTML_address);
    	$this->assign("application_form_contactnum",$sHTML_contactnum);
    	$this->assign("application_form_email",$sHTML_email);
    	$this->assign("application_form_reemail",$sHTML_reemail);
    	$this->assign("application_form_yr_exp",$sHTML_yr_exp);
    	$this->assign("application_form_des_car",$sHTML_des_car);
    	
    	$this->assign("sHTML_save",$sHTML_save);
    	$this->assign("sHTML_reset",$sHTML_reset);
    	
  
    }
    
}
