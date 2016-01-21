<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>修改套餐</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<link rel="stylesheet" type="text/css" href="<%=path%>/css/admin.css">
	<script type="text/javascript" src="./js/jquery.js"></script>

  </head>
  
  <body >
         <h3>请填写需要修改的套餐信息</h3>
         <div id='addPackage'>
          <i>请输入原来价格：<input class="modifyInit" id='modifyPrice' type='text'/></i>
          <i>请输入当前价格：<input class="modifyInit" id='modifyCurrentPrice' type='text'/></i>
          <i>请输入套餐信息：<input class="modifyInit"  id='modifyInfo' type='text'/></i>
           <i>请输入套餐照片URL：<input class="modifyInit" id='modifyPhotoUrl' type='text'/></i>
           <input id='tcSubmit' type='button' value='修改' onclick='tcSubmit();'/>
           <input id='reset' type='reset' value='取消'/>
           </div>
  </body>
</html>
<script>
   $(function(){
	   var urlstr=document.URL;
  	 var id=urlstr.indexOf("?");
  	 urlstr=urlstr.substr(id+1);
  	 $.post("packageAction_queryTC",{pid:urlstr},function(data,status){
  		 $("#modifyPrice").val(data[0].orginalPrice);
  		 $("#modifyCurrentPrice").val(data[0].currentPrice);
  		 $("#modifyInfo").val(data[0].detailInfo);
  		 $("#modifyPhotoUrl").val(data[0].pictureAddress);
  		 $("#addPackage .modifyInit").css("color","#ccc");
  	 },"json");
  	 
  	 $("#tcSubmit").click(function(){
  		 var price=$("#modifyPrice").val();
  		 var currentPrice=$("#modifyCurrentPrice").val();
  		 var info=$("#modifyInfo").val();
  		 var photoUrl=$("#modifyPhotoUrl").val();
  		 $.post("packageAction_updatePackage",{pid:urlstr,price:price,currentPrice:currentPrice,info:info,photoUrl:photoUrl},function(data,status){
  			 if(data=="success")
  				 alert("修改成功！");
  			 else
  				 alert("修改失败！");
  		 },"text");
  	 });
   });

</script>