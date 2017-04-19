
$(function(){
	$("#switch_signup").click(function(){
		$("#switch_signup").removeClass("switch_btn").addClass("switch_btn_focus");
		$("#switch_login").removeClass("switch_btn_focus").addClass("switch_btn");
		$("#signup").css("display","block");
		$("#login").css("display","none");
	});
	$("#switch_login").click(function(){
		$("#switch_login").removeClass("switch_btn").addClass("switch_btn_focus");
		$("#switch_signup").removeClass("switch_btn_focus").addClass("switch_btn");
		$("#login").css("display","block");
		$("#signup").css("display","none");
	});
	$(".social_account").click(function(){
		if($(".three_MinIcon img").css("display")=="none"){
			$(".three_MinIcon img").show("slow");
		}else{
			$(".three_MinIcon img").hide("slow");
		}
	});
	$(".download_btn").click(function(){
		if($(".QRcode").css("display")=="none"){
			$(".QRcode").show();
			$(".download_btn").text("关闭二维码");
		}else{
			$(".QRcode").hide();
			$(".download_btn").text("下载知乎App");
		}
	});	
});

