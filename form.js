 

function onopen(){
    if(inpvalue.value===""){
        document.getElementById('error').innerHTML="Please fill this blank"
    }else if(inpvalue.type==='password'){
        inpvalue.type="text"
        document.getElementById('error').innerHTML=""
        changeimage.classList="fa-solid fa-eye"
    }else{
        inpvalue.type="password"
        changeimage.className="fa-solid fa-eye-slash"
    }
}



function onSubmit(){
    if(inpvalue.value !=="" && inpvalue.value !==""){
        popup.classList.add('show')
        qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inalue.value
    }else{
       document.getElementById('error').innerHTML="Enter Your Details" 
    }
}


function onBack(){
    popup.classList.remove('show')
}



