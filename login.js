function saveData(){
    let email,pwd,myForm;
    myForm = document.getElementById("myForm").value;
    email = document.getElementById("email").value;
    pwd = document.getElementById("pwd").value;

    // /let user_records =  new Array();
    user_records =getData();
    if(user_records.some((v)=>{return v.email==email && v.pwd==pwd}))
    {
       // alert("Login pass");
        window.location.href="home.html";
    }
    else{
        alert("login fail");
    }
}