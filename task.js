(function() {

    function hoverLinks() {
        var divWraper = document.getElementById('wraper1');
        divWraper.addEventListener('mouseover', function(event) { //на событие наведение мыши
            var target = event.target;
            if (target.tagName == 'A') { //если target линка(тег а)
                target.innerText = `${target.title}(${target.href})`; //в содержимое тега вставляем значение с тайтла и атрибута href
            };
        });

        divWraper.addEventListener('mouseout', function(event) { //событие-снятие наведение мыши
            var target = event.target;
            if (target.tagName == 'A') { //если target линка(тег а)
                target.innerText = `${target.name}`; //в содержимое тега вставляем значение с name
            };
        });
    };
    hoverLinks();

    function clickInputsOnce() {
        var inputs = document.getElementById('wraper2').getElementsByTagName('input'); //колекция инпутов
        //приводим коллекцию к массиву-для каждого элемента массива вызываем функцию oneEvent - выполняетися единожды и возвращвет callback- вывод в консоль значения введенного в инпут
        Array.from(inputs).forEach(input => oneEvent(input, 'click', (event) => console.log(event.target.value)));

        //функция для выполнения события единожды
        function oneEvent(node, type, callback) {
            // создать событие
            node.addEventListener(type, function(event) {
                // удаляем событие у target элементов
                event.target.removeEventListener(event.type, arguments.callee);
                // вовращает функцию callback
                return callback(event);
            });
        };
    };

    clickInputsOnce();

    function clickParagraphOnce() {
        var paragraphs = document.getElementById('wraper3').getElementsByTagName('p'); //коллекция абзацей

        //приводим коллекцию к массиву-для каждого элемента массива вызываем функцию oneEvent - выполняетися единожды и возвращвет callback- вывод в консоль значения введенного в инпут
        Array.from(paragraphs).forEach(paragraph => oneEvent(paragraph, 'click', (event) => {
            var target = event.target;
            //значение из абзацей приводим к числу
            var number = parseInt(target.innerText);
            var getPow = Math.pow(number, 2); //число из абзаца возвозим во 2 степень
            target.innerText = getPow; //меняем значение параграфа(число возведенное в степень)

        }))

        //функция для выполнения события единожды
        function oneEvent(node, type, callback) {
            // создать событие
            node.addEventListener(type, function(event) {
                // удаляем событие у target элементов
                event.target.removeEventListener(event.type, arguments.callee);
                // вовращает функцию callback
                return callback(event);
            });
        };
    };

    clickParagraphOnce();

    function validationInputs() {

        var inputs = document.getElementById('wraper4').getElementsByTagName('input'); //коллекция инпутов
        Array.from(inputs).forEach(input => input.addEventListener('blur', inptBlur)); //переводим к массиву и для каждого инпута вешаем событие blur-вызывается ф-ция InptBlur

        function inptBlur(target) {
            var target = event.target;
            var restrict = target.getAttribute('data-length'); //в переменную записываем значение атрибута

            if (target.value.length <= restrict) { //если количество символов у значения инпута меньше или равно retrict
                target.classList.add('greenBorder'); //добавляем класс - зеленый бордер
            } else {
                target.classList.add('redBorder'); //добавляем класс - красный бордер
            };
        };
    };

    validationInputs();

}())