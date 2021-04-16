const ws = new WebSocket('ws://172.16.0.114:8001');

ws.onopen = function() {
    console.log("Соединение установлено.");
};

ws.onmessage = response => {
    let data = (response.data);
    console.log(data);
};