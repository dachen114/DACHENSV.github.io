var user = new Map([["123","123"]])


     
        function register() {
            var username = document.getElementById("register-username").value;
            var password = document.getElementById("register-password").value;
            
            user.set(username,password);
            alert("注册成功");
            document.getElementById("register-username").value="";
            document.getElementById("register-password").value="";
            document.getElementById("register-email").value="";
        }
        function login() {
            var username = document.getElementById("login-username").value;
            var password = document.getElementById("login-password").value;
            
            if(user.get(username)==password){
                window.location.herf ='/html/select.html';
                
            }
            else{
                alert("用户名或密码错误");
            }
            
        }

