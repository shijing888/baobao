<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE html>
<html>
<head>
<base href="<%=basePath%>">

<title>订单查询</title>
<meta charset="UTF-8">
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link rel="stylesheet" type="text/css" href="./name2.0/css/layout.css" />
<link type="text/css" rel="stylesheet" href="./name2.0/css/about.css" />
<link type="text/css" rel="stylesheet" href="./name2.0/css/ddcx.css" />
<link type="text/css" rel="stylesheet"
	href="./name2.0/css/suan5_flooter.css" />
</head>

<body>
	<header class="s-header">
		<div class="cont">
			<a href="./baobao.html" class="logo"><img
				src="./name2.0/img/logo.png" alt="大师起名-起名大师，大师亲算" /></a>
			<!--end logo-->
			<nav class="menu">
				<ul>
					<li class="item"><a href="./baobao.html">首页</a></li>
					<li class="hr">|</li>
					<li class="item"><a href="./server.html">服务详情</a></li>
					<li class="hr">|</li>
					<li class="item"><a href="./search_index.jsp">订单查询</a></li>
					<li class="hr">|</li>
					<li class="item"><a href="./qa.html">常见问题</a></li>
					<li class="hr">|</li>
					<li class="item"><a href="./dahi_conpany.html">关于我们</a></li>
				</ul>
			</nav>
			<!--end menu-->
		</div>
		<!--end cont-->
	</header>
	<!--end s-header-->
<div style="width:1000px;height:450px;margin:auto;overflow-y:auto;">
	<form action="search.php" method="post">
		<div class="login_box">
			<div class="login_head">普通订单查询</div>
			<div class="put_box"><input id="put_sa1" type="text" name="seach" value="选填一项：订单号/邮箱/手机号"/></div>
			<div class="put_virily"><input id="put_sa2" type="text" name="virily" value=""/></div>
			<div class="put_virily_img" onclick="document.getElementById('imgs').src='virify/virify.php?random='+Math.random();"><img src="virify/virify.php" border="0" id="imgs"/></div>
			<div class="put_bnt"><input type="image" src="name2.0/bbqm_imgs/search_bnt.png"/></div>
			<div class="put_tishi"></div>
		</div>
	</form>
</div>
<script>
	put_sa1.onfocus = function(){
		if(this.value == "选填一项：订单号/邮箱/手机号"){
			this.value = '';
		}
	}
	put_sa1.onblur = function(){
		if(this.value == ""){
			this.value = '选填一项：订单号/邮箱/手机号';
		}
	}
</script>
<!--尾部开始-->
		<div id="flooter_502">
			<div id="footer_323">
				<ul class="clear">
					<li style="background:#F6F6F6;"></li>
					<li style="background:#F6F6F6;"><a href="javascript::" target="_blank"><img src="./name2.0/img/c1.jpg" width="124" height="47"/></a></li>
					
					<li style="background:#F6F6F6;"><a href="javascript::" target="_blank"><img src="./name2.0/img/c2.jpg" width="124" height="47"/></a></li>
					
					<li style="background:#F6F6F6;"><a href="javascript::" target="_blank"><img src="./name2.0/img/c3.jpg" width="124" height="47"/></a></li>
					<li style="background:#F6F6F6;"></li>
				</ul>
			</div>
			<div id="copyright">
				<p class="cpy mt30">Copyright &copy; 2005 - 2015 XXX.com. ALL
				Rights Reserved XXX 版权所有 XXXX有限公司</p>
			<p class="cpy">粤ICP备XXXX号-1</p>
				
			</div>
		</div>
	<!--尾部结束-->	
</body>
</html>
