
//获取套餐
function packageList() {
	$("#tclb").click(showPackage)
}
function showPackage() {
	var tcContent = '<iframe id="listFrame" src="./admin/packages.html" frameborder="0" scrolling="no" width="100%" height="100%">';
	$(".pageContent").html(tcContent);
	$(".pageContent").css({
		"width" : "900px",
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

//评论列表
function commentList(val){
	var tcContent = '<iframe src="./admin/showCommentList.html?val='+val+'" frameborder="0" scrolling="no" width="100%" height="100%"></iframe>';
	$(".pageContent").css("height","800px");
	$(".pageContent").css("width","900px");
	$(".pageContent").html(tcContent);
	
}
$(function(){
	$.post("",function(data,status){},"text");
});