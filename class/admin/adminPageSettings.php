<?php
class adminPageSettings extends Controller_Admin
{

	protected $oGet;

    protected function run($aArgs)
    {

    require_once('builder/builderInterface.php');
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
    	
    	/*needed files*/
    	$this->importJS("jquery.print");
    	$this->importJS(__CLASS__);
    	
    	$this->importCSS(__CLASS__);
    	
    	/*to get the value of form using get includes page*/
    	$sFormScript = usbuilder()->getFormAction('applicationform_search_form','adminPageSettings');
    	$this->writeJs($sFormScript);
    	
    	usbuilder()->validator(array('form' => 'applicationform_search_form'));
    
    	$sKeyword = ($aArgs['applicationform_keyword'])?$aArgs['applicationform_keyword']:"";
    	$sWhere = ($aArgs['applicationform_search_field'])?" WHERE ".$aArgs['applicationform_search_field']." LIKE  '%".$sKeyword."%' ":null;
    	
    	//pagination
    	$iRows = ($aArgs['iRows'])?$aArgs['iRows']:10;
    	$iPage = $aArgs['page'] ? $aArgs['page'] : 1;
    	$iDbRowCount = $this->oGet->getTbCountRows(3,$sWhere);
    	$this->assign('pagination', usbuilder()->pagination($iDbRowCount, $iRows));
    	
    	//offset formula
    	$iPage = (($iPage) -1) * $iRows;
    	
    	$aOptions = array(
    			"offset" =>  $iPage,
    			"limit" => $iRows
    	);
    	
    	
    	
    	/*set the user setting$oModel->getTbAllData*/
    	$aUserSetting = $this->oGet->getTbAllData(3,$sWhere,$aOptions);
    	
    	$sDate_format = 'm/d/Y';
    	$aData = array();
    	$iNum = $iPage+1;
    	
    	
    	foreach($aUserSetting as $key=>$val){
    		
    		$aData[$key]['idx'] = $val['idx'];
    		$aData[$key]['num'] = $iNum;
    		$aData[$key]['name'] = $val['name'];
    		$aData[$key]['position'] = $val['position'];
    		$aData[$key]['date_reg'] = date($sDate_format, $val['date_reg']);
    		
    		$iNum++;
    	}
    	
    	
    	/*assign settings*/
    	$this->assign("iRows",$iRows);
    	$this->assign("sKeyword",$sKeyword);
    	$this->assign("iCountData",$iDbRowCount);
    	$this->assign("aData",$aData);
    	
    	

    	/*set the template*/
    	$this->view(__CLASS__);

    }
}
