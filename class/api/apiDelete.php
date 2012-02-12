<?php
class apiDelete extends Controller_Api
{
    protected function post($aArgs)
    {
        require_once('builder/builderInterface.php');
         usbuilder()->init($this->Request->getAppID(), $aArgs);
        
        //database
        $oModel = new modelExec();
        $bDeleted = $oModel->execDeleteData(3," idx IN (".$aArgs['get_idx'].")");
       
        return $bDeleted;
        
    }
}