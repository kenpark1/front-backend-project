regButton.onclick=function(){
    let login=document.getElementById("loginInput").value;
    let password=document.getElementById("passwordInput").value; 
    let surname=document.getElementById("surnameInput").value; 
    let name=document.getElementById("nameInput").value; 
    let middlename=document.getElementById("middlenameInput").value; 
    let mas=[surname,name,middlename,login,password];
    let masId=["surnameInput","nameInput",
"middlenameInput","loginInput","passwordInput"];
    let n=0;
    for(let i=0;i<(mas.length);i++){
        if(mas[i]===""){
            document.getElementById(masId[i]).className="emptyInput";
        }
        else{
            n++;
            document.getElementById(masId[i]).className="normalInput"
        }
    }
    
    if(n===5){
        location.href="index.html";
    }
}