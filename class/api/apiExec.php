<?php
class apiExec extends Controller_Api
{
	
	
    protected function post($aArgs)
    {

        require_once('builder/builderInterface.php');
        usbuilder()->init($this->Request->getAppID(), $aArgs);
        
        $oExec = new modelExec;
     
	#data to insert
	$aData = array(
		'position' => $aArgs['get_position'],
    	'salary' => $aArgs['get_salary'],
		'name' => ucwords($aArgs['get_name']),
    	'address' => ucwords($aArgs['get_address']),
    	'contactnum' => $aArgs['get_contactnum'],
		'email' => $aArgs['get_email'],
		'yr_exp' => $aArgs['get_yr_exp'],
		'des_car' => $aArgs['get_des_car'],
		'date_reg' => time()
		);
	
	return $aResult = $oExec->insertData(3,$aData);
        
    }
    
  
}
