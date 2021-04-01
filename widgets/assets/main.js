// document.getElementById('progmatik-massager').on('click', function(event) {
//     console.log('hello world');
// });

document.getElementById('progmatik-massager').onclick = function(event) {
    if(this.style.height == '550px') {
        this.style.height = '40px'
    }
    else {
        this.style.height = '550px'
    }
};