var $phpernote=jQuery.noConflict();//自定义一个比较短快捷方式 
//获取订单字符串
function getOrderString(){
	var orderString="";
    //获取数据
	var $phpernotephpernote=jQuery.noConflict();//自定义一个比较短快捷方式 
	var orderId = randomOrder();
	var name = $phpernote("input[name='price']:checked").next().find(".c").text();
	var money = $phpernote("input[name='price']:checked").val();
	var tSurname = $phpernote("input[name='tSurname']").val();
	var birthdate=getBirth();;
	var birthplace = $phpernote("#prov  option:selected").text() + " "
	+ $phpernote("#city  option:selected").text();
	var gender=getGender(); ;
	var qmzishu = $phpernote("input[name='tNameSums']:checked").val();
	var optionRemedy = $phpernote("[name='tZiBeiStr1']").val();
	var forbiddenWord = $phpernote("[name='tJiHuiTXT']").val();
	var specifyGeneration = $phpernote("[name='content']").val();
	var email = $phpernote("[name='Email']").val();
	var telePhone = $phpernote("[name='shouji']").val();
	var qq = $phpernote("[name='QQ']").val();

	orderString+=orderId+"||";//1.订单id
	orderString+=name+"||";//2.套餐名称
	orderString+=money+"||";//3.金额
	orderString+=tSurname+"||";//4.姓氏
	orderString+=birthdate+"||";//5.出生日期
	orderString+=birthplace+"||";//6.出生地
	orderString+=gender+"||";//7.性别
	orderString+=qmzishu+"||";//8.起名字数
	
    if(optionRemedy=="")
    	orderString+="*##*"+"||";
    else
    	orderString+=optionRemedy+"||";//9.字辈要求
    
    if(forbiddenWord=="")
    	orderString+="*##*"+"||";
    else
    	orderString+=forbiddenWord+"||";//10.禁忌
    
    if(specifyGeneration=="")
    	orderString+="*##*"+"||";
    else
    	orderString+=specifyGeneration+"||";//11.详细说明
    
    orderString+=email+"||";//12.邮箱
    
    if(telePhone=="")
    	orderString+="*##*"+"||";
    else
    	orderString+=telePhone+"||";//13.电话
    
    if(qq=="")
    	orderString+="*##*";
    else
    	orderString+=qq;//14.qq
    
    return orderString;
}

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
	var codeArray = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
	for ( var i = 0; i < codeLength; i++) {
		index = Math.floor(Math.random() * 10);
		code += codeArray[index];
	}
	return code;
}

$phpernote(function() {
	$phpernote("input[name='tSurname']").blur(function(){
		if(this.value=="")
			layer.tips("请填写起名姓氏",this);
	});
	$phpernote("input[name='Email']").blur(function(){
		if(this.value=="")
			layer.tips("请正确填写邮箱",this);
		else{
			//验证邮箱的正则表达式
			var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; 
			if(!reg.test(this.value))
				layer.tips("邮箱格式不正确",this);
		}
	});
	$phpernote("#submitButton").click(function(){
    if(validateOrder()){
			var str=getOrderString();
			var urlPath=encodeURI("./baobaoOrder.jsp?"+str);
			$phpernote.post(urlPath,function(){
				window.location.href=urlPath;
			});
    	    
	}else{
			layer.msg("请正确填写信息后再提交！");
		}
	});
});

//验证订单资料
function validateOrder(){
	if($phpernote("input[name='price']:checked").val()==null){
		return false;
	}
	if($phpernote("input[name='tSurname']").val()==""){
		return false;
	}
	if($phpernote("input[name='Email']").val()==""){
		return false;
	}else{
		//验证邮箱的正则表达式
		var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; 
		if(!reg.test($phpernote("input[name='Email']").val()))
			return false;
	}
	return true;
}
//根据选择的套餐显示金额
$phpernote(function(){
	$phpernote("input[name='price']").click(function(){
		$phpernote(".getAmunt em").text(this.value);
	});
});