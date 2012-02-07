<?php
class adminPageSettings extends Controller_Admin
{

	protected $oGet;

    protected function run($aArgs)
    {

    require_once('builder/builderInterface.php');
    $sInitScript = usbuilder()->init($this->Request->getAppID(), $aArgs);
    $this->writeJs($sInitScript);

 	/*assign objects
    $this->oGet = new modelGet;*/
    

	$this->display($aArgs);

    }

    protected function display($aArgs){

    	/*define page*/
    	$APP_NAME = "applicationform";
    	$this->assign("APP_NAME",$APP_NAME);
    	
    	/*assign url*/
    	$sUrl = usbuilder()->getUrl(__CLASS__);
    	$this->assign("sUrl",$sUrl);
    	
    	/*needed files
    	$this->importJS(__CLASS__);
    	$this->importCSS(__CLASS__);*/
    	
    	
    	
    	/*save form validator
    	usbuilder()->validator(array('form' => $APP_NAME.'_form'));*/
    	
    	/*set the user setting
    	$aUserSetting = $this->oGet->getRow(2,null);*/
    	
    	
    	/*set default values
    	if(empty($aUserSetting) || isset($aArgs['applicationform_reset'])){
    		$aUserSetting = array(
    				'username' => "skype.user",
    				'image_type' => "balloon",
    				'timer' => 5000,
    				"custom"=> "0"
    				);
    	
    	}*/
    	
    	
    	
 
    	
    	/*assign settings
    	$this->assign("aUserSetting",$aUserSetting);*/
    	
    	

    	/*set the template*/
    	$this->view(__CLASS__);

    }
}
