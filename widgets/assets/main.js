/**
 * Открыть/закрыть чат
 */
function moveContent() {
    let content = document.getElementsByClassName('prog-content');

    for (let i = 0; i < content.length; i++) {

        if(window.getComputedStyle(content[i], null ).width === '1000px') {
            content[i].style.width = '0px';
        }
        else {
            content[i].style.width = '1000px';
        }
    }
}

/**
 * При клике на иконку чата - открытие/закрытие
 */
document.getElementById('prog-marker').onclick = function(event) {
    hideFormContent();
};

/**
 * Разлогирование пользователя
 */
document.getElementById('prog-out').onclick = function(event) {
    document.cookie = 'progname=' + '' + ';max-age=-1';

    let main = document.getElementById('prog-main');
    main.classList.add('prog-hide');

    let auth = document.getElementById('prog-auth-form');
    auth.classList.remove('prog-hide');
};

