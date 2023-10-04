enterButton.onclick=function(){
    let mailfi=document.getElementById("loginInput").value;
    let passfi=document.getElementById("passwordInput").value;
    if(mailfi===""&&passfi===""){
        document.getElementById("loginInput").className="emptyInput";
        document.getElementById("passwordInput").className="emptyInput";
    }
    else if(mailfi===""){
        document.getElementById("loginInput").className="emptyInput";
    }
    else if(passfi===""){
        document.getElementById("passwordInput").className="emptyInput";
    }
    else if(passfi==="admin"&&mailfi==="admin@edu.mirea.ru"){
        location.href="regpage.html";
    }
}
