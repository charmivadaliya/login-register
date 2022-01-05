
function submitData(){
    let name,email,number,pwd,conpwd,myForm,id;
    myForm = document.getElementById("myForm").value;
    //d = document.getElementById("id").value;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    number = document.getElementById("number").value;
    pwd = document.getElementById("pwd").value;
    conpwd = document.getElementById("conpwd").value;
    let user_records =  new Array();

    var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    //all fields validation
    if(id == ""|| name == ""|| email==""||number==""||pwd==""||conpwd=="") 
    {
        alert("please fill all required field");
        return false;
    }
    if(pwd!=conpwd){
        alert("password did not match");
    }

    //email validation
    if(email.match(pattern)){
        //alert("valid email id");  
        user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
        user_records.push({
            "id":user_records.length,
        "name":name,
        "email":email,
        "number":number,
        "pwd":pwd,
        "conpwd":conpwd
    })   
     setData(user_records);                                                                                                                                                                                                 
     
    }else{
        alert("incorrect email id");
       
    }
    window.location.href="login.html"; 
    
    // localStorage.setItem("name",name);
    // localStorage.setItem("email",email);
    // localStorage.setItem("number",number);
    // localStorage.setItem("pwd",pwd);
    // localStorage.setItem("conpwd",conpwd);
}
function setData(user_records){
    localStorage.setItem("users",JSON.stringify(user_records));         
}
function getData(){
    return JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
}