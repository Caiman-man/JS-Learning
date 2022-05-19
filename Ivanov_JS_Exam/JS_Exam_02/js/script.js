//html elements
let question = document.getElementById("question");
let numberOfCurrentQuestion = document.getElementById("currentQuestion");
let numberOfAllQuestions = document.getElementById('numberOfQuestions');
let optionLabels = document.querySelectorAll(".option-label");
let optionSpans = document.querySelectorAll(".option-span");
let scoreElement = document.getElementById('score');

//счетчики
var currentIndex = 0;  //индекс текущего вопроса
var score = 0;

//вопрос
class Question {
    constructor(questionText, answers, rightAnswer) {
        this.questionText = questionText
        this.answers = answers
        this.rightAnswer = rightAnswer
    }
}

//массив вопросов
class Test {
    constructor() {
        this.questions = []
    }

    Add(question) {
        this.questions.push(question)
        return this.questions
    }

    //запустить тест
    StartTest() {
        //предаварительно скрыть модальное окно
        if (document.getElementById('endTestModal').style.display != 'none')
            document.getElementById('endTestModal').style.display = 'none'

        //если тест окончен то показать модальное окно
        if (currentIndex == this.questions.length) {
            scoreElement.innerHTML = score;
            document.getElementById('endTestModal').style.display = 'block'
            currentIndex = 0;
            score = 0;
        }

        //предварительно скрываем варианты ответов
        for (let i = 0; i < 4; i++) {
            optionLabels[i].style.display = "none";
            optionSpans[i].style.display = "none";
        }

        //поместить номер вопроса, кол-во вопросов, вопрос, и варианты ответов в html
        numberOfCurrentQuestion.innerHTML = currentIndex + 1;
        numberOfAllQuestions.innerHTML = this.questions.length;
        question.innerHTML = this.questions[currentIndex].questionText;
        for (let i = 0; i < this.questions[currentIndex].answers.length; i++) {
            optionLabels[i].style.display = "";
            optionSpans[i].style.display = "";
            optionSpans[i].innerHTML = this.questions[currentIndex].answers[i];
        }
    }

    //проверить вопрос
    CheckAnswer() {
        var radioValue;
        if (document.getElementById('r0').checked) {
            radioValue = 0;
        }
        else if (document.getElementById('r1').checked) {
            radioValue = 1;
        }
        else if (document.getElementById('r2').checked) {
            radioValue = 2;
        }
        else if (document.getElementById('r3').checked) {
            radioValue = 3;
        }

        if (this.questions[currentIndex].rightAnswer == radioValue)
            score++;
        console.log(score);
    }
}

//Dota2 Test
const dotaQ1 = new Question('В каком жанре Dota 2?', ['MOBA', 'MMORPG', 'Квест'], 0)
const dotaQ2 = new Question('Сколько максимум команд по 5 человек может участвовать в игре?', ['1', '2', '3'], 1)
const dotaQ3 = new Question('Кто из перечисленных в начале игры наиболее слаб?', ['Керри', 'Саппорт', 'Полусаппорт'], 0)
const dotaQ4 = new Question('Кто такие крипы?', ['Ключевые роли в игре', 'Персонажи противоположной команды', 'Управляемые компьютером существа'], 2)
const dotaQ5 = new Question('Позволяет ли игра следить за передвижением игроков вражеской команды?', ['да', 'нет'], 1)
const dotaQ6 = new Question('Как называют ключевые роли в игре?', ['коры', 'саппорты', 'мидеры'], 0)
const dotaQ7 = new Question('Фармят ли саппорты крипов?', ['да', 'нет'], 1)
const dotaQ8 = new Question('В каком году появилось русское озвучание игры?', ['2015', '2017', '2019'], 0)
const dotaQ9 = new Question('Какой из этих персонажей НЕ был озвучен в 2015 году?', ['Dragon Knight', 'Abaddon', 'Invoker'], 1)
const dotaQ10 = new Question('Кто их перечисленных персонажей не явялется керри?', ['Medusa', 'Antimage', 'Troll Warlord', 'Keeper of the light'], 3)
let dotaTest = new Test();
dotaTest.Add(dotaQ1);
dotaTest.Add(dotaQ2);
dotaTest.Add(dotaQ3);
dotaTest.Add(dotaQ4);
dotaTest.Add(dotaQ5);
dotaTest.Add(dotaQ6);
dotaTest.Add(dotaQ7);
dotaTest.Add(dotaQ8);
dotaTest.Add(dotaQ9);
dotaTest.Add(dotaQ10);

