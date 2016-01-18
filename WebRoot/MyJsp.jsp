<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'MyJsp.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
        
          <form id="addPackage" action="packageAdd" method="get">
               <div  class="tips">
                     <h3>请按要求输入所添加套餐的信息</h3>
               </div>
                <i>请输入套餐价格：</i><input type="text"/>
                <i>请输入套餐信息：</i><input type="text"/>
                 <i>请输入套餐照片URL：</i><input type="text"/>
                 <input type="submit" value="提交"/>
                 <input type="reset" value="重置"/>
          </form>

  </body>
</html>
