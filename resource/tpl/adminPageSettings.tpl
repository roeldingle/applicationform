<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head></head>
	<body>
	
		<!-- hidden values -->
		<input type="hidden"  id="APP_NAME" value="<?php echo $APP_NAME;?>" />
		<input type="hidden" id="SEQ" value="<?php echo $iSeq;?>" /><!--pluginurl-->
		
		<span><label>App ID :</label> <?php echo ucwords($APP_NAME);?></span><br /><br />
				
		<form name="<?php echo $APP_NAME;?>_form" id="<?php echo $APP_NAME;?>_form"  method="POST">
			<table border="1" cellspacing="0" class="table_input_vr">
				<colgroup>
					<col width="115px" />
					<col width="*" />
				</colgroup>
				<!-- application title -->
				<tr>
					<th class="padt1"><label for="show_html_value">Title</label></th>
					<td class="padt1">
					<span class="neccesary">*</span>
						<input type="text" class="fix" id="<?php echo $APP_NAME;?>_title" value="<?php echo $aUserSetting['title'];?>" fw-filter="isFill" />
					</td>
				</tr>
			</table>
		</form>
		
		<div class="tbl_lb_wide_btn">
				<input type="button" value="Save" class="btn_apply" onclick="adminPageSettings.setting_submit()" />
				<a href="#" class="add_link" title="Reset to default" onclick="adminPageSettings.reset_default()" >Reset to Default</a>
				
				<?php 
					 if($bExtensionView === 1){
			            echo '<a href="/admin/sub/?module=ExtensionPageManage&code=' . ucfirst(APP_ID) . '&etype=MODULE" class="add_link" title="Return to Manage ' . ucfirst(APP_ID) . '">Return to Manage ' . ucfirst(APP_ID) . '</a>
			            <a href="/admin/sub/?module=ExtensionPageMyextensions" class="add_link" title="Return to My Extensions">Return to My Extensions</a>';
					  }
				?>
				
		</div>
		
		<!--form for reset-->
		<form method="POST" action="<?php echo $sUrl;?>" name="<?php echo $APP_NAME;?>_form_reset" id="<?php echo $APP_NAME;?>_form_reset" ><input type="hidden" name="<?php echo $APP_NAME;?>_reset" value="true" /></form>
	
	</body>
</html>
