const students = [
    {name: "Charmi", subject:"Javascript"},
    {name: "Nemi", subject:"Biology"}
]

function enrollStudent(student){
    
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            students.push(student);
            console.log('Student enrolled');
            const error = false;
            if(!error){
                resolve();
            }else{
                reject();
            }
            
        }, 2000);
        
    })  
    
}

function getStudents(){
    setTimeout(function(){
        let str="";
        students.forEach(function(student){
            str+=`<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("students have been fetched");
    }, 1000);
}

let newStudent = {name:"Bansi" , subject:"python"}
enrollStudent(newStudent).then(getStudents).catch(function(){
    console.log("Eroor occured")
});

 