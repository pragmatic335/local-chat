// document.getElementById('progmatik-massager').on('click', function(event) {
//     console.log('hello world');
// });

const ws = new WebSocket('ws://172.16.0.114:8001');

ws.onopen = function() {
    console.log("Соединение установлено.");
};

ws.onmessage = response => {
    let data = (response.data);
    console.log(data);
};



document.getElementById('prog-marker').onclick = function(event) {
    let content = document.getElementsByClassName('prog-content')[0];

    if(window.getComputedStyle( content, null ).width == '1000px') {
        content.style.width = '0px';
    }
    else {
        content.style.width = '1000px';
    }
};