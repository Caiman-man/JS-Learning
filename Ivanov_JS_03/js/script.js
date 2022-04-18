let y1 = [];                                            //текущие координаты
let deltaY = [];                                        //приращение координат
let y2 = document.documentElement.clientHeight - 48;    //конечные координаты 
let snowflakesIdArray = [];                             //ID снежинок
let elements = [];                                      //элементы
var timer;
let cnt = 0;

//клик по документу
function onClick() {

    clearInterval(timer);

    //создание элемента
    let elem = document.createElement("img");
    var id = "snowflake" + cnt.toString();
    snowflakesIdArray.push(id);

    elem.setAttribute("id", id);
    elem.setAttribute("name", id);
    elem.setAttribute("src", "./Images/snowflake.png");

    //удаление элемента по клику на нём
    elem.addEventListener("click", () => {
        event.stopPropagation()
        event.target.remove()
    }, false);

    //присвоение координат элементу
    elem.style.position = "absolute";
    elem.style.left = event.clientX + 'px';
    elem.style.top = event.clientY + 'px';
    document.body.appendChild(elem);

    //записываем начальные координаты картинки в текущие
    let startY = document.getElementById(id).getBoundingClientRect().top;
    y1.push(startY);

    //вычисляем приращение координат за 1 шаг
    let dY = (document.documentElement.clientHeight - startY) / 1000;
    deltaY.push(dY);

    //добавляем изображение в массив элементов
    elements.push(elem);

    //запускаем таймер
    onTimerStart();

    cnt++;
}
document.onclick = onClick;


//таймер
function onTimerStart() {
    timer = setInterval(
        function () {
            for (let i = 0; i < elements.length; i++) {
                if (elements[i] != null) {

                    y1[i] = y1[i] + deltaY[i];

                    if (Math.abs(y1[i] - y2) < 1) {
                        var tmp = document.getElementById(elements[i].id);
                        if (tmp != null)
                            tmp.parentNode.removeChild(tmp);

                    }
                    if (Math.abs(y1[i] - y2) < 50) {
                        var opacity = window.getComputedStyle(elements[i]).getPropertyValue("opacity");
                        elements[i].style.opacity = opacity - 0.01;
                    }

                    elements[i].style.top = y1[i] + 'px';
                }
            }
        }, 1);
}