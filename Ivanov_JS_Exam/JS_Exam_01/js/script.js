let imagesNames = ['beet', 'brocoli', 'cabbage', 'carrot', 'celery', 'chili', 'corns', 'eggplant', 'mushrooms', 'onions', 'pepper', 'potatoes', 'tomato', 'turnip'];
let imagesId = [];
let elements = [];                                      //элементы
let cnt = 0;

//клик по документу - добавление картинок
function onClick() {

    //создание элемента
    let elem = document.createElement("img");
    let id = "image" + cnt.toString();
    imagesId.push(id);
    elem.setAttribute("id", id);
    elem.setAttribute("name", id);
    var index = Math.floor(Math.random() * imagesNames.length);
    elem.setAttribute("src", "./Images/" + imagesNames[index] + ".png");

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

    //добавляем изображение в массив элементов
    elements.push(elem);
    cnt++;
}
document.onclick = onClick;
