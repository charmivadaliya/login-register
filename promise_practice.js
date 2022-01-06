function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            const error = true;
            if(!error){
                console.log('Your promise is resolved')
                resolve();
            }else{
                console.log('your promise is not resolved')
                reject('Sorry'); 
            }
        }, 2000);
    })
} 