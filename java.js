document.getElementById('btn-login')
.addEventListener('click', function(event){
    event.preventDefault();
    
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNUmber = document.getElementById('pin-num').value;
    console.log(phoneNumber, pinNUmber);

    if(phoneNumber==='01743-795786' && pinNUmber==='1234' ){
        console.log("you are logged in");
        window.location.href = '/home.html';
    }
    else{
       alert("Wrong phone number or pin");
    }

})