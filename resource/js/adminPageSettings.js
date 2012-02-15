var adminPageSettings = {
		
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
			
			popup.close(adminPageSettings.APP_NAME+"_popup");
			popup.close(adminPageSettings.APP_NAME+"_info");
			
			$("body").append("<div id='applicationform_info' ><div id='applicationform_info_contents' class='admin_popup_contents' ></div></div>");
			
			popup.load(""+adminPageSettings.APP_NAME+"_info").skin("admin").layer({
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
						
						sInfo += '<div id="applicationform_btn_print" ><a href="javascript:adminPageSettings.print(\'applicationform_info_div\')"class="btn_nor_01 btn_width_st1">Print</a></div>';
						
						$(".admin_popup_contents").empty().append(sInfo);
						
					}else{
						var sInfo = "Error retriving data";
						$(".admin_popup_contents").empty().append(sInfo);
					}
					
				}
					
			});
		},
		
		submit_form: function(){
			$("#applicationform_search_form").submit();
		},
		
		 /*delete list process*/
		delete_list_process: function(){
			
			var oCheckbox_id = $("input:[name='"+adminPageSettings.APP_NAME+"_chckbox[]']:checked");
			
			
			if(oCheckbox_id.size() <= 0){
				oValidator.generalPurpose.getMessage(false, "Please choose items to delete");
				
			}else{
				popup.load(""+adminPageSettings.APP_NAME+"_popup").skin("admin").layer({
					'title': 'Delete',
					'width': 250
					
				});
				
				
			}
			
		},
		
		delete_from_list: function(){
			var sId_to_delete = '';
			var oCheckbox_id = $("input:[name='"+adminPageSettings.APP_NAME+"_chckbox[]']:checked");
			
			$.each(oCheckbox_id,function(key,val){
				sId_to_delete += ","+$(this).val();
			});
			
			$.ajax({
					url: usbuilder.getUrl("apiDelete"),
					type: 'post',
					dataType: 'json',
					data: {
						get_idx: sId_to_delete.substr(1)
					},
					success: function(data){
						if(data.Data == "true"){
							//oValidator.generalPurpose.getMessage(true, "Deleted successfully");
							popup.close(adminPageSettings.APP_NAME+"_popup");
							popup.load(""+adminPageSettings.APP_NAME+"_popup_deleted").skin("admin").layer({
								'title': 'Delete',
								'width': 250
								
							});
							
						}else{
							oValidator.generalPurpose.getMessage(false, "Delete failed");
							popup.close(adminPageSettings.APP_NAME+"_popup");
						}
						
						
					}
						
			});
		},
		
	
		
		/*close the dialog and refresh*/
		close_refresh: function(){
			popup.close(adminPageSettings.APP_NAME+'_popup_deleted');
			window.location.href = usbuilder.getUrl("adminPageSettings");
			
		},
		
		/*reset to default*/
		reset_default: function(){
			
			$("#"+adminPageSettings.APP_NAME+"_form_reset").submit();
			
		}
	
};


$(document).ready(function(){
	
	adminPageSettings.initialize();
	
	
	$("#show_row").change(function(){
		adminPageSettings.submit_form();
		
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
	$("#"+adminPageSettings.APP_NAME+"_chk_all").click(function(){
		
		if($(this).attr("checked") == "checked"){
			$("input:[name='"+adminPageSettings.APP_NAME+"_chckbox[]']").attr("checked" , true);
		}else{
			$("input:[name='"+adminPageSettings.APP_NAME+"_chckbox[]']").attr("checked" , false);
		}
	});
	

});
