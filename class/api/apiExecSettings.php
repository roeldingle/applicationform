<?php
class apiExecSettings extends Controller_Api
{
	
	
    protected function post($aArgs)
    {

    require_once('builder/builderInterface.php');
	usbuilder()->init($this, $aArgs);
        
        $oExec = new modelExec;
        $oGet = new modelGet;
     
        $iSeq = $aArgs['get_seq'];
	#data to insert
	$aData = array(
		'seq' => $iSeq,
		'title' => $aArgs['get_title']
			);
	
	$bSeqExist = $oGet->getRow(2,"seq =".$iSeq);
     
     if(empty($bSeqExist)){
     	$aResult = $oExec->insertData(2,$aData);
     }else{
        $dDeleted = $oExec->deleteData(2,"seq =".$iSeq);
        if($dDeleted === true){
        	$aData['idx'] = $bSeqExist['idx'];
        	$aResult = $oExec->insertData(2,$aData);
        }else{
        	$aResult = "false";
        }
     } 
	
	return $aResult;
        
    }
    
  
}