<?php
class apiGet extends Controller_Api
{
	
	
    protected function post($aArgs)
    {

        require_once('builder/builderInterface.php');
         usbuilder()->init($this->Request->getAppID(), $aArgs);
        
         $oGet = new modelGet;
         
    	/*set the user setting*/
    	
    	$aData = $oGet->getRow(3,"idx = ".$aArgs['get_idx']);
    	
    	return $aData;
        
    }

}
