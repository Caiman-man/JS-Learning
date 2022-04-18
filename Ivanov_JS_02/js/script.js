//массив ID картинок
var pictures = ['pict1', 'pict2', 'pict3', 'pict4', 'pict5', 'pict6', 'pict7', 'pict8'];
//таймер
var timer

//получить рандомное число
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//функция перемещения картинок
function Randomizer() {
    for (let i = 0; i < pictures.length; i++) {
        document.getElementById(pictures[i]).style.left = getRandomInt(900) + 'px';
        document.getElementById(pictures[i]).style.top = getRandomInt(400) + 'px';
    }
}

//старт таймера
function onTimerStart() {
    timer = setInterval(Randomizer, 700);
}

//стоп таймера
function onTimerStop() {
    clearInterval(timer);
}

