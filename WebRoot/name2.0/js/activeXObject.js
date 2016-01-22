/**
 * 函数
 */
$(function(){  
//加载扩展模块
	layer.config({
	    extend: 'layer.ext.js'
	});	
});	
$(".c ul:eq(1)").hide();
$(function(){
	$.ajax({
		url:'actionxobject.php',
		type:'post',
		success:function(data){
			$(".c ul:eq(0)").append(data);
		}
	});
});
$(function(){
	$(".c_p").click(function(){
		$(".c_h3").css({"background":"#A21E2C","color":"#fff"}),$(this).css({"background":"#EEEEEE","color":"#85000E"});
		$(".c ul:eq(0)").show(),$(".c ul:eq(1)").hide();
	});
	$(".c_h3").click(function(){
		$(".c_p").css({"background":"#A21E2C","color":"#fff"}),$(this).css({"background":"#EEEEEE","color":"#85000E"});
		$(".c ul:eq(1)").show(),$(".c ul:eq(0)").hide();
	});
});
//用户评论
$(function()
{
	$(".btn").bind("click",function()
	{
		
		var ordersn = $("[name='ordersn']").val();
		var content = $("[name='content']").val();
		$.ajax({
				url:'commentajaxfrom.php',
				type:'post',
				data:'ordersn='+ordersn+"&content="+content,
				success:function(data){
					if( data == "评价成功,等待审核中..." || data == "谢谢您的评价，付款订单号每天只能评论一次，明天再来！")
					{
						layer.msg(data,{icon:1});
						$("#PingLun")[0].reset();
					}else{
						layer.msg(data,{icon:0});
					}
				}
			});
	});
});