/**
 * 营销QQ挂件
 * TanLin, Email:50140137@qq.com, tel:18677197764
 * 2015/11/19
 */
var qq = {
		object:null,
		object_x:null,
		top:0,
		url:null,
		qbody:function(){
			return document.getElementsByTagName("body")[0];
		},
		qrun:function(top,url,object,object_x){
			this.top = top;
			this.url = url;
			this.object = $(object);
			this.object_x = $(object_x);
			this.object.hide(),this.qlabel(),this.qstyle(),this.qjsapt();
		},
		qlabel:function(){
			$(this.qbody()).append("<div id='qq_quri_div'></div>");	
			$("#qq_quri_div").append("<div id='qq_quri_top'>在线咨询<div id='qq_quri_xx'></div></div>");
			$("#qq_quri_div").append("<div id='qq_quri_Img'></div>");
			$("#qq_quri_div").append("<div id='qq_quri_top2'><a href='"+this.url+"'>QQ 交谈</a></div>");
		},
		qstyle:function(){
			$("#qq_quri_div").css({"z-index":"198712272396","width":"117px","background":"#85000E","position":"fixed","top":this.top+"px","right":"2px","_position":"absolute","_top":"expression(documentElement.scrollTop+documentElement.clientHeight-this.offsetHeight)","overflow":"hidden","border-radius":"5px 5px","-webkit-border-radius":"5px 5px","-moz-border-radius":"5px 5px"});
			$("#qq_quri_top").css({"font-family":"微软雅黑","height":"39px","color":"#FFFFFF","text-align":"center","line-height":"39px","position":"relative"});
			$("#qq_quri_Img").css({"width":"117px","height":"208px","background":"url(http://"+location.host+"/name2.0/img/qq-psw_03.png) no-repeat"});
			$("#qq_quri_top2").css({"font-family":"微软雅黑","height":"39px","color":"#FFFFFF","text-align":"center","line-height":"39px"});
			$("#qq_quri_top2 a").css({"border":"1px solid #E4D39D","font-family":"微软雅黑","font-size":"13px","width":"79px","height":"26px","color":"#F3ECE3","letter-spacing":"1px","padding":"1px 5px 2px 5px","background":"#FFA422","text-decoration":"none","border-radius":"3px 3px","-webkit-border-radius":"3px 3px","-moz-border-radius":"3px 3px"});
			$("#qq_quri_top2 a").css({"box-shadow":"0 2px 5px #121216","-webkit-box-shadow":"0 2px 5px #121216","-moz-box-shadow":"0 2px 5px #121216","text-shadow":"0 0 5px #F3ECE3","-webkit-text-shadow":"0 0 5px #F3ECE3","-moz-text-shadow":"0 0 5px #F3ECE3"});
			$("#qq_quri_xx").css({"border":"1px solid #EEEEEE","width":"15px","height":"14px","position":"absolute","top":"1px","right":"2px","background":"url(http://"+location.host+"/name2.0/img/xx_xx.png) no-repeat 3px -3px","cursor":"pointer"});
		},
		qjsapt:function(){
			$("#qq_quri_xx").click(function(){
				$("#qq_quri_div").hide();
				qq.object.show();
			});
			qq.object_x.click(function(){
				$(this).hide();
				$("#qq_quri_div").show();
			});
		}
}