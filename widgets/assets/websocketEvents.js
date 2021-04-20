/**
 * Коды событий
 * 1 - авторизация
 * 2 - неудачная попытка авторизации
 * 11 - получение списка всех пользователей чата
 * 200 - получение сообщений для глобального чата
 */

const ws = new WebSocket('ws://127.0.0.1:8001');

ws.onopen = function() {
    console.log("Соединение установлено.");
    let cooks = document.cookie;
    let request;

    //при очередном коннекте, ищем куку с нужным именем пользователя и отправляем его на авторизацию
    if(cooks) {
        let arrCooks = cooks.split(';');

        let cookName;
        let cookValue;

        for (let i = 0; i < arrCooks.length; i++) {
            cookName = arrCooks[i].split('=')[0];
            cookValue = arrCooks[i].split('=')[1];

            if(cookName.trim() === 'proname') {
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

    request = {
        status: 200,
    };
    ws.send(JSON.stringify(request));

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
        document.cookie = 'proname=' + data.name + ';max-age=1230';

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

    if(data.code === 200) {
        let blockmessage = document.getElementById('prog-message')
        for (let i = 0; i < data.messages.length; i++) {
            blockmessage.innerHTML += '<div class="prog-message-instance">\n' +
                '                        <div>\n' +
                '                            ' + data.messages[i][0] + '\n' +
                '                        </div>\n' +
                '                       <div class="prog-createdata">от ' + data.messages[i][1] + ' ' + data.messages[i][2] + '</div>\n' +
                '                    </div>';
        }
    }

    if(data.code === 500) {
        let blockmessage = document.getElementById('prog-message')
        blockmessage.innerHTML='';

        for (let i = 0; i < data.messages.length; i++) {
            blockmessage.innerHTML += '<div class="prog-message-instance">\n' +
                '                        <div>\n' +
                '                            ' + data.messages[i][0] + '\n' +
                '                        </div>\n' +
                '                       <div class="prog-createdata">от ' + data.messages[i][1] + ' ' + data.messages[i][2] + '</div>\n' +
                '                    </div>';
        }
    }

};