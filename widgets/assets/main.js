// document.getElementById('progmatik-massager').on('click', function(event) {
//     console.log('hello world');
// });

document.getElementById('prog-marker').onclick = function(event) {
    let content = document.getElementById('prog-content');

    if(window.getComputedStyle( content, null ).width == '700px') {
        content.style.width = '0px';
    }
    else {
        content.style.width = '700px';
    }
};