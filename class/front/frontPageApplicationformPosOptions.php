<?php

class frontPageApplicationformPosOptions extends Controller_Front{

	protected $oGet;

	protected function run($aArgs)
	{

		require_once 'builder/builderInterface.php';

		//$sInitScript = usbuilder()->init($this->Request->getAppID(), $aArgs);
		//$this->writeJs($sInitScript);
		

		$this->display($aArgs);

	}

	protected function display($aArgs){
		
		$aData =array();
		
		/*position*/
		$aPositions = array(
				"-option-",
				"HR Assistant",
				"Illustrator",
				"Web Designer",
				"Html Coder",
				"Marketer",
				"SEO Assistant",
				"Web Product Planner",
				"QA Tester" );
		
		foreach($aPositions as $val){
			$aData[]['positions'] = $val;
		}
		
		/*position*/
		$aId = array('id="application_form_position" title="Position"',"" );
		
		foreach($aId as $val){
			$aData[]['id'] = $val;
		}
		
		
		 $this->loopFetch($aData);
		

	}
}

?>