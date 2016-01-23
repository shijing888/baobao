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
	
	//添加评论
	$(".btn").click(function(){
		document.getElementById("addComment").action="addComment";
		document.getElementById("addComment").submit();
		window.location.href="./baobao.html#comment";
	});
});