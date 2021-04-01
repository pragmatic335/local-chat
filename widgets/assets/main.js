// document.getElementById('progmatik-massager').on('click', function(event) {
//     console.log('hello world');
// });

document.getElementById('prog-massager').onclick = function(event) {
    if(window.getComputedStyle( this, null ).height == '400px') {
        this.style.height = '30px';
    }
    else {
        this.style.height = '400px';
    }


};