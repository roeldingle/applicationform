<?php
class apiSort extends Controller_Api
{
	
	
    protected function post($aArgs)
    {

        require_once('builder/builderInterface.php');
		usbuilder()->init($this, $aArgs);
        
         $oGet = new modelGet;
         
         $sort_by = $aArgs['get_sort_by'];
         $sort = $aArgs['get_sort'];
         
    	/*set the user setting*/
    	
    	$aData = $oGet->getRow(3,"idx = ".$aArgs['get_idx']);
    	
    	return $aData;
        
    }

}
