////获取数据
var $phpernotephpernote=jQuery.noConflict();//自定义一个比较短快捷方式 
var name = $phpernote("#tSurname").val();
var money = $phpernote("input[name='price']:checked").val();
var birthdate;
var birthplace;
//var birthdate = "公历2016年正月初一";
var gender ;
var qmzishu = $phpernote("input[name='tNameSums']:checked").val();
var optionRemedy = $phpernote("[name='tZiBeiStr1']").val();
var forbiddenWord = $phpernote("[name='tJiHuiTXT']").val();
var specifyGeneration = $phpernote("[name='content']").val();
var email = $phpernote("[name='Email']").val();
var telePhone = $phpernote("[name='shouji']").val();
var qq = $phpernote("[name='QQ']").val();
var orderId = randomOrder();
$phpernote(function(){
	birthdate=getBirth();
	birthplace = $phpernote("#prov  option:selected").text() + " "
	+ $phpernote("#city  option:selected").text();
	gender=getGender();
});

//获取性别
function getGender(){
	var gg=$phpernote("input[name='tSex']:checked").val();
	if(gg=='0')
		gender='女';
	else(gg=='1')
	gender="男";
	
	return gender;
}
// 获取生日
function getBirth() {
	var bir = "";
	bir += $phpernote("[name='calendar']").val() + "  ";
	bir += $phpernote("[name='year']").val() + "年  ";
	bir += $phpernote("[name='month']").val() + "月 ";
	bir += $phpernote("[name='day']").val() + "日 ";
	bir += $phpernote("[name='hour']").val() + "时 ";
	return bir;
}

// 随机生成订单号
function randomOrder() {
	code = "MDS";
	var codeLength = 15;
	var codeArray = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd',
			'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
			'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
			'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
			'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
	for ( var i = 0; i < codeLength; i++) {
		index = Math.floor(Math.random() * 52);
		code += codeArray[index];
	}
	return code;
}

$phpernote(function() {
	$phpernote("#submitButton").click(function(){
		$phpernote.post("submitOrder", {
			orderId : orderId,
			name : name,
			birthdate : birthdate,
			gender : gender,
			qmzishu : qmzishu,
			birthplace : birthplace,
			optionRemedy : optionRemedy,
			forbiddenWord : forbiddenWord,
			specifyGeneration : specifyGeneration,
			email : email,
			telePhone : telePhone,
			qq : qq,
			money : money
		}, function(data, status) {
			// returnData=data;
			window.location.href = "./baobaoOrder.jsp";
		}, "text");
	});
});

