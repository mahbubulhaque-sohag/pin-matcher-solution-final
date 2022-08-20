function getPin(){
    const pin = generatePin();
    const pinString = pin + '' ;
    if (pinString.length === 4){
        return pin;
    }
    else{
        return getPin()}

}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
   const displayPinField = document.getElementById('display-pin');
   displayPinField.value =pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typedNumbers');
    const previousTypedNumber = typeNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
        }
        else if(number === '<'){
            const disits = previousTypedNumber.split('');
            disits.pop();
            const remainingDisits = disits.join('');
            typeNumberField.value = remainingDisits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typeNumberField.value = newTypedNumber;
    }
 
})

document.getElementById('veryfyPin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typeNumberField = document.getElementById('typedNumbers');
    const typedNumber = typeNumberField.value;

    const pinSuccessMassege = document.getElementById('pin-succes');
    const pinUnSuccessMassege = document.getElementById('pin-un-succes');
    if(currentPin === typedNumber){
        pinSuccessMassege.style.display = 'block';
        pinUnSuccessMassege.style.display = 'none';
    }
    else{
        pinUnSuccessMassege.style.display = 'block';
        pinSuccessMassege.style.display = 'none';
    }
    
})