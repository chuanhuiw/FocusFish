

function login_nav(){
    window.location = "login_frontend.html";
}

function signup(){
    user_name = document.getElementById("input_createUsername").value;
    pass_word = document.getElementById("input_createPassword").value;
    cnfm_pass = document.getElementById("input_cnfmPassword").value;

    if ((user_name != "") && (pass_word != "") && (cnfm_pass != "")){
        if (pass_word == cnfm_pass){
            console.log("Signup successful")
            window.location = "login_frontend.html";
        }
    } 
}

