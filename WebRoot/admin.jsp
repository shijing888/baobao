<%@ page language="java" contentType="text/html; charset=UTF-8"
	import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8" />
<title>宝宝起名</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- basic styles -->
<link href="assets/css/bootstrap.min.css" rel="stylesheet" />
<link rel="stylesheet" href="assets/css/font-awesome.min.css" />
<link rel="stylesheet" href="<%=path%>/css/admin.css" />
<link id="bs-css" href="./css/bootstrap-cerulean.min.css"
	rel="stylesheet" />
<link href="./css/charisma-app.css" rel="stylesheet" />
<script type="text/javascript" src="./js/jquery.js"></script>
<script type="text/javascript" src="./js/admin.js"></script>

<!--[if IE 7]>
		  <link rel="stylesheet" href="assets/css/font-awesome-ie7.min.css" />
		<![endif]-->

<!-- page specific plugin styles -->

<!-- fonts -->

<link rel="stylesheet"
	href="http://fonts.useso.com/css?family=Open+Sans:400,300" />
<!-- ace styles -->

<link rel="stylesheet" href="assets/css/ace.min.css" />
<link rel="stylesheet" href="assets/css/ace-rtl.min.css" />
<link rel="stylesheet" href="assets/css/ace-skins.min.css" />

<!--[if lte IE 8]>
		  <link rel="stylesheet" href="assets/css/ace-ie.min.css" />
		<![endif]-->

<!-- inline styles related to this page -->

<!-- ace settings handler -->

<script src="assets/js/ace-extra.min.js"></script>

<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->

<!--[if lt IE 9]>
		<script src="assets/js/html5shiv.js"></script>
		<script src="assets/js/respond.min.js"></script>
		<![endif]-->
</head>

<body onload="orderList();">
	<div class="navbar navbar-default" id="navbar">
		<script type="text/javascript">
			try {
				ace.settings.check('navbar', 'fixed')
			} catch (e) {
			}
		</script>
		<div class="navbar-container" id="navbar-container">
			<div class="navbar-header pull-left">
				<ul
					class="user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">

					<li><a href="#" onclick="modifyPwd()"> <i
							class="icon-user"></i> 修改密码
					</a></li>

					<li class="divider"></li>

					<li><a href="#" onclick="logout()"> <i class="icon-off"></i>
							退出
					</a></li>
				</ul>
				<a href="#" class="navbar-brand" style="width:200px;"> <small> <i
						class="icon-leaf"></i> 宝宝起名系统
				</small>
				</a>
				<!-- /.brand -->
			</div>
			<!-- /.navbar-header -->

			<div class="navbar-header pull-right" role="navigation">
				<ul class="nav ace-nav">


					<li class="light-blue"><a data-toggle="dropdown" href="#"
						class="dropdown-toggle"> <img class="nav-user-photo"
							src="assets/avatars/user.jpg" alt="Jason's Photo" /> <span
							class="user-info"> <small>欢迎光临,</small><i id="uname">
									ADMIN</i> <input id="hiddenUname" type="text"
								/ style="display: none;">
						</span> <i class="icon-caret-down"></i>
					</a></li>
				</ul>
				<!-- /.ace-nav -->
			</div>
			<!-- /.navbar-header -->
		</div>
		<!-- /.container -->
	</div>

	<div class="main-container" id="main-container">
		<script type="text/javascript">
			try {
				ace.settings.check('main-container', 'fixed')
			} catch (e) {
			}
		</script>

		<div class="main-container-inner">
			<a class="menu-toggler" id="menu-toggler" href="#"> <span
				class="menu-text"></span>
			</a>

			<div class="sidebar" id="sidebar">
				<script type="text/javascript">
					try {
						ace.settings.check('sidebar', 'fixed')
					} catch (e) {
					}
				</script>

				<div class="sidebar-shortcuts" id="sidebar-shortcuts">

					<div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
						<span class="btn btn-success"></span> <span class="btn btn-info"></span>

						<span class="btn btn-warning"></span> <span class="btn btn-danger"></span>
					</div>
				</div>
				<!-- #sidebar-shortcuts -->

				<ul class="nav nav-list">
					<li class="active"><a href="admin.jsp"> <i
							class="icon-dashboard"></i> <span class="menu-text">
								宝宝起名控制台 </span>
					</a></li>

					<li><a href="#" class="dropdown-toggle"> <i
							class="icon-desktop"></i> <span class="menu-text"> 套餐管理 </span> <b
							class="arrow icon-angle-down"></b>
					</a>

						<ul class="submenu">
							<li><a id="tclb" href="javascript:void(0);"
								onclick="packageList();"> <i class="icon-double-angle-right"></i>
									套餐列表
							</a></li>

							<li><a id="addtc" href="javascript:void(0);"
								onclick="packageAdd();"> <i class="icon-double-angle-right"></i>
									新加套餐
							</a></li>


						</ul></li>

					<li><a href="#" class="dropdown-toggle"> <i
							class="icon-list"></i> <span class="menu-text"> 订单管理 </span> <b
							class="arrow icon-angle-down"></b>
					</a>

						<ul class="submenu">
							<li><a href="#" onclick="orderList()"> <i class="icon-double-angle-right"></i>
									订单列表
							</a></li>

						</ul></li>

					<li><a href="#" class="dropdown-toggle"> <i
							class="icon-edit"></i> <span class="menu-text"> 评论管理 </span> <b
							class="arrow icon-angle-down"></b>
					</a>

						<ul class="submenu">
							<li><a href="###" onclick="commentList(1);"> <i
									class="icon-double-angle-right"></i> 全部列表
							</a></li>
							<li><a href="###" onclick="commentList(2);"> <i
									class="icon-double-angle-right"></i> 已审核列表
							</a></li>
							<li><a href="###" onclick="commentList(3);"> <i
									class="icon-double-angle-right"></i> 待审核列表
							</a></li>
						</ul></li>

				</ul>
				<!-- /.nav-list -->

				<div class="sidebar-collapse" id="sidebar-collapse">
					<i class="icon-double-angle-left"
						data-icon1="icon-double-angle-left"
						data-icon2="icon-double-angle-right"></i>
				</div>

				<script type="text/javascript">
					try {
						ace.settings.check('sidebar', 'collapsed')
					} catch (e) {
					}
				</script>
			</div>

			<div class="main-content">
				<div class="breadcrumbs" id="breadcrumbs">
					<script type="text/javascript">
						try {
							ace.settings.check('breadcrumbs', 'fixed')
						} catch (e) {
						}
					</script>

					<ul class="breadcrumb">
						<li><i class="icon-home home-icon"></i> <a href="#">首页</a></li>
						<li class="active">宝宝起名控制台</li>
					</ul>
					<!-- .breadcrumb -->
				</div>

				<div class="page-content">
					<div class="page-header">
						<h1>
							宝宝起名控制台 <small> <i class="icon-double-angle-right"></i>
								查看
							</small>
						</h1>

						<!-- 新增提醒 -->

						<div class=" newAddrow">

							<div class="col-md-3 col-sm-3 col-xs-6">
								<a title="$34 new sales."
									class="well top-block" href="#"> <i
									class="glyphicon yellow"><img src='./images/icon/order.png'/></i>

									<div>新增订单</div>
									 <span class="notification yellow">34</span>
								</a>
							</div>

							<div class="col-md-3 col-sm-3 col-xs-6">
								<a  title="12 new messages."
									class="well top-block" href="#"> <i
									class="glyphicon  red"><img src='./images/icon/comment.png'/></i>

									<div>新增评论</div>
									<span class="notification red">12</span>
								</a>
							</div>
						</div>
					</div>
					<!-- /.page-header -->

					<!-- /.row -->
				</div>
				<!-- /.page-content -->
				<div class="pageContent">
					<!-- 右部分内容 -->
				</div>
			</div>
			<!-- /.main-content -->

		</div>
		<!-- /.main-container-inner -->

		<a href="#" id="btn-scroll-up"
			class="btn-scroll-up btn btn-sm btn-inverse"> <i
			class="icon-double-angle-up icon-only bigger-110"></i>
		</a>
	</div>
	<!-- /.main-container -->

	<!-- basic scripts -->

	<!--[if !IE]> -->

	<script src="assets/js/jquery.min.js"></script>

	<!-- <![endif]-->

	<!--[if IE]>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<![endif]-->

	<!--[if !IE]> -->

	<script type="text/javascript">
		window.jQuery
				|| document
						.write("<script src='assets/js/jquery-2.0.3.min.js'>"
								+ "<"+"script>");
	</script>

	<!-- <![endif]-->

	<!--[if IE]>
