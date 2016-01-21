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
    <script type="text/javascript" src="<%=path%>/js/jquery.js"></script>
    <script type="text/javascript" src="<%=path%>/js/admin.js"></script>
  </head>
  
  <body >
         <!--  <h3>请填写需要修改的套餐信息</h3>
         <div id='addPackage'>
          <i>请输入原来价格：<input class="modifyInit" id='modifyPrice' type='text'/></i>
          <i>请输入当前价格：<input class="modifyInit" id='modifyCurrentPrice' type='text'/></i>
          <i>请输入套餐信息：<input class="modifyInit"  id='modifyInfo' type='text'/></i>
           <i>请输入套餐照片：<input class="modifyInit" id='modifyPhotoUrl' type='file'/></i>
           <input id='tcSubmit' type='button' value='修改' onclick='tcSubmit();'/>
           <input id='reset' type='reset' value='取消'/>
           </div>-->
    <form id="addForm" method="post" action="" enctype="multipart/form-data">
		<div id='addPackage'>
			<div class='tips'>
				<h3>请填写需要修改的套餐信息</h3>
			</div>
			<div class="wrapAdd">
			    <input class="pid" name="pid" type="text" style="display: none;">
				<i>请输入原来价格：<input class="modifyInit" id='modifyPrice' name='price' type='text' /></i>
				<i>请输入当前价格：<input class="modifyInit" id='modifyCurrentPrice' name='currentPrice' type='text' /></i>
				<i>请输入套餐信息：<input class="modifyInit"  id='modifyInfo'
					name='info' type='text' /></i> 
			    <i>请添加套餐照片：<input  class="modifyInit" id='modifyPhotoUrl' name='photoUrl'
					type='file'/></i> 
				<input id='tcSubmit' type='button'onclick='tcSubmit()' value='修改' /> 
				<input id='reset' type='reset' value='取消' />
			</div>
		</div>
	</form>
           
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
  		 $(".modifyInit").css("color","#ccc");
  	 },"json");
  	 
  	 $("#tcSubmit").click(function(){
  		var photoName=$("#modifyPhotoUrl").val();alert(photoName+"  "+urlstr)
  		$(".pid").val(urlstr);
  		document.getElementById("addForm").action="packageAction_updatePackage?photoName="+photoName;
  		document.getElementById("addForm").submit();
  			
  	 });
   });

</script>