<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  
<head>
<title>大师起名网收银台-付款方式</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link type="text/css" rel="stylesheet" href="./name2.0/css/pay_99bill2.0.css"/>
<link rel="stylesheet" type="text/css" href="./name2.0/css/layout.css"/>
<script type="text/javascript" src="./js/jquery.js"></script>
<script type="text/javascript" src="./js/pay_99bill2.0.js"></script>
</head>
<body onload="showOrderValue();">
<!--顶部start-->	
<!--  head start -->
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
<!--顶部end-->	
<!--用户订单信息start-->	
<div class="pay-userinfo">
	<div class="info-box">
		<div class="info-left">
			<p class="info-p">服务名称 ：<span class="tcmc"></span></p>
			<p class="info-p">订 单 &nbsp;号 ：<span class="dingdan"></span></p>
			<p class="info-p">联系邮箱 ：<span class="email"></span></p>
			<p class="info-p">购买时间 ：<span class="gmsj"></span></p>
			<p class="info-m">应付金额 ：<font>&yen;<span class="money"></span></font></p>
		</div>	
		<div class="info-right">
			<p class="info-r">起名姓氏 ：<span class="xingshi"></span></p>
			<p class="info-r">性 &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;别 ：<span class="gender"></span></p>
			<p class="info-r">起名字数 ：<span class="qmzs"></span></p>
			<p class="info-r">生 &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;日 ：<span class="csrq"></span></p>
			<p class="info-r">出 生 &nbsp;地 ：<span class="csd"></span></p>
			<p class="info-r">禁忌用字 ：<span class="jjyz"></span></p>
			<p class="info-r">指定字辈 ：<span class="zdzb"></span></p>
		</div>
	</div>
</div>
<!--用户订单信息end-->
<!--热线start-->		
<div class="ph-box"></div>
<!--热线end-->	
<!-- step start-->	
<div class="step-box"><p class="not-step"></p><p class="not-st">请在下方选择一种支付方式</p></div>
<!-- step end-->	
<!-- 选择付款方式 start-->	
<div class="zf-fs">
	<div class="zf-box">
	<ul class="zf-list">
		<!--<li class="zf-img"><img src="./images/zf1.jpg"/></li>-->
		<li class="zf-img"><img src="./name2.0/img/zf2.jpg"/></li>
		<li class="zf-img"><img src="./name2.0/img/zf3.jpg"/></li>
		<li class="zf-img"><img src="./name2.0/img/zf5.jpg"/></li>
		<!--<li class="zf-img"><img src="./images/zf4.jpg"/></li>-->
	</ul>
	</div>
</div>
<!--支付宝-->
<!--<form id="form3" name="form3" method="post" action="../payment.php" target="_blank">
	<input type="hidden" name="paycode" value="alipay">
	<input type="hidden" name="ordersn" value="">
	<input type="hidden" name="amount" value="">
	<input type="hidden" name="productname" value="">
	<input type="hidden" name="pd_FrpId" value="alipay">
    <input type="hidden" name="mailto" value="">    
    <input type="hidden" name="mailproname" value="">
</form>
<script type="text/javascript">$(function(){$(".zf-img:eq(0)").click(function(){$("#form3").submit();});});</script>-->
<!--网银支付-->
<form id="form1" name="form1" method="post" action="./step/pay_99bill1_wystep2.php">
	<input type="hidden" name="email" value="******ing0214@gmail.com">
	<input type="hidden" name="tSurname" value="张">
	<input type="hidden" name="tSex" value="男">
	<input type="hidden" name="tNameSum" value="双字名">
	<input type="hidden" name="nun" value="公历">    
	<input type="hidden" name="tDateTime" value="2016年01月01日00时00分">
	<input type="hidden" name="chushengdi" value="江苏-南京市">
	<input type="hidden" name="tjihuitxt" value="克">
	<input type="hidden" name="tzibeistr" value="指定第一个字‘玄’">
	<input type="hidden" name="p_Other" value="玄">
	<input type="hidden" name="ordersn" value="MDS14536004646136D">
	<input type="hidden" name="amount" value="288">
	<input type="hidden" name="productname" value="大运经典起名">
	<input type="hidden" name="pd_FrpId" value="tenpay">
	<input type="hidden" name="mailto" value="shijing0214@gmail.com">    
	<input type="hidden" name="mailproname" value="大运经典起名">
</form>
<script type="text/javascript">$(function(){$(".zf-img:eq(0)").click(function(){$("#form1").submit();});});</script>
<!--快捷支付-->
<form id="frmyintong" name="form8" action="../payment.php" target="_blank">
	<input type="hidden" name="paycode" value="huipengpay">
	<input type="hidden" name="ordersn" value="MDS14536004646136D">
	<input type="hidden" name="amount" value="288">
	<input type="hidden" name="productname" value="大运经典起名">
	<input type="hidden" name="pd_FrpId" value="huipengpay">
	<input type="hidden" name="mailto" value="shijing0214@gmail.com">    
	<input type="hidden" name="mailproname" value="大运经典起名">
</form>
<script type="text/javascript">$(function(){$(".zf-img:eq(1)").click(function(){$("#frmyintong").submit();});});</script>
<!--财付通-->
<!--<form id="form4" name="form4" method="post" action="../payment.php" target="_blank">
	<input type="hidden" name="paycode" value="tenpay">
	<input type="hidden" name="ordersn" value="">
	<input type="hidden" name="amount" value="">
	<input type="hidden" name="productname" value="">
	<input type="hidden" name="pd_FrpId" value="tenpay">
	<input type="hidden" name="mailto" value="">    
	<input type="hidden" name="mailproname" value="">