<script type="text/javascript">
 window.jQuery || document.write("<script src='assets/js/jquery-1.10.2.min.js'>"+"<"+"script>");
</script>
<![endif]-->

	<script type="text/javascript">
		if ("ontouchend" in document)
			document
					.write("<script src='assets/js/jquery.mobile.custom.min.js'>"
							+ "<"+"script>");
	</script>
	<script src="assets/js/bootstrap.min.js"></script>
	<script src="assets/js/typeahead-bs2.min.js"></script>

	<!-- page specific plugin scripts -->

	<!--[if lte IE 8]>
		  <script src="assets/js/excanvas.min.js"></script>
		<![endif]-->

	<script src="assets/js/jquery-ui-1.10.3.custom.min.js"></script>
	<script src="assets/js/jquery.ui.touch-punch.min.js"></script>
	<script src="assets/js/jquery.slimscroll.min.js"></script>

	<!-- ace scripts -->

	<script src="assets/js/ace-elements.min.js"></script>
	<script src="assets/js/ace.min.js"></script>

	<!-- inline scripts related to this page -->

</body>
<script>
  $(function(){
	  var user='<%=session.getAttribute("userName")%>';
      //获取cookie
      <%
        String nameVlue="null";
        Cookie[] cookies=request.getCookies();
        for(Cookie cookie:cookies){
        	String cookieName=cookie.getName();
        	if("userName".equals(cookieName)){
        		nameVlue=cookie.getValue();
        	}
        }
      %>
      var nameValue='<%=nameVlue%>';
	  if (user == 'null' && nameValue=='null')
			window.location.href = "./login.html";
		else
			$("#uname").text(nameValue);

	});
	//设置登录时间长为2小时
	setTimeout(logout, 2 * 60 * 60 * 1000);
	//用户退出
	function logout() {
        <%session.invalidate();%>
		window.location.href = "./login.html";
	}
</script>
</html>

