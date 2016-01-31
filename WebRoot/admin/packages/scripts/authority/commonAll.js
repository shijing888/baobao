

/*
 * 是否全选
 */
function selectOrClearAllCheckbox(obj) {
	var checkStatus = $(obj).attr("checked");
	if (checkStatus == "checked") {
		$("input[type='checkbox']").attr("checked", true);
	} else {
		$("input[type='checkbox']").attr("checked", false);
	}
}

/** 日期函数，加几天，减几天 **/
function getNextDay(dd, dadd) {
	// 可以加上错误处理
	var a = new Date(dd);
	a = a.valueOf();
	a = a + dadd * 24 * 60 * 60 * 1000;
	a = new Date(a);
	var m = a.getMonth() + 1;
	if (m.toString().length == 1) {
		m = '0' + m;
	}
	var d = a.getDate();
	if (d.toString().length == 1) {
		d = '0' + d;
	}
	return a.getFullYear() + "-" + m + "-" + d;
}

/** table鼠标悬停换色* */
$(function() {
	// 如果鼠标移到行上时，执行函数
	$(".table tr").mouseover(function() {
		$(this).css({background : "#CDDAEB"});
		$(this).children('td').each(function(index, ele){
			$(ele).css({color: "#1D1E21"});
		});
	}).mouseout(function() {
		$(this).css({background : "#FFF"});
		$(this).children('td').each(function(index, ele){
			$(ele).css({color: "#909090"});
		});
	});
});
