document.addEventListener("DOMContentLoaded", function(event) { 
    let form = document.getElementById("loginForm");
    form.addEventListener("submit", adminLogin);//get a reference to my login form

    function adminLogin(event)
    {
        event.preventDefault();
        let username = document.getElementById("username");
        let password = document.getElementById("password");
        if(username.value == "Admin" && password.value == "password")
        {  
            HideLoginScreen();
        }
    }

    function HideLoginScreen()
    {
        form.style.display = "none";
    }

    function ShowAdminPanel()
    {

    }
});