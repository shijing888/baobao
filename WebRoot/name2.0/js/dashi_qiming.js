/**
 * 大师起名
 */
$(function(){
	$(".But").each(function(index){
		$(this).click(function(){
			$(".border_box").css({"border":"1px solid #A8A49F","background":"#F8F2E2"}),$(".border_box:eq("+index+")").css({"border":"1px solid red","background":"#FFEACE"});
			$(".t_sv").hide(),$(".t_sv:eq("+index+")").show();		
			$(".getAmunt").find("em").html($("[name='price']:eq("+index+")").val());
			$("[name='falg']").val(index);
		});
	});
	$("[name='price']").each(function(index){
		$(this).click(function(){
			$(".border_box").css({"border":"1px solid #A8A49F","background":"#F8F2E2"}),$(".border_box:eq("+index+")").css({"border":"1px solid red","background":"#FFEACE"});
			$(".t_sv").hide(),$(".t_sv:eq("+index+")").show();	
			$(".getAmunt").find("em").html($("[name='price']:eq("+index+")").val());
			$("[name='falg']").val(index);
		});
	});
});
//表单验证
$(function(){
	$("#form_bnt_to").bind("submit",function(){
		/*协议
		var check = $("[name='xy']").is(":checked");	
		if(!check){
			layer.alert("请阅读并同意协议",{icon:0});	
			return false;
		}*/
		var tSval = $("[name='tSurname']").val();
		if( tSval == "")
		{
			$("[name='tSurname']").focus();
			layer.open({
				type: 4,
				time: 5000,
				content: ['<font color="#FFFFFF">XX提示您：</font><font color="#FF0000">姓氏不能留空,请填写起名姓氏</font>', '#tSurname']
			}); 
			return false;
		}	
		var patrn= /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
		if(!patrn.exec(tSval))
		{
			$("[name='tSurname']").focus();
			layer.open({
				type: 4,
				time: 5000,
				content: ['<font color="#FFFFFF">XX提示您：</font><font color="#FF0000">请输入中文姓氏(如:"李")</font>', '#tSurname']
			}); 
			return false;
		}
		if($("[name='Email']").val() == "")
		{
			$("[name='Email']").focus();
			layer.open({
				type: 4,
				time: 5000,
				content: ['请输入邮箱地址(如:xxxxxx@qq.com)', '#Email']
			}); 
			return false;
		}	
		var email = $("[name='Email']").val();
		email = email.replace(/(^\s*)|(\s*$)/g, "");
		if(isEmail(email) == false){
			$("[name='Email']").focus();
			layer.open({
				type: 4,
				time: 5000,
				content: ['请输入正确的邮箱格式,如xxxxxx@qq.com', '#Email']
			}); 
			return false;
		}							  
	});	
function isEmail(str)
{ 
	//验证邮箱
	var reg = /^(.*)+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	return  reg.test(str);
}	
});