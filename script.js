function btnActivation(){

    let messageVaule = document.getElementById('message').value;
    let fnameVaule = document.getElementById('fname').value;
    let emailVaule = document.getElementById('email').value;


    if( messageVaule.length == 0 || fnameVaule.length == 0 || emailVaule.length == 0){
        document.getElementById("send_button").disabled = true;            
    }else{
        document.getElementById("send_button").disabled = false;
    }

    if(validateName(fnameVaule) && validateEmail(emailVaule)){
        alert("Name and email are good");
    }else{
        //alert("Wrong data");
    }   
}   


function validateName(value){       
    let regex = new RegExp('^[A-Z][a-z]{2,30}$');
    
    return regex.test(value);
}

function validateEmail(value){       
    let regex = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$');
    
    return regex.test(value);
}

