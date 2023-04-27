// ==UserScript==
// @name         Autofill Smartschool login
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automaticly fills in your Smartschool login data.
// @author       You
// @match        https://*.smartschool.be/login
// @grant        none
// ==/UserScript==

function fillall() {
    const parentElement = document.querySelector('.login-app__form');
    const newDivElement = "<h2 id='resettext' style='color:#FF0000;margin:auto;'>Press the reset button to change login data (if wrong).</h2><button id='reset' style='margin: auto;'>Reset login data</button>";
    parentElement.insertAdjacentHTML('beforebegin', newDivElement);

    let username = localStorage.getItem("savedUsername");
    let password = localStorage.getItem("savedPassword");
    function typeshit() {
        function typeString(string) {
            let i = 0;
            const input = document.getElementById('login_form__username');

            function type() {
                input.value += string[i];
                input.dispatchEvent(new Event('input'));
                i++;
                if (i < string.length) {
                    setTimeout(type, 50);
                }
            }

            type();
        }

        function typeString2(string) {
            let i = 0;
            const input = document.getElementById('login_form__password');

            function type() {
                input.value += string[i];
                input.dispatchEvent(new Event('input'));
                i++;
                if (i < string.length) {
                    setTimeout(type, 50);
                }
            }

            let delay = username.length * 50;
            setTimeout(type, delay);
        }

        const user = document.getElementById('login_form__username');
        user.value = '';
        const pass = document.getElementById('login_form__password');
        pass.value = '';
        typeString(username);
        typeString2(password);
    }
    typeshit();

    let totalDelay = (username.length + password.length) * 50;
    setInterval(checkIfCorrect, totalDelay + 100);
    function checkIfCorrect() {
        const usern = document.getElementById('login_form__username');
        if (usern.value === username) {
            // the values match
            console.log('correct username')
            const passw = document.getElementById('login_form__password');
            if (passw.value === password) {
                // the values match
                console.log('correct password')
                const button = document.querySelector('button.smscButton.blue[type="submit"]');
                button.click();
                localStorage.setItem("ShouldGoTo", 'https://lyceumgent.smartschool.be/planner/main/user/512_18545_0/');

            } else {
                // the values do not match
                console.log('wrong password')
                passw.value = password;
                checkIfCorrect();
            }

        } else {
            // the values do not match
            console.log('wrong username')
            usern.value = username;
            checkIfCorrect();
        }
    };
}
function getDataOrFill() {
    const button = document.querySelector('button.smscButton.blue[type="submit"]');
    if (!localStorage.getItem("savedUsername") || !localStorage.getItem("savedPassword")) {
        const parent = document.querySelector('.login-app__form');
        const newDiv = "<h3 style='color:#FF0000;'>Fill in your login data that the bot should repeat.</h3>";
        parent.insertAdjacentHTML('beforebegin', newDiv);
    }
    if (!localStorage.getItem("savedUsername") || !localStorage.getItem("savedPassword")) {
        // the values of Username and Password are not set, so run the code
        button.addEventListener("click", function(event) {
            event.preventDefault(); // prevent the default behavior of the button
            const filleduser = document.getElementById('login_form__username');
            const filledpass = document.getElementById('login_form__password');
            alert("Make sure nobody except you is looking at your screen! Login data will be shown for verification.");
            if(confirm(`Are you sure this is the correct data?
         Username: ${filleduser.value}
         Password: ${filledpass.value}`)) {
                // User clicked "OK"
                localStorage.setItem("savedUsername", filleduser.value);
                localStorage.setItem("savedPassword", filledpass.value);
                location.reload();
            } else {
                // User clicked "Cancel"
                location.reload();
            }
        });
    }
    else {
        fillall();

    }
}
getDataOrFill()

const reset = document.getElementById('reset');
reset.addEventListener("click", function(event) {
    const user = document.getElementById('login_form__username');
    user.value = '';
    const pass = document.getElementById('login_form__password');
    pass.value = '';
    localStorage.removeItem("savedUsername");
    localStorage.removeItem("savedPassword");
    location.reload();
    alert('login data has been reset!')
});

const parentElement = document.querySelector('.login-app__form');
const errorElement = "<div id=errorElementTest><h3 style='color:#FF0000;'>Test</h3>";
parentElement.insertAdjacentHTML('beforebegin', errorElement);
const errorElementTest = document.getElementById('errorElementTest');
setTimeout(function() {
    errorElementTest.innerHTML += ``;
}, 100);
