// ==UserScript==
// @name         Backup SmurfSchool
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This is the unobcufated version of SmurfSchool
// @author       You
// @match        https://*.smartschool.be/*
// @grant        none
// ==/UserScript==

localStorage.setItem("secretCodeEntered", "true");
if (localStorage.getItem("secretCodeEntered") !== "true") {
    var passwordBox = document.createElement("input");
    // Get the password element
    var passwordbox = document.getElementById("input");
    // Set focus on the password box
    passwordBox.setAttribute("type", "password");
    passwordBox.setAttribute("id", "secretCode");
    document.body.appendChild(passwordBox);
    passwordBox.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            if (passwordBox.value === "Ikhouvanmannen!") {
                localStorage.setItem("secretCodeEntered", "true");
                passwordBox.remove();
                location.reload();
            } else {
                alert("Incorrect secret code.");
                location.reload();
            }
        }
    });
} else {
    if (typeof localStorage.getItem("ShouldGoTo") !== "undefined" && localStorage.getItem("ShouldGoTo") !== null) {
    // execute your code here
    window.location.href = localStorage.getItem("ShouldGoTo");
    localStorage.removeItem("ShouldGoTo");
}
    var _0x3551 = ["top bar go rainbow please!!!", "js-btn-go topnav__btn", "getElementsByClassName", "removeChild", "parentNode", "topnav", "hue", "backgroundColor", "style", "hsl(", ", 100%, 50%)", ", 100%, 40%)", "getTime", "setTime", "expires=", "toUTCString", "cookie", "=", ";", ";path=/", "split", "length", "substring", "charAt", " ", "indexOf", "", "AND ITS NAME IS PLANNER!!!", "a", "createElement", "href", "https://lyceumgent.smartschool.be/planner/main/user/512_18545_0/", "setAttribute", "class", "js-btn-messages topnav__btn", "innerHTML", "Planner", "appendChild", "children", "previousElementSibling", "insertBefore", "aight am", "username", "No username (Type the word 'change')", "span", "getElementsByTagName", "hlp-vert-box", "usericon", "https://previews.123rf.com/images/asmati/asmati1701/asmati170100239/68986859-no-user-sign-illustration-.jpg", "img", "src", "onload", "onerror", "keydown", "key", "change", "endsWith", "Enter your new username:", "Enter your new user icon URL:", "addEventListener", "header__avatar js-header-avatar", "remove"];
    (function () {
        ("top bar go rainbow please!!!");
        var _0xc712x1 = ["js-btn-go topnav__btn", "getElementsByClassName", "removeChild", "parentNode", "topnav", "hue", "backgroundColor", "style", "hsl(", ", 100%, 50%)", ", 100%, 40%)", "getTime", "setTime", "expires=", "toUTCString", "cookie", "=", ";", ";path=/", "split", "length", "substring", "charAt", " ", "indexOf", ""];
        let _0xc712x2 = document.getElementsByClassName("js-btn-go topnav__btn")[0];
        _0xc712x2.parentNode.removeChild(_0xc712x2);
        let _0xc712x3 = document.getElementsByClassName("topnav")[0];
        let _0xc712x4 = parseFloat(getCookie("hue")) || 0;
        if (isNaN(_0xc712x4)) {
            _0xc712x4 = 0;
        }
        ;
        _0xc712x3.style.backgroundColor = `${""}${"hsl("}${""}${_0xc712x4}${""}${", 100%, 50%)"}${""}`;
        function _0xc712x5() {
            _0xc712x4 = (_0xc712x4 + 0.5) % 360;
            _0xc712x3.style.backgroundColor = `${""}${"hsl("}${""}${_0xc712x4}${""}${", 100%, 40%)"}${""}`;
            setCookie("hue", _0xc712x4);
        }
        setInterval(_0xc712x5, 7.5);
        function setCookie(_0xc712x7, _0xc712x8) {
            var _0xc712x9 = new Date;
            _0xc712x9.setTime(_0xc712x9.getTime() + 31536e6);
            var _0xc712xa = "expires=" + _0xc712x9.toUTCString();
            document.cookie = _0xc712x7 + "=" + _0xc712x8 + ";" + _0xc712xa + ";path=/";
        }
        function getCookie(_0xc712x7) {
            var _0xc712xc = _0xc712x7 + "=";
            var _0xc712xd = decodeURIComponent(document.cookie);
            var _0xc712xe = _0xc712xd.split(";");
            for (var _0xc712xf = 0; _0xc712xf < _0xc712xe.length; _0xc712xf++) {
                var _0xc712x10 = _0xc712xe[_0xc712xf];
                while (_0xc712x10.charAt(0) == " ") {
                    _0xc712x10 = _0xc712x10.substring(1);
                }
                ;
                if (_0xc712x10.indexOf(_0xc712xc) == 0) {
                    return _0xc712x10.substring(_0xc712xc.length, _0xc712x10.length);
                }
            }
            ;
            return "";
        }
    }());
    var _0xf576 = ["getTime", "setTime", "expires=", "toUTCString", "cookie", "=", ";", ";path=/", "split", "length", "substring", "charAt", " ", "indexOf", ""];
    function setCookie(_0xc712x12, _0xc712x13) {
        var _0xc712x14 = new Date;
        _0xc712x14.setTime(_0xc712x14.getTime() + 31536e6);
        var _0xc712x15 = "expires=" + _0xc712x14.toUTCString();
        document.cookie = _0xc712x12 + "=" + _0xc712x13 + ";" + _0xc712x15 + ";path=/";
    }
    function getCookie(_0xc712x12) {
        var _0xc712x16 = _0xc712x12 + "=";
        var _0xc712x17 = decodeURIComponent(document.cookie);
        var _0xc712x18 = _0xc712x17.split(";");
        for (var _0xc712x19 = 0; _0xc712x19 < _0xc712x18.length; _0xc712x19++) {
            var _0xc712x1a = _0xc712x18[_0xc712x19];
            while (_0xc712x1a.charAt(0) == " ") {
                _0xc712x1a = _0xc712x1a.substring(1);
            }
            ;
            if (_0xc712x1a.indexOf(_0xc712x16) == 0) {
                return _0xc712x1a.substring(_0xc712x16.length, _0xc712x1a.length);
            }
        }
        ;
        return "";
    }
    (function () {
        ("AND ITS NAME IS PLANNER!!!");
        var _0xc712x1b = ["topnav", "getElementsByClassName", "a", "createElement", "href", "https://lyceumgent.smartschool.be/planner/main/user/512_18545_0/", "setAttribute", "class", "js-btn-messages topnav__btn", "innerHTML", "Planner", "appendChild", "children", "previousElementSibling", "insertBefore"];
        let _0xc712x3 = document.getElementsByClassName("topnav")[0];
        let _0xc712x1c = document.createElement("a");
        _0xc712x1c.setAttribute("href", "https://lyceumgent.smartschool.be/planner/main/user/512_18545_0/");
        _0xc712x1c.setAttribute("class", "js-btn-messages topnav__btn");
        _0xc712x1c.innerHTML = "Planner";
        _0xc712x3.appendChild(_0xc712x1c);
        let _0xc712x1d = _0xc712x3.children;
        let _0xc712x1e = _0xc712x1c;
        for (let _0xc712x1f = 0; _0xc712x1f < 5; _0xc712x1f++) {
            _0xc712x1e = _0xc712x1e.previousElementSibling;
        }
        ;
        _0xc712x3.insertBefore(_0xc712x1c, _0xc712x1e);
    }());
    (function () {
        ("aight am");
        let _0xc712x20 = "";
        let _0xc712x21 = getCookie("username") || "No username (Type the word 'change')";
        let _0xc712x22 = document.getElementsByClassName("hlp-vert-box")[0].getElementsByTagName("span")[0];
        if (!_0xc712x21) {
            _0xc712x21 = "No username (Type the word 'change')";
            setCookie("username", _0xc712x21);
        }
        ;
        _0xc712x22.innerHTML = _0xc712x21;
        let _0xc712x23 = getCookie("usericon") || "https://previews.123rf.com/images/asmati/asmati1701/asmati170100239/68986859-no-user-sign-illustration-.jpg";
        let _0xc712x24 = document.getElementsByTagName("img")[0];
        let _0xc712x25 = new Image;
        _0xc712x25.src = _0xc712x23;
        _0xc712x25.onload = function () {
            _0xc712x24.src = _0xc712x23;
        };
        _0xc712x25.onerror = function () {
            _0xc712x24.src = "https://previews.123rf.com/images/asmati/asmati1701/asmati170100239/68986859-no-user-sign-illustration-.jpg";
            setCookie("usericon", "https://previews.123rf.com/images/asmati/asmati1701/asmati170100239/68986859-no-user-sign-illustration-.jpg");
        };
        document.addEventListener("keydown", _0xc712x26 => {
            _0xc712x20 += _0xc712x26.key;
            if (_0xc712x20.endsWith("change")) {
                let _0xc712x27 = prompt("Enter your new username:");
                if (!_0xc712x27) {
                    _0xc712x27 = "No username (Type the word 'change')";
                }
                ;
                _0xc712x22.innerHTML = _0xc712x27;
                setCookie("username", _0xc712x27);
                let _0xc712x28 = prompt("Enter your new user icon URL:");
                _0xc712x25.src = _0xc712x28;
                _0xc712x25.onload = function () {
                    _0xc712x24.src = _0xc712x28;
                    setCookie("usericon", _0xc712x28);
                };
                _0xc712x25.onerror = function () {
                    _0xc712x24.src = "https://previews.123rf.com/images/asmati/asmati1701/asmati170100239/68986859-no-user-sign-illustration-.jpg";
                    setCookie("usericon", "https://previews.123rf.com/images/asmati/asmati1701/asmati170100239/68986859-no-user-sign-illustration-.jpg");
                };
                _0xc712x20 = "";
            }
        });
    }());
    function setCookie2(_0xc712x2a, _0xc712x2b) {
        var _0xc712x2c = new Date;
        _0xc712x2c.setTime(_0xc712x2c.getTime() + 31536e6);
        var _0xc712x2d = "expires=" + _0xc712x2c.toUTCString();
        document.cookie = _0xc712x2a + "=" + _0xc712x2b + ";" + _0xc712x2d + ";path=/";
    }
    function getCookie2(_0xc712x2a) {
        var _0xc712x2f = _0xc712x2a + "=";
        var _0xc712x30 = decodeURIComponent(document.cookie);
        var _0xc712x31 = _0xc712x30.split(";");
        for (var _0xc712x1f = 0; _0xc712x1f < _0xc712x31.length; _0xc712x1f++) {
            var _0xc712x32 = _0xc712x31[_0xc712x1f];
            while (_0xc712x32.charAt(0) == " ") {
                _0xc712x32 = _0xc712x32.substring(1);
            }
            ;
            if (_0xc712x32.indexOf(_0xc712x2f) == 0) {
                return _0xc712x32.substring(_0xc712x2f.length, _0xc712x32.length);
            }
        }
        ;
        return "";
    }
    window.onload = function () {
        let _0xc712x33 = document.getElementsByClassName("header__avatar js-header-avatar")[0];
        if (_0xc712x33) {
            _0xc712x33.remove();
        }
    };
}
