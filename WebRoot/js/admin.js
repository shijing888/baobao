//全局变量

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
							
							tcContent += "<div class='leftImage'><img src='./"
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
							"float" : "left",
							"border" : "1px solid #ccc"
						});
						$(".pageContent").html(tcContent);
					}, "json");
}

// 新加套餐
function packageAdd() {
	$("#addtc")
			.click(
					function() {
						var tcContent = "";
						$(".pageContent").html(tcContent);
						tcContent += "  <div id='addPackage'>\
         <div  class='tips'>\
               <h3>请按要求输入所添加套餐的信息</h3>\
         </div>\
          <i>请输入套餐价格：<input id='price' type='text'/></i>\
          <i>请输入套餐信息：<input id='info' type='text'/></i>\
           <i>请输入套餐照片URL：<input id='photoUrl' type='text'/></i>\
           <input id='tcSubmit' type='button' value='添加' onclick='tcSubmit();'/>\
           <input id='reset' type='reset' value='取消'/>\
           </div>"
						$(".pageContent").html(tcContent);
					});
}
// 获取套餐中添加功能
function tcSubmit() {
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
			"height=350,width=450,top=300,left=500");
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