//Erudution Test
const eruditionQ1 = new Question('Кварц относится к полезным ископаемым:', ['горючим', 'рудным', 'нерудным'], 2)
const eruditionQ2 = new Question('Наибольшая планета Солнечной системы — это', ['Уран', 'Нептун', 'Юпитер'], 2)
const eruditionQ3 = new Question('Скопление мелких пригородов вокруг центрального города (компактное скопление населённых пунктов, главным образом городских)— это', ['конгломерация', 'агломерация', 'урбанизация'], 1)
const eruditionQ4 = new Question('Какое сырьё используют атомные станции?', ['Уран', 'Кадмий', 'Ртуть'], 0)
const eruditionQ5 = new Question('Алмаз — это кристаллическая форма ...', ['азота', 'водорода', 'углерода'], 2)
const eruditionQ6 = new Question('Где холоднее всего?', ['На Южном полюсе', 'На Северном полюсе'], 0)
const eruditionQ7 = new Question('Кто написал "Божественную комедию"?', ['Данте Алигьери', 'Гомер', 'Гёте'], 0)
const eruditionQ8 = new Question('Самые протяжённые горы мира — это ...', ['Анды', 'Альпы', 'Гималаи'], 0)
const eruditionQ9 = new Question('Соседи Земли по Солнечной системе - это...', ['Венера, Марс', 'Меркурий, Марс', 'Сатурн, Венера'], 0)
let eruditionTest = new Test();
eruditionTest.Add(eruditionQ1);
eruditionTest.Add(eruditionQ2);
eruditionTest.Add(eruditionQ3);
eruditionTest.Add(eruditionQ4);
eruditionTest.Add(eruditionQ5);
eruditionTest.Add(eruditionQ6);
eruditionTest.Add(eruditionQ7);
eruditionTest.Add(eruditionQ8);
eruditionTest.Add(eruditionQ9);

//IT Test
const itQ1 = new Question('Какой инструмент будете использовать, чтобы уменьшить размер изображения?', ['Фильтр', 'Кисть', 'Поворот', 'Обрезка'], 3)
const itQ2 = new Question('Чем важны большие данные?', ['Они структурированы', 'Их можно анализировать, чтобы выявлять тренды и закономерности', 'Они многокомпонентны', 'Они важны размером'], 1)
const itQ3 = new Question('Какая вредоносная программа создана для того, чтобы использовать бреши в системе безопасности до того, как о них станет известно?', ['Атака нулевого дня', 'Вирус', 'Троянская программа', 'Вирус-вымогатель'], 0)
const itQ4 = new Question('Какой формат файла используется при создании сжатого цифрового архива?', ['PDF', 'JPEG', 'ZIP', 'MP3'], 2)
const itQ5 = new Question('Как расшифровывается FOSS?', ['Свободное программное обеспечение с общедоступными (открытыми) исходными кодами', 'Сенсорная система со всеми возможностями', 'Усовершенствованный образец информационной поддержки', 'Оптоволоконная научная система'], 0)
const itQ6 = new Question('Благодаря какой технологии возможны телефонные звонки через интернет?', ['Bluetooth', 'Ethernet', 'NFC', 'VoIP'], 3)
const itQ7 = new Question('Какой примерно объем информации существует в цифровом мире на сегодняшний день?', ['2,7 мегабайт', '2,7 гигабайт', '2,7 зеттабайт', '2,7 террабайт'], 2)
const itQ8 = new Question('Какое модное словечко в мире техники тесно связано с искусственным интеллектом?', ['Виртуальная реальность', 'Машинное обучение', 'Криптовалюта', 'Микрослужба'], 1)
const itQ9 = new Question('Назовите первую межплатформенную PDF-программу:', ['Adobe Acrobat', 'Foxit PhantomPDF', 'Nitro Pro', 'Able2Extract Professional'], 3)
const itQ10 = new Question('Что из перечисленного связано с машинным обучением?', ['Когнитивная технология', 'XBOX', 'Искусственный интеллект', 'Виртуальная реальность'], 0)
var itTest = new Test();
itTest.Add(itQ1);
itTest.Add(itQ2);
itTest.Add(itQ3);
itTest.Add(itQ4);
itTest.Add(itQ5);
itTest.Add(itQ6);
itTest.Add(itQ7);
itTest.Add(itQ8);
itTest.Add(itQ9);
itTest.Add(itQ10);

//автоматический запуск теста
dotaTest.StartTest();

//кнопка "Ответить"
function AnswerClick() {
    dotaTest.CheckAnswer();
    currentIndex++;
    dotaTest.StartTest();
}

//запуск теста
function StartTest() {
    dotaTest.StartTest();
}