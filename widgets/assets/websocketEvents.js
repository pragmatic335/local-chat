/**
 * Коды событий
 * 1 - авторизация
 * 2 - неудачная попытка авторизации
 * 11 - получение списка всех пользователей чата
 */

const ws = new WebSocket('ws://172.16.0.114:8001');

ws.onopen = function() {
    console.log("Соединение установлено.");
    let cooks = document.cookie;

    //при очередном коннекте, ищем куку с нужным именем пользователя и отправляем его на авторизацию
    if(cooks) {
        let arrCooks = cooks.split(';');

        let request;

        let cookName;
        let cookValue;

        for (let i = 0; i < arrCooks.length; i++) {
            cookName = arrCooks[i].split('=')[0];
            cookValue = arrCooks[i].split('=')[1];

            if(cookName === 'progname') {
                request = {
                    status: 1,
                    name: cookValue,
                    message: 'hi'
                };
                ws.send(JSON.stringify(request));
                break;
            }
        }

    }
};

ws.onmessage = response => {
    //todo ошибка, поправить
    let data = JSON.parse(response.data);

    //если пользователя нет в базе, кидаем предупреждение
    if (data.code === 2) {
        alert('Неверное имя пользователя. Обратитесь в службу поддрежки');
    }

    //если пользователь авторизован
    if (data.code === 1) {
        document.cookie = 'progname=' + data.name + ';max-age=60';

        let auth = document.getElementById('prog-auth-form');
        auth.classList.add('prog-hide');

        let main = document.getElementById('prog-main');
        main.classList.remove('prog-hide');
    }

    //получаем список всех пользователей с последующим добавлением их в меню
    if (data.code === 11) {
        let users = document.getElementById('prog-user-rooms');

        for (let i = 0; i < data.names.length; i++) {
            users.innerHTML += '<div class="prog-user">\n' +
                '                    <i class="fa fa-circle prog-online"></i>\n' +
                '                    <h6 style="margin-top: 5px; word-break: break-all; margin-left: 15px;">' + data.names[i] +'</h6>\n' +
                '                </div>';
        }
    }
};