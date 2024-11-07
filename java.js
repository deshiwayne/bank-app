document.getElementById('btn-login')
.addEventListener('click', function(event){
    event.preventDefault();
    
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNUmber = document.getElementById('pin-num').value;
    console.log(phoneNumber, pinNUmber);

    if(phoneNumber==='5' && pinNUmber==='1234' ){
        console.log("you are logged in");
        window.location.href = '/home.html';
    }
    else{
        console.log("Wrong phone number or pin");
    }

})