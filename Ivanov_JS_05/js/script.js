class Menu {

    AddItem() {
        var content = document.getElementById("name");
        var contentText = content.value;

        if (contentText != "") {
            var elem = document.createElement("a");
            elem.text = contentText;

            elem.style.cursor = "pointer";
            elem.addEventListener("click", () => alert(contentText), false);

            var newDiv = document.getElementById("content");
            newDiv.appendChild(elem);
        }
    }

    RemoveItem() {
        var index = document.getElementById("index");
        var indexValue = index.value;

        if (indexValue != "") {
            var ancestor = document.getElementById('content');
            var descendents = ancestor.getElementsByTagName('*');
            for (var i = 0; i < descendents.length; ++i) {
                if (i == indexValue) {
                    descendents[i].remove();
                }
            }
        }
    }

    Show() {
        document.getElementById("menu").style.display = "inline-block";
    }

    Hide() {
        document.getElementById("menu").style.display = "none";
    }
}

// обьявление меню
var menu = new Menu();

// нажатие на существующий элемент меню
function test(text) {
    alert(text)
}

