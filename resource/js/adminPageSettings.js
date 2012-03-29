var adminPageSettings={
		
		/*set global variables*/
		APP_NAME: $("#APP_NAME").val(),
		
		/*save settings*/
		setting_submit: function(form){
			
			
			if(oValidator.formName.getMessage(adminPageSettings.APP_NAME+'_form')){
				
				/*gather variables*/
				var iSeq = $("#SEQ").val();
				var title = $.trim($("#"+adminPageSettings.APP_NAME+"_title").val());
				
				
					/*ajax submit*/
					$.ajax({  
						url: usbuilder.getUrl("apiExecSettings"),
						type: 'post',
						dataType: 'json',
						data: {
						get_seq: iSeq,
						get_title: title
						
					},
						success: function(data){
						
						if(data.Data === true){
							oValidator.generalPurpose.getMessage(true, "Saved successfully");
							scroll(0,0);
							}else{
								oValidator.generalPurpose.getMessage(false, "Failed");
								scroll(0,0);
							}
					
						}
					});
			}
			
		},
		
		/*reset to default*/
		reset_default: function(){
			
			$("#"+adminPageSettings.APP_NAME+"_form_reset").submit();
			
		},
		
		
		
}