function user_login(){
    username = document.getElementById("input_username").value;
    password = document.getElementById("input_password").value;
    console.log(usernasme);
    console.log(password);
    localStorage.setItem("user_name", username);
    localStorage.setItem("pass_word", password);
    if(username != ""){
        if(password != ""){
            window.location = "home.html";
            
            
        }
        else{
            console.log("Username or password is invalid");
        }
    }
    else{
        console.log("Username or password is invalid");
    }
}
