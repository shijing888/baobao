
//获取套餐
function packageList() {
	$("#tclb").click(showPackage)
}
function showPackage() {
	var tcContent = '<iframe id="listFrame" src="./admin/packages.html" frameborder="0" scrolling="no" width="100%" height="100%">';
	$(".pageContent").html(tcContent);
	$(".pageContent").css({
		"width" : "1000px",
		"height":"600",
		"scrollbar":"auto",
		"float" : "left",
		"border" : "1px solid #ccc"
	});
}

// 新加套餐
function packageAdd() {
	var tcContent = '<iframe src="./admin/package_edit.html" frameborder="0" scrolling="no" width="100%" height="100%"></iframe>';
	$(".pageContent").css("height","600px");
	$(".pageContent").html(tcContent);

}

//订单列表
function orderList(){
	var tcContent = '<iframe id="listFrame" src="./admin/order_list.html" frameborder="0" scrolling="no" width="100%" height="100%">';
	$(".pageContent").html(tcContent);
}

//评论列表
function commentList(val){
	var tcContent = '<iframe src="./admin/showCommentList.html?val='+val+'" frameborder="0" scrolling="no" width="100%" height="100%"></iframe>';
	$(".pageContent").css("height","800px");
	$(".pageContent").css("width","1000px");
	$(".pageContent").html(tcContent);
	
}

//点击显示用户修改密码、退出
$(function(){
	$(".light-blue").click(function(){
		$(".user-menu").toggle();
	});
});

//修改密码
function modifyPwd(){
	var uname=$("#uname").text();
	var tcContent = '<iframe src="./admin/admin_edit.html?'+uname+'" frameborder="0" scrolling="no" width="100%" height="100%"></iframe>';
	$(".pageContent").html(tcContent);
}