function checkLogin()
{
    var emailInput = document.getElementById("emailInput").value;
    var passwordInput = document.getElementById("passwordInput").value;

    if(emailInput == "user@example.com" && passwordInput == "password")
    {
        alert("login success");
        window.location.href = "main.html";
    }    
    else
    {
        alert("login fail");
    }
}

function updateClock()
{
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var date = now.toDateString();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var clockElement = document.getElementById("digital-clock");
    clockElement.innerHTML = `${hours}:${minutes}:${seconds} <br> ${date}`;
}


setInterval(updateClock, 1000);

window.onload = function()
{
    updateClock();
}