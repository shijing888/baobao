var current_page = 1;

var pagesize = 10;

var p_countpage;

var s_recordsize;
var urlstr = document.URL;
var id = urlstr.indexOf("=");
var val = urlstr.substr(id + 1);

function basicAjax(path, method, funcs) {
	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}

	request.onreadystatechange = function() {

		if (request.readyState == 4 && request.status == 200) {
			var back = request.responseText;
			funcs(back);
		}
	};

	request.open(method, path, true);

	if ("POST" == method) {
		request.send(path);
	} else {
		request.send();
	}

}

function commonCalContxt(current_page, page_size) {

	var path = "commentByPage?page=" + current_page + "&pagesize=" + page_size
			+ "&flag=" + val;
	basicAjax(path, "GET", function(result) {
		processObj(eval("(" + result + ")"));

	});
}

function findFirst() {
	current_page = 1;
	pagesize = document.getElementById("sid").value;
	document.getElementById("pid").innerText = current_page;
	commonCalContxt(current_page, pagesize);
}

function findBack() {

	if (current_page > 1) {
		current_page -= 1;
		document.getElementById("pid").innerText = 1;
	}

	pagesize = document.getElementById("sid").value;
	document.getElementById("pid").innerText = current_page;

	commonCalContxt(current_page, pagesize);

}

function findNext() {
	if (current_page < p_countpage) {
		current_page += 1;
		document.getElementById("pid").innerText = p_countpage;
	}

	pagesize = document.getElementById("sid").value;
	document.getElementById("pid").innerText = current_page;
	commonCalContxt(current_page, pagesize);
}

function findLast() {
	current_page = p_countpage;
	pagesize = document.getElementById("sid").value;
	document.getElementById("pid").innerText = current_page;
	commonCalContxt(current_page, pagesize);
}

function calRecord(json) {
	var recordsize = json[1];
	document.getElementById("rid").innerText = recordsize;

	s_recordsize = recordsize;
	return recordsize;
}

function calCount(json) {
	var countpage = s_recordsize % pagesize == 0 ? s_recordsize / pagesize
			: Math.ceil(s_recordsize / pagesize);

	document.getElementById("cpid").innerText = countpage;

	p_countpage = countpage;

	return countpage;
}

function processObj(json) {
	var contable = document.getElementById("contable");
	contable.innerHTML = "<tr><td width='6%' height='18' background='images/tab_14.gif'"
			+ "class='STYLE1'><div align='center' class='STYLE2 STYLE1'>序号</div></td>"
			+ "<td width='12%' height='18' background='../images/comment/tab_14.gif'"
			+ "class='STYLE1'><div align='center' class='STYLE2 STYLE1'>订单号</div></td>"
			+ "<td width='16%' height='18' background='../images/comment/tab_14.gif'"
			+ "class='STYLE1'><div align='center' class='STYLE2 STYLE1'>评论时间</div></td>"
			+ "<td width='7%' height='18' background='../images/comment/tab_14.gif'"
			+ "class='STYLE1'><div align='center' class='STYLE2 STYLE1'>内容</div></td>"
			+ "<td width='10%' height='18' background='../images/comment/tab_14.gif'"
			+ "class='STYLE1'><div align='center' class='STYLE2'>审核</div></td></tr>";

	for (i = 0; i < json[0].length; i++) {
		var temp = json[0][i].id;
		contable.innerHTML += "<tr height='18' bgcolor='#FFFFFF' id='"
				+ i
				+ "'>"
				+ "<td height='18' bgcolor='#FFFFFF'class='STYLE2'><div align='center' class='STYLE2 STYLE1'>"
				+ temp
				+ "</div></td>"
				+ "<td height='18' bgcolor='#FFFFFF'><div align='center' class='STYLE2 STYLE1'>"
				+ json[0][i].orderId
				+ "</div></td>"
				+ "<td height='18' bgcolor='#FFFFFF'><div align='center' class='STYLE2 STYLE1'>"
				+ json[2][i]
				+ "</div></td>"
				+ "<td height='18' bgcolor='#FFFFFF'><div align='center' class='STYLE2 STYLE1'>"
				+ json[0][i].userCom + "</div></td>"
		        +  "<td height='18' bgcolor='#FFFFFF'><div align='center'>"
		
		        +  "<input type='button' value='通过' class='checkbutton passButton' onclick='passrecord(this,"
				+ temp
				+ ")'/>"
		        + "<input type='button' value='删除' class='checkbutton' onclick='deleterecord(this,"
				+ temp + ")'/></div></td>" + "</tr>";
		
	}

	if(val==1 ||val==2){
		
		$(".passButton").css("display","none");
	}
	calRecord(json);
	calCount(json);

}

function deleterecord(obj, primary) {

	var path = "commentDelete?deleteNo=" + primary;

	basicAjax(path, "GET", function(result) {
		if (1 == parseInt(result)) {
			var rowIndex = obj.parentNode.parentNode.parentNode.rowIndex;
			contable.deleteRow(rowIndex);
			s_recordsize--;
			document.getElementById("rid").innerText = s_recordsize;
			alert("Record delete success!");
		} else {
			alert("Record delete failed!");
		}
	});

	// if failed then alert msg (delete the record failed)
}

function refreshPage() {
	var obj = document.getElementById("sid");

	var pgsize = parseInt(obj.value);

	// recal the page size
	pagesize = pgsize;
	current_page = 1;

	commonCalContxt(current_page, pgsize);
	document.getElementById("pid").innerText = current_page;
}

function passrecord(obj, primary) {

	var path = "commentPass?cid=" + primary;

	basicAjax(path, "GET", function(result) {
		if (1 == parseInt(result)) {
			var rowIndex = obj.parentNode.parentNode.parentNode.rowIndex;
			contable.deleteRow(rowIndex);
			s_recordsize--;
			document.getElementById("rid").innerText = s_recordsize;
			alert("Record pass success!");
		} else {
			alert("Record pass failed!");
		}
	});

	// if failed then alert msg (delete the record failed)
}
