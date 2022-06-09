//import random 
//alert("Привет")

var num = 0;
//var our = prompt("Ввод");

function gameGuess(num,our) {
    if (our > num) {
        return gameGuess(num,prompt("Меньше"));
    } 
    else if (our < num) {
        return gameGuess(num, prompt("Больше"));
    } 
    else if (our == num) {
        alert('Угадал')

    }
}
//gameGuess(num,our);

function reminder () {
    alert('А-нука отвечай, а то выкину!');
//    window.close;
}

//setTimeout(reminder,5000);
function valide() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    
    var reg_name = /^[a-zа-я]+$/i;
    var pass_name = /^[a-z0-9]{5,100}$/i
}

document.querySelector('.button').addEventListener('click', valide);
