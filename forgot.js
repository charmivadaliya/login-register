function forgotPassword(){
    let email,myForm,pwd,conpwd;
    myForm = document.getElementById("myForm").value;
    email = document.getElementById("email").value;
    pwd = document.getElementById("pwd").value;
    conpwd = document.getElementById("conpwd").value;
    
    if(pwd!=conpwd){
        alert("password did not match");
    }
    
    let user_records =  new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
     

    var temp=user_records.find(temp=>temp.email===email);
    if(temp){

        temp.pwd=pwd;
        temp.conpwd=conpwd;
        localStorage.setItem("users",JSON.stringify(user_records));
    }
}