</form>
<script type="text/javascript">$(function(){$(".zf-img:eq(5)").click(function(){$("#form4").submit();});});</script>-->
<!--汇款-->
<form id="form2" name="form2" method="post" action="./step/pay_99bill2_step2.php">
	<input type="hidden" name="email" value="******ing0214@gmail.com">
	<input type="hidden" name="tSurname" value="张">
	<input type="hidden" name="tSex" value="男">
	<input type="hidden" name="tNameSum" value="双字名">
	<input type="hidden" name="nun" value="公历">    
	<input type="hidden" name="tDateTime" value="2016年01月01日00时00分">
	<input type="hidden" name="chushengdi" value="江苏-南京市">
	<input type="hidden" name="tjihuitxt" value="克">
	<input type="hidden" name="tzibeistr" value="指定第一个字‘玄’">
	<input type="hidden" name="p_Other" value="玄">
	<input type="hidden" name="ordersn" value="MDS14536004646136D">
	<input type="hidden" name="amount" value="288">
	<input type="hidden" name="productname" value="大运经典起名">
	<input type="hidden" name="pd_FrpId" value="tenpay">
	<input type="hidden" name="mailto" value="shijing0214@gmail.com">    
	<input type="hidden" name="mailproname" value="大运经典起名">
</form>
<script type="text/javascript">$(function(){$(".zf-img:eq(3)").click(function(){$("#form2").submit();});});</script>
<!-- 选择付款方式 end-->	
<!--微信支付-->
<form id="form6" name="form6" method="post" action="./step/pay_99bill3_step2.php">
	<input type="hidden" name="email" value="******ing0214@gmail.com">
	<input type="hidden" name="tSurname" value="张">
	<input type="hidden" name="tSex" value="男">
	<input type="hidden" name="tNameSum" value="双字名">
	<input type="hidden" name="nun" value="公历">    
	<input type="hidden" name="tDateTime" value="2016年01月01日00时00分">
	<input type="hidden" name="chushengdi" value="江苏-南京市">
	<input type="hidden" name="tjihuitxt" value="克">
	<input type="hidden" name="tzibeistr" value="指定第一个字‘玄’">
	<input type="hidden" name="p_Other" value="玄">
	<input type="hidden" name="ordersn" value="MDS14536004646136D">
	<input type="hidden" name="amount" value="288">
	<input type="hidden" name="productname" value="大运经典起名">
	<input type="hidden" name="pd_FrpId" value="tenpay">
	<input type="hidden" name="mailto" value="shijing0214@gmail.com">    
	<input type="hidden" name="mailproname" value="大运经典起名">
</form>
<script type="text/javascript">$(function(){$(".zf-img:eq(2)").click(function(){$("#form6").submit();});});</script>
<!-- 选择付款方式 end-->	
<!--版本信息start-->
<footer class="s-footer">
			<div class="cont">
				
				<p class="ic">
					<a href="javascript::"><img src="./name2.0/img/c1.jpg"/></a>
					<a href="javascript::"><img src="./name2.0/img/c2.jpg"/></a>
					<a href="javascript::"><img src="./name2.0/img/c3.jpg"/></a>
				</p>
				<p class="cpy mt30">Copyright &copy; 2005 - 2015 XXX.com. ALL
				Rights Reserved XXX 版权所有 XXXX有限公司</p>
			<p class="cpy">粤ICP备XXXX号-1</p>
				
			</div><!--end cont-->
		</footer><!--end s-footer-->
<!--版本信息start-->
 <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-52807804-6', 'auto');
  ga('set', 'dimension2', '收银台');
  ga('send', 'pageview');
</script>
<script>
   // 显示订单信息
function showOrderValue() {
	alert('${list.orderId}')
	var xdsj = CurentTime();
	$(".tcmc").text('${list.name}');
	$(".dingdan").text('${list.orderId}');
	$(".email").text('${list.email}');
	$(".gmsj").text(xdsj);
	$(".money").text('${list.money}');
	$(".xingshi").text('${list.name}');
	$(".gender").text('${list.gender}');
	$(".qmzs").text('${list.qmzishu}');
	$(".csrq").text('${list.birthdate}');
	$(".csd").text('${list.birthplace}');
	$(".jjyz").text('${list.forbiddenWord}');
	$(".zdzb").text('${list.specifyGeneration}');
}

// 获取当前时间
function CurentTime() {
	var now = new Date();

	var year = now.getFullYear(); // 年
	var month = now.getMonth() + 1; // 月
	var day = now.getDate(); // 日

	var hh = now.getHours(); // 时
	var mm = now.getMinutes(); // 分
	var ss = now.getSeconds(); // 秒

	var clock = year + "-";

	if (month < 10)
		clock += "0";
	clock += month + "-";

	if (day < 10)
		clock += "0";
	clock += day + " ";

	if (hh < 10)
		clock += "0";
	clock += hh + ":";

	if (mm < 10)
		clock += '0';
	clock += mm + ":";

	if (ss < 10)
		clock += '0';
	clock += ss;

	return (clock);
}
</script>
</body>
</html>