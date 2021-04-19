const ws = new WebSocket('ws://127.0.0.1:8001');

ws.onopen = function() {
    console.log("Соединение установлено.");
};

ws.onmessage = response => {
    let data = JSON.parse(response.data);

    if(data.code == 2) {
        alert('Неверное имя пользователя. Обратитесь в службу поддрежки');
    }

    if(data.code == 1) {
        let auth = document.getElementById('prog-auth');
        auth.classList.add('prog-hide');

        let main = document.getElementById('prog-main');
        main.classList.remove('prog-hide');
    }
};