/**
 * 左侧挂件
 * TanLin,Email:50140137@qq.com,tel:18677197764
 * 2015/11/19
 */
var meun = {
	url:null,
	top:0,
	sTop:0,
	bg:null,
	body:function(){
		return document.getElementsByTagName("body")[0];
	},	
	run:function(url,top,sTop,bg){	
		this.url = url;
		this.top = top;
		this.sTop = sTop;
		this.bg = bg;
		this.label(),this.style(),this.jsapt(),this.scrolls();
	},
	label:function(){
		$(this.body()).append("<dl id='m_uri_div'>" +
				"<dd><a href='"+this.url.url1+"'>首页</a></dd>" +
				"<dd><a href='"+this.url.url2+"'>订单查询</a></dd>" +
				"<dd><a href='"+this.url.url3+"'>常见问题</a></dd>" +
				"<dd><a href='"+this.url.url4+"'>关于我们</a></dd>" +
				"<dd><a href='"+this.url.url5+"'>开始起名&gt;</a></dd>" +
				"</dl>");	
	},
	style:function(){
		$("#m_uri_div").css({"display":"none","width":"122px","background":this.bg,"position":"fixed","top":this.top+"px","left":0,"_position":"absolute","_top":"expression(documentElement.scrollTop+documentElement.clientHeight-this.offsetHeight)","overflow":"hidden"});
		$("#m_uri_div dd").css({"border-bottom":"1px solid #FFFFFF","height":"42px","text-align":"center","line-height":"40px","font-family":"微软雅黑","font-size":"18px"});
		$("#m_uri_div dd:last").css({"border":"none"});
		$("#m_uri_div a").css({"display":"block","color":"#FFFFFF","text-decoration":"none"});
		$(".action").css({"background":"#DBA858"});
		$(".action2").css({"background":"#DBA858"});
		$("#m_uri_div dd:last").css({"height":"55px","position":"relative"});
		$("#m_uri_div a:last").css({"display":"block","width":"111px","height":"38px","position":"absolute","top":"8px","left":"5px","background":"#D8821C","font-weight":"bold","letter-spacing":"2px"});
	},	
	jsapt:function(){
		$("#m_uri_div a").each(function(index){			
			$(this).click(function(){
				$("#m_uri_div a").removeClass("action");
				$("#m_uri_div a").css({"background-color":""});
				$(this).addClass("action");
				meun.style();
			});
		});
	},
	scrolls:function(){
		var t=0;
		$(window).scroll(function(){
			t = $(document).scrollTop();
			if(meun.sTop <= t){
				$("#m_uri_div").show();
			}else{
				$("#m_uri_div").hide();
			}
		});		
	}
}

