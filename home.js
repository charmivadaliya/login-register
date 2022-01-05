function submitData()
{
let name,email,number,pwd,id;
id = document.getElementById("id").value;  
name=document.getElementById("name").value;
email=document.getElementById("email").value;
number=document.getElementById("number").value;   
pwd=document.getElementById("pwd").value;

//let user_records=new Array();
user_records=getData();
if(user_records.some((v)=>{return v.email==email}))
{
  alert("duplicate data");
}
else
{
  user_records.push({
    "id":id,
    "name":name,
    "email":email,
    "number":number,
    "pwd":pwd
})
setData(user_records);
}
    $(document).ready(function() {
      showData();
    });
}

function showData()
{
  //let user_records=new Array();
  user_records=getData();
 
  if(user_records)
  {  
      var str="";
      id=1;
      for(let i=0;i<user_records.length;i++)
      {
        str+='<tr><td>'+user_records[i].id+'</td><td>'+user_records[i].name+'</td><td>'+user_records[i].email+'</td><td>'+user_records[i].number+'</td><td><a onclick="onEditPress();" href="edit.html?id='+user_records[i].id+'">Edit</a></td><td><a onclick="deleteData('+user_records[i].id+');">Delete</a></td></tr>';     
      }
      console.log(str);
      // $('#mytable').DataTable().destroy();//destroy table first
      // $("#tbody").html(str);//create tr td tag
      // $('#mytable').DataTable();//create responsive table
      document.getElementById('tbody').innerHTML=str;
  }
}
function deleteData(id){
  let user_records=new Array();
  user_records=getData();
  console.log(id);
  var getindex = user_records.findIndex((v)=>{return v.id==id});
  user_records.splice(getindex,1);
  console.log(user_records);
  localStorage.setItem('users',JSON.stringify(user_records));
  window.location.reload();
}