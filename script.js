alert("Привет")

var num = 5;
var our = prompt("Ввод");

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

gameGuess(num,our);