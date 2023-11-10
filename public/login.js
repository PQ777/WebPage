function checkLogin()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == "a" && password == "a")
    {
        document.getElementById("message").innerText = "로그인 성공";
        window.location.href = "login.html";
    }    
    else
    {
        document.getElementById("message").innerText = "로그인 실패";
        window.location.href = "login.html";
    }
}