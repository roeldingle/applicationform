<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head></head>
<body>

<!-- hidden values -->
<input type="hidden"  id="APP_NAME" value="<?php echo $APP_NAME;?>" />



<!--form for save-->		


<!-- header -->
<form  action="applicationform_search_form" method="GET" id="applicationform_search_form" name="applicationform_search_form">
<div class="table_header_area">
    <ul class="row_1">
        <li class="search">
        
     
        <select id="applicationform_search_field" name="applicationform_search_field" >
        	<option>name</option>
        	<option>position</option>
        </select>
  
        	<input type="text" title="Filename or title" class="input_text" value="<?php echo $sKeyword;?>" name="applicationform_keyword" id="applicationform_keyword" maxlength="250" />
            <a href="javascript:adminPageSettings.submit_form();" class="btn_nor_01 btn_width_st1" title="Search Photo Gallery">Search</a>
    
	    
</li>        <li class="comment">
    <a href="/admin/sub/?module=PhotogalleryPageSeqImages&seq=1&status=all&order_index=photo_appearance&order_type=asc" class="all selected" title="Show all images">All(<?php echo $iCountData;?>)</a></li>    </ul>
    <ul class="row_2">
        <li>
    <a href="javascript:adminPageSettings.delete_list_process();"  class="btn_nor_01 btn_width_st1">Remove</a></li>                <li class="show">
    <label for="show_row">Show Rows</label>
    <select id="show_row" name="iRows">
   
        <option value="10" <?php echo ($iRows ===  "10")?"selected":"";?>>10</option>
        <option value="20" <?php echo ($iRows === "20")?"selected":"";?>>20</option>
        <option value="30" <?php echo ($iRows === "30")?"selected":"";?>>30</option>
        <option value="50" <?php echo ($iRows === "50")?"selected":"";?>>50</option>
        <option value="100" <?php echo ($iRows === "100")?"selected":"";?>>100</option>
    </select>
</li>                		    </ul>
</div>
</form>
<!-- end header -->

<form name="<?php echo $APP_NAME;?>_form"   method="POST">
<!-- table -->
<table border="1" cellpadding="0" cellspacing="0" class="table_hor_02" id="table_list" >
		<colgroup>
		
		        <col width="44px" />
		        
		        <col width="44px" />
		    <col  />
		  <col width="400px" />
		   <col width="400px" />
	
		</colgroup>
	<thead>
		<tr>
		    <th class="chk"><input type="checkbox" class="input_chk chk_all" id="<?php echo $APP_NAME;?>_chk_all"   /></th>
		    <th>No.</th>
			<th id="<?php echo $APP_NAME;?>_name_asc"  ><a class="sort_down" alt="asc" title="name" href="#" >Name</a></th>
			<th id="<?php echo $APP_NAME;?>_position_asc"><a class="sort_down" alt="asc" title="position" href="#" >Position</a></th>
			<th id="<?php echo $APP_NAME;?>_date_reg_asc"><a class="sort_down" alt="asc" title="date_reg" href="#" >Date registered</a></th>
		</tr>
	</thead>
	<tbody>
	
		<?php 
			if(count($aData) < 1){?>
				<tr>
			<td colspan="5" >No record(s)</td>
			</tr>
				
		<?php }else{?>
	
		<!-- loop here -->
		<?php foreach($aData as $key=>$val){?>
			<tr>
			<td><input type='checkbox' class="input_chk" name='<?php echo $APP_NAME;?>_chckbox[]' value='<?php echo $val['idx'];?>' /></td>
			<td><?php echo $val['num'];?></td><td><a href="javascript:adminPageSettings.show_info(<?php echo $val['idx'];?>);" ><?php echo $val['name'];?></a></td><td><?php echo $val['position'];?></td>
			<td><?php echo $val['date_reg'];?></td>
			</tr>
		<?php }?>
		<!-- end loop  -->
		
	<?php }?>
	
	
	</tbody>
	</table>

</form>
<div id="pagination" ><?php echo $pagination; ?></div>
<!--buttons
<div class="tbl_lb_wide_btn">
		<a href="#" class="btn_apply" onclick="adminPageSettings.setting_submit()" />Save</a>
		<a href="#" class="add_link" title="Reset to default" onclick="adminPageSettings.reset_default()" >Reset to Default</a>
</div>
-->


<!--form for reset-->
<form method="POST" action="<?php echo $sUrl;?>" name="<?php echo $APP_NAME;?>_form_reset" id="<?php echo $APP_NAME;?>_form_reset" ><input type="hidden" name="<?php echo $APP_NAME;?>_reset" value="true" /></form>

<!--popup box -->
<div id='<?php echo $APP_NAME;?>_popup' style='display:none'>
	<div class="admin_popup_contents">
	
	Are you sure you want to delete this entry?
	<br />
	<br />
	<br />
	<a class="btn_apply" href="javascript: void(0);" style='cursor:pointer' title="Delete" onclick="adminPageSettings.delete_from_list();"> Delete </a>
	
	
	</div>
</div>

<!--deleted successfully -->
<div id='<?php echo $APP_NAME;?>_popup_deleted' style='display:none'>
	<div class="admin_popup_contents">
	
	Deleted successfully
	<br />
	<br />
	<br />
	<a class="btn_apply" href="javascript: void(0);" style='cursor:pointer' title="Delete" onclick="adminPageSettings.close_refresh();"> Close </a>
	
	
	</div>
</div>


</body>
</html>
