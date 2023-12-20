function printCompany(){
    document.getElementById('outputCompany').innerHTML = document.getElementById('inputCompany').value;
};

function printMessage(){
    document.getElementById('outputMessage').innerHTML = document.getElementById('inputMessage').value;
};

function changeBg(){
    var bgColor = document.getElementById('inputBg').value;
    document.getElementById('card').style.background = bgColor;
}

function changeColor(){
    var textColor = document.getElementById('inputText').value;
    document.getElementById('card').style.color = textColor;
}

function textAlign(selected_id){
    document.getElementById('card').className = selected_id;
}

function printName(){
    document.getElementById('outputName').innerHTML = document.getElementById('inputName').value;
};

function printJob(){
    document.getElementById('outputJob').innerHTML = document.getElementById('inputJob').value;
};

function printEmail(){
    document.getElementById('outputEmail').innerHTML = document.getElementById('inputEmail').value;
};

function printPhone(){
    document.getElementById('outputPhone').innerHTML = document.getElementById('inputPhone').value;
};

function formSubmit(){
    alert('Your form is submitted, Thank you');
    var cardInfo = document.getElementById('cardInfo');
    cardInfo.reset();
}

function formReset(){
    window.location.reload();
}