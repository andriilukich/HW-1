function submitForm(formMainClass, formContactId, inputTag, statusStyle) {
        let message = {
        loading : 'Загрузка...',
        success : 'Спасибо! Скоро мы с вами свяжемся!',
        failure : 'Что-то пошло не так ...'
    },
        formMain = document.querySelector(formMainClass),
        formContact = document.getElementById(formContactId),
        input = document.getElementsByTagName(inputTag),
        statusMessage = document.createElement('div');

    statusMessage.classList.add(statusStyle);

    // FORM + promise
    function sendForm(form) {
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            form.appendChild(statusMessage);
            let formData = new FormData(form);

            function postData(data) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();

                    request.open('POST', 'server.php');
                    
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //PHP

                    request.onreadystatechange = function() {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    };

                    request.send(data); //PHP
                });
            } //End postData

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);

        }); 
    }

    sendForm(formMain);
    sendForm(formContact);
}

module.exports = submitForm;

/*

function sendForm(form) {
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //json
        // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //PHP

        let formData = new FormData(form),
            obj = {}; //json

        formData.forEach(function(value, key) { //json
            obj[key] = value;
        });

        let json = JSON.stringify(obj); //json
        request.send(json); //json
        // request.send(formData); //PHP

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        let input = form.querySelectorAll('input');

        input.forEach(function(element) {
            element.value = '';
        });

    }); 
}

sendForm(formMain);
sendForm(formContact);

*/