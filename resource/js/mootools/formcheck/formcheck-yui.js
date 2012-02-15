/*
---
script: formcheck.js

description:     A MooTools class that allows you to perform different tests on forms to validate them before submission.

authors:
  - fyrye (http://torntech.com)
  - weepaki
  - floor.ch (http://mootools.floor.ch)
  
copyright: Copyright (c) 2010-2011 

license:
  - MIT License

requires:
  core/1.2.4: '*'
  more/1.2.4.4:
      - Fx.Scroll

provides:
  - FormCheck
...
*/
var FormCheck=new Class({Implements:[Options,Events],options:{tipsClass:"fc-tbx",errorClass:"fc-error",fieldErrorClass:"fc-field-error",submit:true,submitAction:false,submitMethod:false,trimValue:false,validateDisabled:false,submitByAjax:false,ajaxResponseDiv:false,ajaxEvalScripts:false,onAjaxRequest:$empty,onAjaxComplete:$empty,onAjaxSuccess:$empty,onAjaxFailure:$empty,onSubmit:$empty,onValidateSuccess:$empty,onValidateFailure:$empty,display:{showErrors:0,titlesInsteadNames:0,errorsLocation:1,indicateErrors:1,indicateErrorsInit:0,keepFocusOnError:0,checkValueIfEmpty:1,addClassErrorToField:0,removeClassErrorOnTipClosure:0,fixPngForIe:1,replaceTipsEffect:1,flashTips:0,closeTipsButton:1,tipsPosition:"right",tipsOffsetX:-45,tipsOffsetY:0,listErrorsAtTop:false,scrollToFirst:true,fadeDuration:300},alerts:{required:"This field is required.",alpha:"This field accepts alphabetic characters only.",alphanum:"This field accepts alphanumeric characters only.",nodigit:"No digits are accepted.",digit:"Please enter a valid integer.",digitltd:"The value must be between %0 and %1",number:"Please enter a valid number.",email:"Please enter a valid email.",image:"This field should only contain image types",phone:"Please enter a valid phone.",phone_inter:"Please enter a valid international phone number.",url:"Please enter a valid url.",confirm:"This field is different from %0",differs:"This value must be different of %0",length_str:"The length is incorrect, it must be between %0 and %1",length_fix:"The length is incorrect, it must be exactly %0 characters",lengthmax:"The length is incorrect, it must be at max %0",lengthmin:"The length is incorrect, it must be at least %0",words_min:"This field must concain at least %0 words, currently: %1 words",words_range:"This field must contain %0-%1 words, currently: %2 words",words_max:"This field must contain at max %0 words, currently: %1 words",checkbox:"Please check the box",checkboxes_group:"Please check at least %0 box(es)",radios:"Please select a radio",select:"Please choose a value",select_multiple:"Please choose at least one value"},regexp:{required:/[^.*]/,alpha:/^[a-z ._-]+$/i,alphanum:/^[a-z0-9 ._-]+$/i,digit:/^[-+]?[0-9]+$/,nodigit:/^[^0-9]+$/,number:/^[-+]?\d*\.?\d+$/,email:/^([a-zA-Z0-9_\.\-\+%])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,image:/.(jpg|jpeg|png|gif|bmp)$/i,phone:/^\+{0,1}[0-9 \(\)\.\-]+$/,phone_inter:/^\+{0,1}[0-9 \(\)\.\-]+$/,url:/^(http|https|ftp)\:\/\/[a-z0-9\-\.]+\.[a-z]{2,3}(:[a-z0-9]*)?\/?([a-z0-9\-\._\?\,\'\/\\\+&amp;%\$#\=~])*$/i}},initialize:function(b,a){if(this.form=$(b)){this.form.isValid=true;this.regex=["length"];this.groups={};if(typeof(formcheckLanguage)!="undefined"){this.options.alerts=$merge(this.options.alerts,formcheckLanguage)}this.setOptions(a);this.form.setProperty("action",this.options.submitAction||this.form.getProperty("action")||"post");this.form.setProperty("method",this.options.submitMethod||this.form.getProperty("method")||"");this.validations=[];this.alreadyIndicated=false;this.firstError=false;$H(this.options.regexp).each(function(d,c){this.regex.push(c)},this);this.form.getElements("*[class*=validate]").each(function(c){this.register(c)},this);this.form.addEvents({submit:this.onSubmit.bind(this)});if(this.options.display.fixPngForIe){this.fixIeStuffs()}document.addEvent("mousewheel",function(){this.isScrolling=false}.bind(this));if(this.options.display.indicateErrorsInit){this.validations.each(function(c){if(!this.manageError(c,"submit")){this.form.isValid=false}},this)}}},register:function(el,position){el.validation=[];el.getProperty("class").split(" ").each(function(classX){if(classX.match(/^validate(\[.+\])$/)){var valid=true;var validators=eval(classX.match(/^validate(\[.+\])$/)[1]);for(var i=0;i<validators.length;i++){el.validation.push(validators[i]);if(validators[i].match(/^confirm:/)){var field=validators[i].match(/.+:(.+)$/)[1];if(this.form[field].validation.contains("required")){el.validation.push("required")}}if(validators[i].match(/^target:.+/)){el.target=validators[i].match(/^target:(.+)/)[1]}}el.isChild=this.isChildType(el,validators);if(el.isChild&&el.type=="radio"){this.validations.each(function(registeredEl){if(registeredEl.name==el.name){valid=false}},this)}if(el.isChild&&el.type=="checkbox"){this.validations.each(function(registeredEl){if(registeredEl.groupID==el.groupID){valid=false}},this)}if(position&&position<=this.validations.length){var newValidations=[];this.validations.each(function(valider,i){if(position==i+1&&valid){newValidations.push(el);this.addListener(el)}newValidations.push(valider)},this);this.validations=newValidations}else{if(valid){this.validations.push(el);this.addListener(el)}}}},this)},dispose:function(a){this.validations.erase(a)},addListener:function(b){b.errors=[];if(b.validation[0]=="submit"){b.addEvent("click",function(c){new Event(c).stop();if(this.onSubmit(c)){this.form.submit()}}.bind(this));return true}if(!b.isChild){b.addEvent("blur",function(){if(!this.fxRunning&&(b.element||this.options.display.showErrors==1)&&(this.options.display.checkValueIfEmpty||b.value)){this.manageError(b,"blur")}}.bind(this))}else{if(b.isChild&&b.type=="radio"){var a=this.form.getElements('input[name="'+b.getProperty("name")+'"]');a.each(function(c){c.addEvent("blur",function(){if(!this.fxRunning&&(b.element||this.options.display.showErrors==1)&&(this.options.display.checkValueIfEmpty||b.value)){this.manageError(b,"click")}}.bind(this))},this)}}},manageError:function(a,c){var b=this.validate(a);if(c=="testonly"){return b}if((!b&&a.validation.contains("required"))||(a.value&&!b)){if(this.options.display.listErrorsAtTop&&c=="submit"){this.listErrorsAtTop(a)}if(this.options.display.indicateErrors==2||this.alreadyIndicated==false||a==this.alreadyIndicated){if(!this.firstError){this.firstError=a}this.alreadyIndicated=a;if(this.options.display.keepFocusOnError&&a==this.firstError){(function(){a.focus()}).delay(10)}this.addError(a);return false}}else{if((b||(!a.validation.contains("required")&&!a.value))){this.removeError(a);return true}}return true},validate:function(el){el.errors=[];el.isOk=true;if(!this.options.validateDisabled&&el.get("disabled")){return true}if(this.options.trimValue&&el.value){el.value=el.value.trim()}el.validation.each(function(rule){if(el.isChild){if(!this.validateGroup(el)){el.isOk=false}}else{var ruleArgs=[];if(rule.match(/target:.+/)){return}var ruleMethod=rule;if(rule.match(/^.+\[/)){ruleMethod=rule.split("[")[0];ruleArgs=eval(rule.match(/^.+(\[.+\])$/)[1].replace(/([A-Z0-9\._-]+)/i,"'$1'"))}if(this.regex.contains(ruleMethod)&&el.get("tag")!="select"){if(this.validateRegex(el,ruleMethod,ruleArgs)==false){el.isOk=false}}if(rule.match(/confirm:.+/)){ruleArgs=[rule.match(/.+:(.+)$/)[1]];if(this.validateConfirm(el,ruleArgs)==false){el.isOk=false}}if(rule.match(/differs:.+/)){ruleArgs=[rule.match(/.+:(.+)$/)[1]];if(this.validateDiffers(el,ruleArgs)==false){el.isOk=false}}if(ruleMethod=="words"){if(this.validateWords(el,ruleArgs)==false){el.isOk=false}}if(ruleMethod=="required"&&(el.get("tag")=="select"||el.type=="checkbox")){if(this.simpleValidate(el)==false){el.isOk=false}}if(rule.match(/%[A-Z0-9\._-]+$/i)||(el.isOk&&rule.match(/~[A-Z0-9\._-]+$/i))){if(eval(rule.slice(1)+"(el)")==false){el.isOk=false}}}},this);return(el.isOk)?true:false},simpleValidate:function(b){if(b.get("tag")=="select"){if(!b.multiple){if(b.selectedIndex<=0){b.errors.push(this.options.alerts.select);return false}}else{var a=false;b.getChildren("option").each(function(c){if(c.selected){a=true}});if(!a){b.errors.push(this.options.alerts.select_multiple);return false}}}else{if(b.type=="checkbox"&&b.checked==false){b.errors.push(this.options.alerts.checkbox);return false}}return true},validateRegex:function(c,b,d){var e="";if(b=="length"&&d[1]){if(d[1]==-1){this.options.regexp.length=new RegExp("^[\\s\\S]{"+d[0]+",}$");e=this.options.alerts.lengthmin.replace("%0",d[0])}else{if(d[0]==d[1]){this.options.regexp.length=new RegExp("^[\\s\\S]{"+d[0]+"}$");e=this.options.alerts.length_fix.replace("%0",d[0])}else{this.options.regexp.length=new RegExp("^[\\s\\S]{"+d[0]+","+d[1]+"}$");e=this.options.alerts.length_str.replace("%0",d[0]).replace("%1",d[1])}}}else{if(d[0]&&b=="length"){this.options.regexp.length=new RegExp("^.{0,"+d[0]+"}$");e=this.options.alerts.lengthmax.replace("%0",d[0])}else{e=this.options.alerts[b]}}if((b=="digit"||b=="number")&&d[1]){var f,a=true;if(!this.options.regexp[b].test(c.value)){c.errors.push(this.options.alerts[b]);a=false}if(d[1]==-1){f=(c.value.toFloat()>=d[0].toFloat());e=this.options.alerts.digitmin.replace("%0",d[0])}else{f=(c.value.toFloat()>=d[0].toFloat()&&c.value.toFloat()<=d[1].toFloat());e=this.options.alerts.digitltd.replace("%0",d[0]).replace("%1",d[1])}if(a==false||f==false){c.errors.push(e);return false}}else{if(this.options.regexp[b].test(c.value)==false){c.errors.push(e);return false}}return true},validateConfirm:function(b,c){var a=c[0];if(b.value!=this.form[a].value){var d=(this.options.display.titlesInsteadNames)?this.options.alerts.confirm.replace("%0",this.form[a].getProperty("title")):this.options.alerts.confirm.replace("%0",a);b.errors.push(d);return false}return true},validateDiffers:function(a,c){var b=c[0];if(a.value==this.form[b].value){var d=(this.options.display.titlesInsteadNames)?this.options.alerts.differs.replace("%0",this.form[b].getProperty("title")):this.options.alerts.differs.replace("%0",b);a.errors.push(d);return false}return true},validateWords:function(c,d){var b=d[0];var a=d[1];var e=c.value.replace(/[ \t\v\n\r\f\p]/m," ").replace(/[,.;:]/g," ").clean().split(" ");if(a==-1){if(e.length<b){c.errors.push(this.options.alerts.words_min.replace("%0",b).replace("%1",e.length));return false}}else{if(b>0){if(e.length<b||e.length>a){c.errors.push(this.options.alerts.words_range.replace("%0",b).replace("%1",a).replace("%2",e.length));return false}}else{if(e.length>a){c.errors.push(this.options.alerts.words_max.replace("%0",a).replace("%1",e.length));return false}}}return true},isFormValid:function(){this.form.isValid=true;this.validations.each(function(b){var a=this.manageError(b,"testonly");if(!a){this.form.isValid=false}},this);return this.form.isValid},isChildType:function(el,validators){var validator;if($defined(el.type)&&el.type=="radio"){return true}else{if(validator=validators.join().match(/group(\[.*\])/)){var group=eval(validator[1]);this.groups[group[0]]=this.groups[group[0]]||[];this.groups[group[0]][0]=this.groups[group[0]][0]||[];this.groups[group[0]][1]=group[1]||this.groups[group[0]][1]||1;this.groups[group[0]][0].push(el);el.groupID=group[0];return true}}return false},validateGroup:function(d){d.errors=[];if(d.type=="radio"){var a=this.form[d.getProperty("name")];d.group=a;var c=false;for(var b=0;b<a.length;b++){if(a[b].checked){c=true}}if(c==false){d.errors.push(this.options.alerts.radios);return false}else{return true}}else{if(d.type=="checkbox"){var e=0;this.groups[d.groupID][0].each(function(f){if(f.checked){e++}});if(e>=this.groups[d.groupID][1]){return true}else{(this.groups[d.groupID][0].length>1)?d.errors.push(this.options.alerts.checkboxes_group.replace("%0",this.groups[d.groupID][1])):d.errors.push(this.options.alerts.checkbox);return false}}else{return false}}},listErrorsAtTop:function(a){if(!this.form.element){this.form.element=new Element("div",{id:"errorlist","class":this.options.errorClass}).injectTop(this.form)}if($type(a)=="collection"){new Element("p").set("html","<span>"+a[0].name+" : </span>"+a[0].errors[0]).injectInside(this.form.element)}else{if((a.validation.contains("required")&&a.errors.length>0)||(a.errors.length>0&&a.value&&a.validation.contains("required")==false)){a.errors.each(function(b){new Element("p").set("html","<span>"+a.name+" : </span>"+b).injectInside(this.form.element)},this)}}window.fireEvent("resize")},addError:function(c){var f=c.target?$(c.target).getCoordinates():c.getCoordinates();if(!c.element&&this.options.display.indicateErrors!=0){if(this.options.display.errorsLocation==1){var e=(this.options.display.tipsPosition=="left")?f.left:f.right;var b={opacity:0,position:"absolute","float":"left",left:e+this.options.display.tipsOffsetX};c.element=new Element("div",{"class":this.options.tipsClass,styles:b}).injectInside(document.body);this.addPositionEvent(c)}else{if(this.options.display.errorsLocation==2){c.element=new Element("div",{"class":this.options.errorClass,styles:{opacity:0}}).injectBefore(c)}else{if(this.options.display.errorsLocation==3){c.element=new Element("div",{"class":this.options.errorClass,styles:{opacity:0}});if($type(c.group)=="object"||$type(c.group)=="collection"){c.element.injectAfter(c.group[c.group.length-1])}else{c.element.injectAfter(c)}}}}}if(c.element&&c.element!=true){c.element.empty();if(this.options.display.errorsLocation==1){var d=[];c.errors.each(function(g){d.push(new Element("p").set("html",g))});var a=this.makeTips(d).injectInside(c.element);if(this.options.display.closeTipsButton){a.getElements("a.close").addEvent("mouseup",function(){this.removeError(c,"tip")}.bind(this))}c.element.setStyle("top",f.top-a.getCoordinates().height+this.options.display.tipsOffsetY)}else{c.errors.each(function(g){new Element("p").set("html",g).injectInside(c.element)})}if(!this.options.display.fadeDuration||Browser.Engine.trident&&Browser.Engine.version==5&&this.options.display.errorsLocation<2){c.element.setStyle("opacity",1)}else{c.fx=new Fx.Tween(c.element,{duration:this.options.display.fadeDuration,ignore:true,onStart:function(){this.fxRunning=true}.bind(this),onComplete:function(){this.fxRunning=false;if(c.element&&c.element.getStyle("opacity").toInt()==0){c.element.destroy();c.element=false}}.bind(this)});if(c.element.getStyle("opacity").toInt()!=1){c.fx.start("opacity",1)}}}if(this.options.display.addClassErrorToField&&!c.isChild){c.addClass(this.options.fieldErrorClass);c.element=c.element||true}},addPositionEvent:function(a){if(this.options.display.replaceTipsEffect){a.event=function(){var b=a.target?$(a.target).getCoordinates():a.getCoordinates();new Fx.Morph(a.element,{duration:this.options.display.fadeDuration}).start({left:[a.element.getStyle("left"),b.right+this.options.display.tipsOffsetX],top:[a.element.getStyle("top"),b.top-a.element.getCoordinates().height+this.options.display.tipsOffsetY]})}.bind(this)}else{a.event=function(){var b=a.target?$(a.target).getCoordinates():a.getCoordinates();a.element.setStyles({left:b.right+this.options.display.tipsOffsetX,top:b.top-a.element.getCoordinates().height+this.options.display.tipsOffsetY})}.bind(this)}window.addEvent("resize",a.event)},removeError:function(a,b){if((this.options.display.addClassErrorToField&&!a.isChild&&this.options.display.removeClassErrorOnTipClosure)||(this.options.display.addClassErrorToField&&!a.isChild&&!this.options.display.removeClassErrorOnTipClosure&&b!="tip")){a.removeClass(this.options.fieldErrorClass)}if(!a.element){return}this.alreadyIndicated=false;a.errors=[];a.isOK=true;window.removeEvent("resize",a.event);if(this.options.display.errorsLocation>=2&&a.element){new Fx.Tween(a.element,{duration:this.options.display.fadeDuration}).start("height",0)}if(!this.options.display.fadeDuration||Browser.Engine.trident&&Browser.Engine.version==5&&this.options.display.errorsLocation==1&&a.element){this.fxRunning=true;a.element.destroy();a.element=false;(function(){this.fxRunning=false}.bind(this)).delay(200)}else{if(a.element&&a.element!=true){a.fx.start("opacity",0)}}},focusOnError:function(b){if(this.options.display.scrollToFirst&&!this.alreadyFocused&&!this.isScrolling){var a;if(!this.options.display.indicateErrors||!this.options.display.errorsLocation){a=b.getCoordinates().top-30}else{switch(this.options.display.errorsLocation){case 1:a=b.element.getCoordinates().top;break;case 2:a=b.element.getCoordinates().top-30;break;case 3:a=b.getCoordinates().top-30;break}this.isScrolling=true}if(window.getScroll().y!=a){new Fx.Scroll(window,{onComplete:function(){this.isScrolling=false;if(b.getProperty("type")!="hidden"){b.focus()}}.bind(this)}).start(0,a)}else{this.isScrolling=false;b.focus()}this.alreadyFocused=true}},fixIeStuffs:function(){if(Browser.Engine.trident4){var f=new RegExp("url\\(([.a-zA-Z0-9_/:-]+.png)\\)");var h=new RegExp("(.+)formcheck.css");for(var c=0;c<document.styleSheets.length;c++){if(document.styleSheets[c].href.match(/formcheck\.css$/)){var e=document.styleSheets[c].href.replace(h,"$1");var d=document.styleSheets[c].rules.length;for(var b=0;b<d;b++){var k=document.styleSheets[c].rules[b].style;var g=e+k.backgroundImage.replace(f,"$1");if(g&&g.match(/\.png/i)){var a=(k.backgroundRepeat=="no-repeat")?"crop":"scale";k.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, src='"+g+"', sizingMethod='"+a+"')";k.backgroundImage="none"}}}}}},makeTips:function(c){var e=new Element("table");e.cellPadding="0";e.cellSpacing="0";e.border="0";var d=new Element("tbody").injectInside(e);var b=new Element("tr").injectInside(d);new Element("td",{"class":"tl"}).injectInside(b);new Element("td",{"class":"t"}).injectInside(b);new Element("td",{"class":"tr"}).injectInside(b);var h=new Element("tr").injectInside(d);new Element("td",{"class":"l"}).injectInside(h);var a=new Element("td",{"class":"c"}).injectInside(h);var g=new Element("div",{"class":"err"}).injectInside(a);c.each(function(i){i.injectInside(g)});if(this.options.display.closeTipsButton){new Element("a",{"class":"close"}).injectInside(a)}new Element("td",{"class":"r"}).injectInside(h);var f=new Element("tr").injectInside(d);new Element("td",{"class":"bl"}).injectInside(f);new Element("td",{"class":"b"}).injectInside(f);new Element("td",{"class":"br"}).injectInside(f);return e},reinitialize:function(a){this.validations.each(function(b){if(b.element){b.errors=[];b.isOK=true;if(this.options.display.flashTips==1||a=="forced"){b.element.destroy();b.element=false}}},this);if(this.form.element){this.form.element.empty()}this.alreadyFocused=false;this.firstError=false;this.elementToRemove=this.alreadyIndicated;this.alreadyIndicated=false;this.form.isValid=true},submitByAjax:function(){this.fireEvent("ajaxRequest");new Request({url:this.form.action,method:this.form.method,data:this.form.toQueryString(),evalScripts:this.options.ajaxEvalScripts,onFailure:function(a){this.fireEvent("ajaxFailure",a)}.bind(this),onComplete:function(a){this.fireEvent("ajaxComplete",a)}.bind(this),onSuccess:function(a){this.fireEvent("ajaxSuccess",a);if(this.options.ajaxResponseDiv){$(this.options.ajaxResponseDiv).set("html",a)}}.bind(this)}).send();return false},onSubmit:function(a){this.reinitialize();this.fireEvent("onSubmit");this.validations.each(function(c){var b=this.manageError(c,"submit");if(!b){this.form.isValid=false}},this);if(this.form.isValid){this.fireEvent("validateSuccess");return(this.options.submitByAjax)?this.submitByAjax():this.options.submit}else{if(this.elementToRemove&&this.elementToRemove!=this.firstError&&this.options.display.indicateErrors==1){this.removeError(this.elementToRemove)}this.focusOnError(this.firstError);this.fireEvent("validateFailure");return false}}});