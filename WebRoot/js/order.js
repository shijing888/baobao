//用于处理搜索及删除导入导出功能
$(function() {

	$("#searchSelected").click(function() {
		$("#searchTab").toggle();
		$(this).toggleClass("searchOpen");
	});

	$("#searchTab li").hover(function() {
		$(this).addClass("selected");
	}, function() {
		$(this).removeClass("selected");
	});

	$("#searchTab li").click(function() {
		$("#searchSelected").html($(this).html());
		$("#searchTab").hide();
		$("#searchSelected").removeClass("searchOpen");
	});

	
	//搜索
	$("#searchBtn").click(function(){
		var searchItem=$("#searchSelected").text();
		var flag=(searchItem=='订单号')? 0:1;
		var searchWords=$("input[name='w']").val();
		if(searchWords!=''){
			$.post(
					"searchOrder",{pageSize:LEN,flag:flag,searchWords:searchWords},
					function(data, status) {
						var orderItems = "";
						var len=0;
						if(data[0].length>=0)
							len=data[0].length;
						$(".table").html(orderItems);
						orderItems+='<tr>';
						orderItems+='<th width="30"><input type="checkbox" id="all"';
						orderItems+='	onclick="selectOrClearAllCheckbox(this);" /></th>';
						orderItems+='<th>订单号</th>';
						orderItems+='<th>邮箱</th>';
						orderItems+='<th>姓氏</th>';
						orderItems+='<th>性别</th>';
						orderItems+='<th>起名字数</th>';
						orderItems+='<th>字辈要求</th>';
						orderItems+='<th>禁忌</th>';
						orderItems+='<th>出生日期</th>';
						orderItems+='<th>出生地</th>';
						orderItems+='<th>订单状态</th>';
						orderItems+='<th>下单时间</th>';
						orderItems+='<th>详细说明</th>';
						orderItems+='<th>手机</th>';
						orderItems+='<th>QQ</th>';
						orderItems+='<th>操作</th>';
						orderItems+='</tr>';
						if(len>LEN)
							len=LEN;
						for (i = 0; i <len; i++) {
							orderItems += "<tr>";
							orderItems += '<td><input type="checkbox" name="IDCheck" value="" class="acb" /></td>';
							orderItems += '<td>' + data[0][i].orderId + '</td>';
							orderItems += '<td>' + data[0][i].mailInfo + '</td>';
							orderItems += '<td>' + data[0][i].familyName + '</td>';
							orderItems += '<td>' + data[0][i].gender + '</td>';
							orderItems += '<td>' + data[0][i].wordCount + '</td>';
							orderItems += '<td>' + data[0][i].optionRemedy + '</td>';
							orderItems += '<td>' + data[0][i].forbiddenWord + '</td>';
							orderItems += '<td>' + data[0][i].birthDay
									+ '</td>';
							orderItems += '<td>' + data[0][i].birthPlace
									+ '</td>';
							orderItems += '<td>' + data[0][i].orderState
									+ '</td>';
							orderItems += '<td>' + data[1][i]
									+ '</td>';
							orderItems += '<td>' + data[0][i].specifyGeneration + '</td>';
							orderItems += '<td>' + data[0][i].telePhone + '</td>';
							orderItems += '<td>' + data[0][i].qq + '</td>';
							orderItems += '<td>';
							orderItems += '<a href="javascript:del('
									+ data[0][i].orderId + ');">删除</a>';
							orderItems += '</td>';
							orderItems += '</tr>';
						}
						$("table").append(orderItems);
						changeColor();
						$(".ui_tb_h30").css("display","none");
					}, "json");
		}else{
			layer.tips("请输入内容",this);
		}
	  
	});
});



$(function() {

	/** 导入 * */
	$("#importBtn").fancybox({
		'href' : '/xngzf/archives/importFangyuan.action',
		'width' : 633,
		'height' : 260,
		'type' : 'iframe',
		'hideOnOverlayClick' : false,
		'showCloseButton' : false,
		'onClosed' : function() {
			window.location.href = 'house_list.html';
		}
	});

/** Excel导出 * */
function exportExcel() {
	if (confirm('您确定要导出吗？')) {
		var fyXqCode = $("#fyXq").val();
		var fyXqName = $('#fyXq option:selected').text();
		// alert(fyXqCode);
		if (fyXqCode == "" || fyXqCode == null) {
			$("#fyXqName").val("");
		} else {
			// alert(fyXqCode);
			$("#fyXqName").val(fyXqName);
		}
		$("#submitForm").attr("action",
				"/xngzf/archives/exportExcelFangyuan.action").submit();
	}
}

});

/** 删除 **/
function del(orderID) {
	// 非空判断
	if (orderID == '')
		return;
	if (confirm("您确定要删除吗？")) {
		$.post("orderDelete", {
			id : orderID
		}, function(data, status) {
			if (data == "success") {
				window.location.href = 'admin.jsp';
			} else {
				alert("删除失败，请重试！");
				window.location.href = 'admin.jsp';
			}
		}, "text");
	}
}

/** 批量删除 **/
function batchDel() {
	if ($("input[name='IDCheck']:checked").size() <= 0) {
		art.dialog({
			icon : 'error',
			title : '友情提示',
			drag : false,
			resize : false,
			content : '至少选择一条',
			ok : true,
		});
		return;
	}
	
	var allIDCheck=new Array();
	var len=0;
	$("input[name='IDCheck']:checked").each(
			function(index, domEle) {
				pid = $(domEle).parent("td").next();
				allIDCheck[len] = pid.text();
				len++
			});
	if (len > 0) {
		
		if (confirm("您确定要批量删除这些记录吗？")) {
			// 提交form
			for ( var i = 0; i < len; i++) {
				$.post("orderDelete", {id : allIDCheck[i]
		    }, function(data, status) {
			if (data == "success") {
				window.location.href = 'admin.jsp';
			} else {
				alert("删除失败，请重试！");
				window.location.href = 'admin.jsp';
			}
		}, "text");
			}
		}
	}
}


