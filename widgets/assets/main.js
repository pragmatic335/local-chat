// document.getElementById('progmatik-massager').on('click', function(event) {
//     console.log('hello world');
// });

document.getElementById('prog-marker').onclick = function(event) {
    let content = document.getElementsByClassName('prog-content');

    for (let i = 0; i < content.length; i++) {

        if(window.getComputedStyle(content[i], null ).width == '1000px') {
            content[i].style.width = '0px';
        }
        else {
            content[i].style.width = '1000px';
        }
    }


};
