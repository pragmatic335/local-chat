
document.getElementById('prog-auth').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        let request = {
            status: 1,
            name: document.getElementById( 'prog-auth').value,
            message: 'hi'
        };
        ws.send(JSON.stringify(request));
    }
});
