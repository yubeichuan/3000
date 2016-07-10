    function showClear(){
			document.getElementById("username-clear").style.display="block";
			if(document.getElementById("username").value==""){
				document.getElementById("username-clear").style.display="none";
			}
		}
		function clearUserName(){
			document.getElementById("username").value="";
			document.getElementById("username-clear").style.display="none";
		}
		function showPwClear(){
			document.getElementById("password-clear").style.display="block";
			if(document.getElementById("password").value==""){
				document.getElementById("password-clear").style.display="none";
			}
		}
		function clearPassword(){
			document.getElementById("password").value="";
			document.getElementById("password-clear").style.display="none";
		}
		function hideSignin(){
			document.getElementById("signin").style.display="none";
			document.getElementById("signup").style.display="block";
		}
		function showSignUpClear(){
			document.getElementById("signup-clear").style.display="block";
			if(document.getElementById("signup-username").value==""){
				document.getElementById("signup-clear").style.display="none";
			}
		}
		function clearSignUpUserName(){
			document.getElementById("signup-username").value="";
			document.getElementById("signup-clear").style.display="none";
		}
		function showSignUpPwClear(){
			document.getElementById("signup-password-clear").style.display="block";
			if(document.getElementById("signup-password").value==""){
				document.getElementById("signup-password-clear").style.display="none";
			}
		}
		function clearSignUpPassword(){
			document.getElementById("signup-password").value="";
			document.getElementById("signup-password-clear").style.display="none";
		}
		function ajaxSubmit(ajaxUrl,method){
			var cont = $(".signin-middle-text").serialize();
        	alert(ajaxUrl);
			$.ajax({
				type: method,
				url: ajaxUrl,
				data: cont,
				// dataType: 'json',
				// contentType: 'application/json;charset=utf-8',
				success: function (data) {
				    alert(data);
			    },
				error: function () {
				    alert(0);
				}
			});
		}