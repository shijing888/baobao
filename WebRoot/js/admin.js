//获取request
function getRequest(){
	var request;
	// 创建request对象
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest;
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return request;
}

//获取套餐
function packageList() {
	$("#tclb").click(showPackage)
}
function showPackage() {
	$.post(
					"packageAction_list",
					function(data, status) {
						var tcContent = "";
						$(".pageContent").html(tcContent);
						tcContent += "<div class='wrapContent'>";
						for (i = 0; i < data.length; i++) {
							
							tcContent += "<div class='leftImage'><img src='http://localhost:8080/baobao/images/"
									+ data[i].pictureAddress
									+ "'/></div>";
							tcContent += "<div class='rightContent'>";
							tcContent += "<div><i>原价：</i><span>"
									+ data[i].orginalPrice
									+ "</span></div>";
							tcContent += "<div><i>现价：</i><span>"
									+ data[i].currentPrice
									+ "</span></div>";
							tcContent += " <div><i>详细介绍：</i><span>"
									+ data[i].detailInfo
									+ "</span></div> ";
						tcContent += "<div><i><a href='#' onclick='openwin("+data[i].id+");'"+
									">修改套餐</a></i><a href='#' onclick='deleteTc("+data[i].id+");'"+">删除套餐</a></i></div></div>";
						}
						tcContent += "</div>";
						$(".pageContent").css({
							"width" : "600px",
							"height":"auto",
							"float" : "left",
							"border" : "1px solid #ccc"
						});
						$(".pageContent").html(tcContent);
					}, "json");
}

// 新加套餐
function packageAdd() {
	var tcContent = '<iframe src="./admin/addPackage.html" frameborder="0" scrolling="no" width="100%" height="100%"></iframe>';
	$(".pageContent").css("height","600px");
	$(".pageContent").html(tcContent);

}
//获取套餐中添加功能
function tpSubmit(){
	var photoName=$("#photoUrl").val();
	document.getElementById("addForm").action="packageAction_add?photoName="+photoName;
	document.getElementById("addForm").submit();
		
}

// 获取套餐中添加功能
function tcSubmit1() {
	var tcContent = "";
	var tcprice = $("#price").val();
	var tcinfo = $("#info").val();
	var tcphotoUrl = $("#photoUrl").val();
	$(".pageContent").html(tcContent);
	$
			.post(
					"packageAction_add",
					{
						price : tcprice,
						info : tcinfo,
						photoUrl : tcphotoUrl
					},
					function(data, status) {
						if (data == "success") {
							tcContent += "<div><h3>添加成功！</h3>";
							tcContent += "<a href='####' onclick='packageAdd();'>继续添加</a>";
							tcContent += "&nbsp&nbsp<a href='####' onclick='packageList();'>查看套餐</a>";
							tcContent += "</div>";
							$(".pageContent").html(tcContent);
						} else {
							tcContent = "<div><h3>添加失败，请重新添加！</h3>";
							$(".pageContent").html(tcContent);
							setTimeout(packageAdd, 3000);
						}
					}, "text");
};
// 修改套餐的弹窗
function openwin(id) {
	var path="./admin/modifyPackage.jsp?"+id;
	OpenWindow = window.open(path, "_blank",
			"height=350,width=550,top=300,left=500");
	// OpenWindow.document.write("<TITLE>例子</TITLE>" )
	OpenWindow.document.close();
}
// 删除套餐
function deleteTc(id){
	$.post("packageAction_deleteTC",{id:id},function(data,status){
		 if(data=="success"){
			 alert("删除成功！");
			 showPackage();
		 }
		 else {
			 alert("删除失败，请重试！");
		}
	},"text");
}


//评论列表
function commentList(){
	var tcContent = '<iframe src="./admin/showCommentList.html" frameborder="0" scrolling="no" width="100%" height="100%"></iframe>';
	$(".pageContent").css("height","800px");
	$(".pageContent").css("width","700px");
	$(".pageContent").html(tcContent);
	
}