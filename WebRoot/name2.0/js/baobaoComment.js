$(function(){
	//显示评论
	$.post("showComment",function(data,status){
		var content="";
		for(var i=0;i<data.length;i++){
			content+='<li><span>'+data[i].orderId+''+' &nbsp &nbsp评论道:'+'<br></span>'+'<i>'+data[i].userCom;
			content+='</i></li>'
		}
		$(".c_content i").css("color","black");
		$(".c_content").html(content);
	},"json");
	blurValidate();
	//添加评论
	$(".btn").click(function(){
		if(commentValidate()){
			document.getElementById("addComment").action="addComment";
			document.getElementById("addComment").submit();
			window.location.href="./baobao.html#comment";
		}else{
			layer.msg('请正确输入订单号和评论~~');
		}
		
	});
	
});
  //添加评论验证 
  function blurValidate(){
	//提示订单号不对
	$("[name='ordersn']").blur(function(){
		if(this.value==''){
			  layer.tips('订单号不能为空', this);
		}else if(this.value.length!=18){
			  layer.tips('请输入长度为18位的订单号', this);
		}else if(this.value.length==18){
			var orderId=this.value;
			 $.post("checkOrderExist",{orderId:orderId},function(data,status){
				 if(data=="notExist"){
					 layer.tips('该订单号不存在或尚未支付', $("[name='ordersn']")); 
				 }
			 },"text");
			
		}
		
	});
	
	//提示评论内容
	$("[name='content']").blur(function(){
		if(this.value==''){
			  layer.tips('内容不能为空', this);
		}else if(this.value.length>50){
			  layer.tips('内容超过50字，请重新编辑！', this);
		}
		
	});
}
//提交前验证
  function commentValidate(){
	var $orderText=$("[name='ordersn']");
	var $contentText=$("[name='content']");
	if($orderText.val()==''){
		  return false;
	}else if($orderText.val().length!=18){
		  return false;
	}else if($orderText.val().length==18){
		var orderId=$orderText.val();
		 $.post("checkOrderExist",{orderId:orderId},function(data,status){
			 if(data=="notExist"){
				 return false;
			 }
		 },"text");
	}	
	
	if($contentText.val()==''){
		  return false;
	}else if($contentText.val().length>50){
		  return false;
	}
	return true;
  }