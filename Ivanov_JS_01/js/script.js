var selected = false;       //выделен элемент или нет
var selectedItem = "";      //ID выделенного элемента

var x1, y1;                 //текущие координаты
var x2, y2;                 //конечные координаты 
var deltaX, deltaY;         //приращение координат

//отображение координат в заголовке
function onMouseMove() {
    document.title = "X: " + event.clientX.toString() + " Y: " + event.clientY.toString();
}
document.onmousemove = onMouseMove

//выделение картинки
function SelectPicture() {
    //останавливаем таймер
    clearInterval(timer);

    if (selected == false) {
        selected = true;
        selectedItem = event.target.id;
        event.target.style.border = '2px solid #ffff';
    }
    else if (selected == true && selectedItem == event.target.id) {
        selected = false;
        selectedItem = "";
        event.target.style.border = 'none';
    }
    event.stopPropagation()
}

//перемещение картинки по нажатию в любой точке документа
function onMouseDown() {
    if (event.button == 0) {
        //останавливаем таймер
        clearInterval(timer);

        //записываем начальные координаты картинки в текущие
        x1 = document.getElementById(selectedItem).getBoundingClientRect().left;
        y1 = document.getElementById(selectedItem).getBoundingClientRect().top;

        //вычисляем приращение координат за 1 шаг
        deltaX = (event.clientX - x1) / 100;
        deltaY = (event.clientY - y1) / 100;

        //записываем значения координат мыши в конечные координаты
        x2 = event.clientX;
        y2 = event.clientY;

        //запускаем таймер
        onTimerStart();
    }
}
document.onmousedown = onMouseDown

//таймер
var timer
function onTimerStart() {
    timer = setInterval(
        function () {
            if (selectedItem != "") {
                x1 = x1 + deltaX;
                y1 = y1 + deltaY;

                if (Math.abs(y1 - y2) < 1 && Math.abs(x1 - x2) < 1) {
                    clearInterval(timer);
                }

                document.getElementById(selectedItem).style.left = x1 + 'px';
                document.getElementById(selectedItem).style.top = y1 + 'px';
            }
        }, 10);
}
