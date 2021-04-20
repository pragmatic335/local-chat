const ws = new WebSocket('ws://127.0.0.1:8001');

ws.onopen = function() {
    console.log("Соединение установлено.");
    let cook = document.cookie;
    if(cook) {
        let username = cook.split('=')[1];
        let request = {
            status: 1,
            name: username,
            message: 'hi'
        };
        // console.log(ws)
        ws.send(JSON.stringify(request));
    }
};

ws.onmessage = response => {
    let data = JSON.parse(response.data);

    if(data.code == 2) {
        alert('Неверное имя пользователя. Обратитесь в службу поддрежки');
    }

    if(data.code == 1) {
        // специальные символы (пробелы), требуется кодирование
        // let name = "name";
        // let value = data.name;

        // document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';max-age=20';
        document.cookie = 'name=' + data.name +';max-age=600';

        // alert(document.cookie);
        let auth = document.getElementById('prog-auth-form');
        auth.classList.add('prog-hide');

        let main = document.getElementById('prog-main');
        main.classList.remove('prog-hide');
    }
};