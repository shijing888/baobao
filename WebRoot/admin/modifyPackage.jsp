<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
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

	<link rel="stylesheet" type="text/css" href="<%=base%>/css/admin.css">
	

  </head>
  
  <body>
         <h3>请填写需要修改的套餐信息</h3>
         <div id='addPackage'>
         <div  class='tips'>
               <h3>请按要求输入所添加套餐的信息</h3>
         </div>
          <i>请输入套餐价格：<input id='price' type='text'/></i>
          <i>请输入套餐信息：<input id='info' type='text'/></i>
           <i>请输入套餐照片URL：<input id='photoUrl' type='text'/></i>
           <input id='tcSubmit' type='button' value='添加' onclick='tcSubmit();'/>
           <input id='reset' type='reset' value='取消'/>
           </div>
  </body>
</html>
