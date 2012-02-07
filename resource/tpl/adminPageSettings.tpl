<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head></head>
<body>

<!-- hidden values -->
<input type="hidden"  id="APP_NAME" value="<?php echo $APP_NAME;?>" />



<!--form for save-->		
<form name="<?php echo $APP_NAME;?>_form"   method="POST">

<!-- header -->
<div class="table_header_area">
    <ul class="row_1">
        <li class="search">
	    <input type="text" title="Filename or title" class="input_text" value="" id="ListKeyword" maxlength="250" />
    <a href="javascript:addonLists.listSearchButton();" class="btn_nor_01 btn_width_st1" title="Search Photo Gallery">Search</a>
</li>        <li class="comment">
    <a href="/admin/sub/?module=PhotogalleryPageSeqImages&seq=1&status=all&order_index=photo_appearance&order_type=asc" class="all selected" title="Show all images">All(4)</a></li>    </ul>
    <ul class="row_2">
        <li>
    <a href="#none" onclick="modulePhotogallerySeqImages.deletePopup();" class="btn_nor_01 btn_width_st1" title="Remove selected images">Remove</a></li>                <li class="show">
    <label for="show_row">Show Rows</label>
    <select id="show_row">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
        <option value="100">100</option>
    </select>
</li>                		    </ul>
</div>
<!-- end header -->


<!-- table -->
<table border="1" cellpadding="0" cellspacing="0" class="table_hor_02" >
		<colgroup>
		
		        <col width="44px" />
		        
		        <col width="44px" />
		    <col  />
		  <col width="400px" />
		   <col width="400px" />
	
		</colgroup>
	<thead>
		<tr>
		    <th class="chk"><input type="checkbox" class="input_chk chk_all" id="helloroel_chk_all"   /></th>
		    <th>No.</th>
			<th>Name</th>
			<th>Desc</th>
			<th>Date reg</th>
			
		</tr>
	</thead>
	<tbody>
	
		<!-- loop here -->
			<tr>
			<td><input type='checkbox' class="input_chk" name='helloroel_chckbox[]' value='".$val['idx']."' /></td>
			<td>1</td><td>".$val['name']."</td><td>".$val['description']."</td>
			<td>".date("m/d/Y h:i A",$val['date'])."</td>
			</tr>
		<!-- end loop  -->
	
	
	</tbody>
	</table>

</form>

<!--buttons
<div class="tbl_lb_wide_btn">
		<a href="#" class="btn_apply" onclick="adminPageSettings.setting_submit()" />Save</a>
		<a href="#" class="add_link" title="Reset to default" onclick="adminPageSettings.reset_default()" >Reset to Default</a>
</div>
-->


<!--form for reset-->
<form method="POST" action="<?php echo $sUrl;?>" name="<?php echo $APP_NAME;?>_form_reset" id="<?php echo $APP_NAME;?>_form_reset" ><input type="hidden" name="<?php echo $APP_NAME;?>_reset" value="true" /></form>


</body>
</html>
