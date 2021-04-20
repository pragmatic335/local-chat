/**
 * 500 отправка в общую комнату
 */
document.getElementById('prog-input-now').addEventListener('keydown', function(e) {
    let message = document.getElementById('prog-input-now');
    if (e.keyCode === 13 && message.value) {
        let cooks = document.cookie;
        let arrCooks = cooks.split(';');

        let cookName;
        let cookValue;

        // console.log(arrCooks);
        for (let i = 0; i < arrCooks.length; i++) {
            cookName = arrCooks[i].split('=')[0];
            cookValue = arrCooks[i].split('=')[1];

            if(cookName.trim() === 'proname') {
                // console.log(cookName);
                let request = {
                    status: 500,
                    name: cookValue,
                    message:  document.getElementById( 'prog-input-now').value
                };
                ws.send(JSON.stringify(request));
                document.getElementById('prog-input-now').value = '';
                break;
            }
        }

    }
});