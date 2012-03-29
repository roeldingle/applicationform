var adminPageContents = {
		
		/*set global variables*/
		APP_NAME: $("#APP_NAME").val(),
		
		/*initialize*/
		initialize: function(){
			
			/*table sorter*/
			if($('#table_list').attr('id') != null){
				$('#table_list').tablesorter({
					headers: { 0:{sorter:false},1:{sorter:false} }
				});
			}
			
			
		},
		
		print: function(selector){
			
				selector = selector.replace("#", "");
				$("#" + selector).printElement(
		            {
		            leaveOpen:true,
		            printMode:'popup'
		        });
			
		},
		
		show_info: function(id){
			
			$("#applicationform_info").remove();
			$("#applicationform_popup").remove();
			
			$("body").append("<div id='applicationform_info' ><div id='applicationform_info_contents' class='admin_popup_contents' ></div></div>");
			
			sdk_popup.load(""+adminPageContents.APP_NAME+"_info").skin("admin").layer({
				'title': 'Applicant info',
				'width': 350
				
			});
			
			/*get applicant info*/
			$.ajax({
				url: usbuilder.getUrl("apiGet"),
				type: 'post',
				dataType: 'json',
				data: {
					get_idx: id
				},
				success: function(data){
					
					if(data.Data){
						
						var sInfo = '';
						sInfo += '<div id="applicationform_info_div">';
						sInfo += '<table id="applicationform_info_table">';
						sInfo += '<tr><td class="label" >Position</td><td>'+data.Data['position']+'</td></tr>';
						sInfo += '<tr><td class="label" >Applicant name</td><td>'+data.Data['name']+'</td></tr>';
						sInfo += '<tr><td class="label" >Address</td><td>'+data.Data['address']+'</td></tr>';
						sInfo += '<tr><td class="label" >Contact no.</td><td>'+data.Data['contactnum']+'</td></tr>';
						sInfo += '<tr><td class="label" >Email</td><td>'+data.Data['email']+'</td></tr>';
						sInfo += '<tr><td class="label" >Years of experience</td><td>'+data.Data['yr_exp']+'</td></tr>';
						sInfo += '<tr><td class="label" >Career desc.</td><td>'+data.Data['des_car']+'</td></tr>';
						sInfo += '</table>';
						sInfo += '</div>';
						
						sInfo += '<div id="applicationform_btn_print" ><a href="javascript:adminPageContents.print(\'applicationform_info_div\');void(0);"class="btn_nor_01 btn_width_st1">Print</a></div>';
						
						$(".admin_popup_contents").html(sInfo);
						
					}else{
						var sInfo = "Error retriving data";
						$(".admin_popup_contents").html(sInfo);
					}
					
				}
					
			});
		},
		
		submit_form: function(){
			
			var seq = $("#SEQ").val();
			var applicationform_keyword = $("#applicationform_keyword").val();
			var applicationform_search_field = $("#applicationform_search_field").val();
			var iRows = $("#show_row").val();
			
			window.location.href = usbuilder.getUrl("adminPageContents")+"&seq="+seq+"&applicationform_keyword="+applicationform_keyword+"&applicationform_search_field="+applicationform_search_field+"&iRows="+iRows;
		},
		
		 /*delete list process*/
		delete_list_process: function(){
			$("#"+adminPageContents.APP_NAME+"_info").hide();
			//popup.close(adminPageContents.APP_NAME+"_popup");
			var oCheckbox_id = $("input:[name='"+adminPageContents.APP_NAME+"_chckbox[]']:checked");
			
			
			if(oCheckbox_id.size() <= 0){
				oValidator.generalPurpose.getMessage(false, "Please choose items to delete");
				
			}else{
				
				$("#applicationform_info").remove();
				$("#applicationform_popup").remove();
				
				$("body").append("<div id='applicationform_info' ><div id='applicationform_popup' class='admin_popup_contents' ></div></div>");
				
				sdk_popup.load(""+adminPageContents.APP_NAME+"_popup").skin("admin").layer({
					'title': 'Delete',
					'width': 250
					
				});
				
				var sData = '';
				sData += 'Are you sure you want to delete this entry?';
				sData += '<br /><br /><br />';
				sData += '<a class="btn_apply" href="javascript: void(0);" style="cursor:pointer" title="Cancel" onclick="sdk_popup.close(\''+adminPageContents.APP_NAME+'_popup\');"> Cancel </a>&nbsp;';
				sData += '<a class="btn_apply" href="javascript: void(0);" style="cursor:pointer" title="Delete" onclick="adminPageContents.delete_from_list();"> Delete </a>';
				
				$(".admin_popup_contents").html(sData);
				
			}
			
		},
		
		delete_from_list: function(){
			var sId_to_delete = '';
			var oCheckbox_id = $("input:[name='"+adminPageContents.APP_NAME+"_chckbox[]']:checked");
			
			$.each(oCheckbox_id,function(key,val){
				sId_to_delete += ","+$(this).val();
			});
			
			$.ajax({
					url: usbuilder.getUrl("apiDelete"),
					type: 'post',
					dataType: 'json',
					data: {
						get_seq: $("#SEQ").val(),
						get_idx: sId_to_delete.substr(1)
					},
					success: function(data){
						if(data.Data['delete'] == "true"){
							//oValidator.generalPurpose.getMessage(true, "Deleted successfully");
							popup.close(adminPageContents.APP_NAME+"_popup");
							
							$("#applicationform_info").remove();
							$("#applicationform_popup").remove();
							
							$("body").append("<div id='applicationform_info' ><div id='applicationform_popup' class='admin_popup_contents' ></div></div>");
							
							sdk_popup.load(""+adminPageContents.APP_NAME+"_popup").skin("admin").layer({
								'title': 'Delete',
								'width': 250,
								'closeCallback': function(){
									location.reload();
								}
								
							});
							
							var sData = '';
							sData += 'Deleted successfully?';
							sData += '<br /><br /><br />';
							
							$(".admin_popup_contents").html(sData);
							
							setTimeout('location.reload()', 1000)
							
//							var sData = '';
//							
//							$.each(data.Data['data'], function(index, val) { 
//								sData += '<tr>
//									sData += '<td><input type="checkbox" class="" name="applicationform_chckbox[]" value="'+val.idx+'" /></td>';
//									sData += '<td></td>';
//									sData += '<td></td>';
//									sData += '<td></td>';
//									sData += '<td></td>';
//									sData += '</tr>'; ': ' + value); 
//							});
							
							
						}else{
							oValidator.generalPurpose.getMessage(false, "Delete failed");
							popup.close(adminPageContents.APP_NAME+"_popup");
						}
						
						
					}
						
			});
		},
		
	
		
		/*close the dialog and refresh*/
		close_refresh: function(){
			popup.close(adminPageContents.APP_NAME+'_popup_deleted');
			//window.location.href = usbuilder.getUrl("adminPageContents");
			
		},
		
		/*reset to default*/
		reset_default: function(){
			
			$("#"+adminPageContents.APP_NAME+"_form_reset").submit();
			
		}
	
};


$(document).ready(function(){
	
	adminPageContents.initialize();
	
	
	$("#show_row").change(function(){
		adminPageContents.submit_form();
		
	});
	
	/*sort change the up/down image*/
	$(".sort_down").click(function(){
		var type = $(this).attr("alt");
		
		if(type == "asc"){
			$(this).addClass("sort_up");
			$(this).attr("alt","desc");
		}else{
			$(this).removeClass("sort_up");
			$(this).attr("alt","asc");
		}	
		
	});
	
	/*check all checkbox*/
	$("#"+adminPageContents.APP_NAME+"_chk_all").click(function(){
		
		if($(this).attr("checked") == "checked"){
			$("input:[name='"+adminPageContents.APP_NAME+"_chckbox[]']").attr("checked" , true);
		}else{
			$("input:[name='"+adminPageContents.APP_NAME+"_chckbox[]']").attr("checked" , false);
		}
	});
	

});
