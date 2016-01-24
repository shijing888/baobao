////获取数据
var name = $("#tSurname").val();
var money = $("input[name='price']:checked").val();
// var birthdate=getBirth();
var birthdate = "公历2016年正月初一";
var gender = $("input[name='tSex']:checked").val();
var qmzishu = $("input[name='tNameSums']:checked").val();
var birthplace = $("#prov  option:selected").val() + " "
		+ $("#city  option:selected").val();
var optionRemedy = $("[name='tZiBeiStr1']").val();
var forbiddenWord = $("[name='tJiHuiTXT']").val();
var specifyGeneration = $("[name='content']").val();
var email = $("[name='Email']").val();
var telePhone = $("[name='shouji']").val();
var qq = $("[name='QQ']").val();
var orderId = randomOrder();
// alert(name)
// alert(orderId)
// alert(money)
// alert(birthdate)
// alert(gender)
// alert(qmzishu)
// alert(birthplace)
// alert(optionRemedy)
// alert(forbiddenWord)
// alert(specifyGeneration)
// alert(telePhone)
// alert(qq)

// 获取返回的数据
// var returnData;

// alert(birthplace);

// 获取生日
function getBirth() {
	var bir = "";
	bir += $("#birthNianli").val() + "  ";
	bir += $("#birthYear").val() + " ";
	bir += $("#birthMonth").val() + " ";
	bir += $("#birthDate").val() + " ";
	bir += $("#birthTime").val() + " ";

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

