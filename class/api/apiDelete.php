<?php
class apiDelete extends Controller_Api
{
    protected function post($aArgs)
    {
        require_once('builder/builderInterface.php');
		usbuilder()->init($this, $aArgs);
        
        //database
        $oModel = new modelExec();
        $oGet = new modelGet;
         
    	/*set the user setting*/
    	
    	
        $aData['delete'] = $oModel->execDeleteData(3," idx IN (".$aArgs['get_idx'].")");
        $aData['data'] = $oGet->getTbAllData(3," WHERE seq = ".$aArgs['get_seq'],null);
       
        return $aData;
        
    }
}