// 显示订单列表
$(function() {
	findFirst();
});

// 全局变量保存每页记录数，当前页。
var LEN=10;
var current_page = 1;
var p_countpage;

// 首页
function findFirst() {
	current_page = 1;
	$("#pid").text(current_page);
	showOrders();
}
// 上一页
function findBack() {

	if (current_page > 1) {
		current_page -= 1;
		$("#pid").text(1);
	}

	$("#pid").text(current_page);
	showOrders();

}

// 下一页
function findNext() {
	if (current_page < p_countpage) {
		current_page += 1;
		document.getElementById("pid").innerText = p_countpage;
	}
	$("#pid").text(current_page);
	showOrders();
}

// 尾页
function findLast() {
	current_page = p_countpage;
	$("#pid").text(current_page);
	showOrders();
}

/** 输入页跳转 * */
function jumpInputPage() {
	// 如果“跳转页数”不为空
	if ($("#jumpNumTxt").val() != '') {
		var pageNum = parseInt($("#jumpNumTxt").val());
		// 如果跳转页数在不合理范围内，则置为1
		if (pageNum < 1 || pageNum > p_countpage) {
			layer.msg("请输入合适的页数");
			pageNum = 1;
		}
		current_page = pageNum;
		$("#pid").text(current_page);
		showOrders();
	} else {
		// “跳转页数”为空
		layer.msg("请输入合适的页数");
		current_page = 1;
		$("#pid").text(current_page);
		showOrders();
	}
}
// 计算共多少记录
function calRecord(json) {
	var recordsize = json[0].length;
	return recordsize;
}
// 计算当前页
function calCount(json) {
	var countpage = json[0].length % LEN == 0 ? json[0].length  /LEN
			: Math.ceil(json[0].length / LEN);
	p_countpage=countpage;
	return countpage;
}

// 鼠标滑过改变背景颜色
function changeColor() {
	// 如果鼠标移到行上时，执行函数
	$(".table tr").mouseover(function() {
		$(this).css({
			background : "#CDDAEB"
		});
		$(this).children('td').each(function(index, ele) {
			$(ele).css({
				color : "#1D1E21"
			});
		});
	}).mouseout(function() {
		$(this).css({
			background : "#FFF"
		});
		$(this).children('td').each(function(index, ele) {
			$(ele).css({
				color : "#909090"
			});
		});
	});
}

function showOrders(){
	$.post(
			"showOrderList",{page:current_page,pageSize:LEN},
			function(data, status) {
				var orderItems = "";
				var len=0;
				if(data[0].length>=0)
					len=data[0].length;
				$(".table").html(orderItems);
				orderItems+='<tr>';
				orderItems+='<th width="30"><input type="checkbox" id="all"';
				orderItems+='	onclick="selectOrClearAllCheckbox(this);" /></th>';
				orderItems+='<th>订单号</th>';
				orderItems+='<th>邮箱</th>';
				orderItems+='<th>姓氏</th>';
				orderItems+='<th>性别</th>';
				orderItems+='<th>起名字数</th>';
				orderItems+='<th>字辈要求</th>';
				orderItems+='<th>禁忌</th>';
				orderItems+='<th>出生日期</th>';
				orderItems+='<th>出生地</th>';
				orderItems+='<th>订单状态</th>';
				orderItems+='<th>下单时间</th>';
				orderItems+='<th>详细说明</th>';
				orderItems+='<th>手机</th>';
				orderItems+='<th>QQ</th>';
				orderItems+='<th>操作</th>';
				orderItems+='</tr>';
				if(len>LEN)
					len=LEN;
				for (i = 0; i <len; i++) {
					orderItems += "<tr>";
					orderItems += '<td><input type="checkbox" name="IDCheck" value="" class="acb" /></td>';
					orderItems += '<td>' + data[0][i].orderId + '</td>';
					orderItems += '<td>' + data[0][i].mailInfo + '</td>';
					orderItems += '<td>' + data[0][i].familyName + '</td>';
					orderItems += '<td>' + data[0][i].gender + '</td>';
					orderItems += '<td>' + data[0][i].wordCount + '</td>';
					orderItems += '<td>' + data[0][i].optionRemedy + '</td>';
					orderItems += '<td>' + data[0][i].forbiddenWord + '</td>';
					orderItems += '<td>' + data[0][i].birthDay
							+ '</td>';
					orderItems += '<td>' + data[0][i].birthPlace
							+ '</td>';
					orderItems += '<td>' + data[0][i].orderState
							+ '</td>';
					orderItems += '<td>' + data[1][i]
							+ '</td>';
					orderItems += '<td>' + data[0][i].specifyGeneration + '</td>';
					orderItems += '<td>' + data[0][i].telePhone + '</td>';
					orderItems += '<td>' + data[0][i].qq + '</td>';
					orderItems += '<td>';
					orderItems += '<a href="javascript:del('
							+ data[0][i].orderId + ');">删除</a>';
					orderItems += '</td>';
					orderItems += '</tr>';
				}
				$("table").append(orderItems);
				changeColor();
				$("#rid").text(calRecord(data));
				$("#cpid").text(calCount(data));
			}, "json");
}

