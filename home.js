document.getElementById("add-money")
.addEventListener('click', function(event){
event.preventDefault();
const addMoneyInput = document.getElementById('input-add-money').value;
console.log(addMoneyInput);
const inputPin = document.getElementById('input-pin').value;
console.log(inputPin);  
if(inputPin === '1234'){
    

    const balance = document.getElementById('input-taka').innerText;
    const addMoney = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);
    const newBalance = addMoney + balanceNumber;
    console.log(newBalance);
    document.getElementById('input-taka').innerText = newBalance;

}
else{
    alert('Failed to add money and please try again');
}

})
    
    
    