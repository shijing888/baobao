$(function(){
	//获取订单资料
	var url=decodeURI(document.URL);
	var id=url.indexOf("?");
	var order=url.substr(id+1).split("||");
	showOrderValue(order);
});

// 显示订单信息
function showOrderValue(order) {
	var xdsj = CurentTime();
	$(".dingdan").text(order[0]);
	$(".tcmc").text(order[1]);
	$(".money").text(order[2]);
	$(".xingshi").text(order[3]);
	$(".csrq").text(order[4]);
	$(".csd").text(order[5]);
	$(".gender").text(order[6]);
	$(".qmzs").text(order[7]);
	if(order[8]=="*##*")
		$(".zdzb").text("");
	else
		$(".zdzb").text(order[8]);
	
	if(order[9]=="*##*")
		$(".jjyz").text("");
	else
		$(".jjyz").text(order[9]);
	
	if(order[10]=="*##*")
		$(".xxsm").text("");
	else
		$(".xxsm").text(order[10]);
	$(".email").text(order[11]);
	$(".gmsj").text(xdsj);
	
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