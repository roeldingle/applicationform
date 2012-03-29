<?php
class adminPageSettings extends Controller_Admin
{
	protected $oGet;
	protected function run($aArgs)
	{
	
		require_once('builder/builderInterface.php');
		usbuilder()->init($this, $aArgs);
		/*assign objects*/
		$this->oGet = new modelGet;
		$this->display($aArgs);
		
		}
		
		protected function display($aArgs){
		
			/*define page*/
			$APP_NAME = "applicationform";
			$this->assign("APP_NAME",$APP_NAME);
		
			/*needed files*/
			$this->importJS(__CLASS__);
			$this->importCSS(__CLASS__);
		
		/*save form validator*/
    	usbuilder()->validator(array('form' => $APP_NAME.'_form'));
    	
    	/*sequence*/
    	$iSeq = $aArgs['seq'];
    	$this->assign('iSeq', $iSeq);
    	
    	/*set the user setting*/
    	$aUserSetting = $this->oGet->getRow(2,"seq =".$iSeq);
    	
    	
    	/*set default values*/
    	if(empty($aUserSetting) || isset($aArgs[$APP_NAME.'_reset'])){$aUserSetting = array('title' => "");}
    	
    	$this->assign("aUserSetting", $aUserSetting);
		
			/*for the additional links in the settins page*/
			$this->assign("bExtensionView", ($aArgs['etype'] ? 1 : 0));
		
			/*set the template*/
			$this->view(__CLASS__);
		
		}
	

}