

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


			function insertAfter(newEl,targetEl){
				 var parentEl = targetEl.parentNode;
				 if(parentEl.lastChild == targetEl){
				 	parentEl.appendChild(newEl);
				 } else{
				 	parentEl.insertBefore(newEl,targetEl.nextSibling);
				 }
			}

			var name1 = document.getElementById("name1");
			var ph1 = document.getElementById("ph1");
			var psd1 = document.getElementById("psd1");

			name1.onblur = function(){
				if(this.value ==null||this.value ==""){
					var cleanlbl = this.nextSibling;
					cleanlbl.parentNode.removeChild(cleanlbl);
					var lbl = document.createElement('lable');
					lbl.innerHTML = "请填写姓名";
					lbl.style.color = "#c00";
					insertAfter(lbl, this);
				} else{
					var cleanlbl = this.nextSibling;
					cleanlbl.parentNode.removeChild(cleanlbl);
					var lbl = document.createElement('lable');
					lbl.innerHTML = "√";
					lbl.style.color = "#c00";
					insertAfter(lbl, this);					
				}
			}

			ph1.onblur = function(){
				if(this.value ==null||this.value ==""){
					var cleanlbl = this.nextSibling;
					cleanlbl.parentNode.removeChild(cleanlbl);
					var lbl = document.createElement('lable');
					lbl.innerHTML = "请填写手机号";
					lbl.style.color = "#c00";
					insertAfter(lbl, this);					
				} else{
					var cleanlbl = this.nextSibling;
					cleanlbl.parentNode.removeChild(cleanlbl);
					var lbl = document.createElement('lable');
					lbl.innerHTML = "√";
					lbl.style.color = "#c00";
					insertAfter(lbl, this);						
				}
			}

			psd1.onblur = function(){
				if(this.value.length<6){
					var cleanlbl = this.nextSibling;
					cleanlbl.parentNode.removeChild(cleanlbl);
					var lbl = document.createElement('lable');
					lbl.innerHTML = "请填写密码（不少于6位）";
					lbl.style.color = "#c00";
					insertAfter(lbl, this);
				} else{
					var cleanlbl = this.nextSibling;
					cleanlbl.parentNode.removeChild(cleanlbl);
					var lbl = document.createElement('lable');
					lbl.innerHTML = "√";
					lbl.style.color = "#c00";
					insertAfter(lbl, this);					
				}
			}

							


							
