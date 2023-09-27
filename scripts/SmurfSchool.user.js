// ==UserScript==
// @name         SmurfSchoolbetter/manually2
// @namespace    http://tampermonkey.net/
// @icon         https://static1.smart-school.net/smsc/svg/favicon/favicon.svg
// @version      0.8.3
// @description  This is the unobcufated version of SmurfSchool
// @author       ProRobinH4cker
// @match        https://*.smartschool.be/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @run-at       document-end
// ==/UserScript==

if (typeof GM_getValue("ShouldGoTo") !== "undefined" && GM_getValue("ShouldGoTo") !== null) {
    window.location.href = GM_getValue("ShouldGoTo");
    console.log(GM_getValue("ShouldGoTo"))
    GM_deleteValue("ShouldGoTo");
}
(function() {
    ("top bar go rainbow please!!!");
    let topnav_go_button = document.getElementsByClassName("js-btn-go topnav__btn")[0];
    topnav_go_button.parentNode.removeChild(topnav_go_button);
    let topnavElement = document.getElementsByClassName("topnav")[0];
    let hueValue = parseFloat(getCookie("hue")) || 0;
    if (isNaN(hueValue)) {
        hueValue = 0;
    };
    topnavElement.style.backgroundColor = `hsl(${hueValue}, 100%, 50%)`;
    function incrementAndSetHueValue(newHueValue) {
        if (typeof newHueValue === 'string' && newHueValue.toLowerCase() === 'rainbow') {
            hueValue = (hueValue + 0.5) % 360;
        } else if (typeof newHueValue === 'string' && newHueValue.toLowerCase() === 'slider') {
            hueValue = updateSlider()
        } else if (typeof newHueValue === 'number') {
            hueValue = newHueValue;
        }
        topnavElement.style.backgroundColor = `hsl(${hueValue}, 100%, 40%)`;
        setCookie("hue", hueValue);
    }
    function updateSlider() {
        var value = sliderID.value;
        return value;
    }
    setInterval(incrementAndSetHueValue, 7.5, 'slider'); //miliseconds
    function setCookie(cookieName, value) {
        var _0xc712x9 = new Date;
        _0xc712x9.setTime(_0xc712x9.getTime() + 31536e6); //31536e6 is one year
        var _0xc712xa = "expires=" + _0xc712x9.toUTCString();
        document.cookie = cookieName + "=" + value + ";" + _0xc712xa + ";path=/";
    }

    function getCookie(cookieName) {
        var cookievalue = cookieName + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var cookieAray = decodedCookie.split(";");
        for (var i = 0; i < cookieAray.length; i++) {
            var currentCookie = cookieAray[i];
            while (currentCookie.charAt(0) == " ") {
                currentCookie = currentCookie.substring(1);
            };
            if (currentCookie.indexOf(cookievalue) == 0) {
                return currentCookie.substring(cookievalue.length, currentCookie.length);
            }
        };
        return "";
    }
}());

function setCookie(hueCookie, hue) {
    var _0xc712x14 = new Date;
    _0xc712x14.setTime(_0xc712x14.getTime() + 31536e6);
    var cookieExpiry = "expires=" + _0xc712x14.toUTCString();
    document.cookie = hueCookie + "=" + hue + ";" + cookieExpiry + ";path=/";
}

function getCookie(hueCookie) {
    var cookieName = hueCookie + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieAray = decodedCookie.split(";");
    for (var i = 0; i < cookieAray.length; i++) {
        var cookieValue = cookieAray[i];
        while (cookieValue.charAt(0) == " ") {
            cookieValue = cookieValue.substring(1);
        };
        if (cookieValue.indexOf(cookieName) == 0) {
            return cookieValue.substring(cookieName.length, cookieValue.length);
        }
    };
    return "";
}
(function() {
    ("AND ITS NAME IS PLANNER!!!");
    let topnavElement = document.getElementsByClassName("topnav")[0];
    let plannerElement = document.createElement("a");
    plannerElement.setAttribute("href", "https://lyceumgent.smartschool.be/planner/main/user/512_18545_0/");
    plannerElement.setAttribute("class", "js-btn-messages topnav__btn");
    plannerElement.innerHTML = "Planner";
    topnavElement.appendChild(plannerElement)
    for (let i = 0; i < 5; i++) {
        topnavElement.insertBefore(plannerElement, plannerElement.previousElementSibling);
    };
}());

(function() {
    ("aight am");
    let keyBuffer = "";
    let username = getCookie("username") || "No username (Type the word 'change')";
    let usernameElement = document.getElementsByClassName("hlp-vert-box")[0].getElementsByTagName("span")[0];
    if (!username) {
        username = "No username (Type the word 'change')";
        setCookie("username", username);
    };
    usernameElement.innerHTML = username;
    let userIconUrl = getCookie("usericon") || "https://previews.123rf.com/images/asmati/asmati1701/asmati170100239/68986859-no-user-sign-illustration-.jpg";
    let userIconImageElement = document.getElementsByTagName("img")[0];
    let tempImageElement = new Image;
    tempImageElement.src = userIconUrl;
    tempImageElement.onload = function() {
        userIconImageElement.src = userIconUrl;
    };
    tempImageElement.onerror = function() {
        userIconImageElement.src = "https://previews.123rf.com/images/asmati/asmati1701/asmati170100239/68986859-no-user-sign-illustration-.jpg";
        setCookie("usericon", "https://previews.123rf.com/images/asmati/asmati1701/asmati170100239/68986859-no-user-sign-illustration-.jpg");
    };
    document.addEventListener("keydown", EventListener => {
        keyBuffer += EventListener.key;
        if (keyBuffer.endsWith("change")) {
            let usernameValue = prompt("Enter your new username:");
            if (!usernameValue) {
                usernameValue = "No username (Type the word 'change')";
            };
            usernameElement.innerHTML = usernameValue;
            setCookie("username", usernameValue);
            let iconUrlValue = prompt("Enter your new user icon URL:");
            tempImageElement.src = iconUrlValue;
            tempImageElement.onload = function() {
                userIconImageElement.src = iconUrlValue;
                setCookie("usericon", iconUrlValue);
            };
            tempImageElement.onerror = function() {
                userIconImageElement.src = "https://previews.123rf.com/images/asmati/asmati1701/asmati170100239/68986859-no-user-sign-illustration-.jpg";
                setCookie("usericon", "https://previews.123rf.com/images/asmati/asmati1701/asmati170100239/68986859-no-user-sign-illustration-.jpg");
            };
            keyBuffer = "";
        }
    });
}());
window.onload = function() {
    let mainPfpElement = document.getElementsByClassName("header__avatar js-header-avatar")[0];
    if (mainPfpElement) {
        mainPfpElement.remove();
    }
    let pfpElement = document.getElementsByClassName("splitdetail__header__avatar js-splitdetail-header-avatar")[0];
    if (pfpElement) {
        pfpElement.remove();
    }
};
let hueValue = parseFloat(getCookie("hue")) || 0;

(function() {
    'use strict';

    // Create the modal element
    const modal = document.createElement("div");
    modal.id = "settingsModal";
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.zIndex = "1";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.overflow = "auto";
    modal.style.backgroundColor = "rgba(0,0,0,0.4)";

    // Create the modal content
    const modalContent = document.createElement("div");
    modalContent.id = "settingsContent";
    modalContent.style.backgroundColor = "#fefefe";
    modalContent.style.margin = "15% auto";
    modalContent.style.padding = "20px";
    modalContent.style.border = "1px solid #888";
    modalContent.style.width = "80%";

    // Add the modal content to the modal element
    modal.appendChild(modalContent);

    // Create the "Settings" button
    const settingsBtn = document.createElement("a");
    settingsBtn.classList.add("topnav__menuitem", "topnav__menuitem--img");
    settingsBtn.setAttribute("role", "menuitem");
    settingsBtn.setAttribute("id", "settingsBtn");

    const settingsImg = document.createElement("img");
    settingsImg.src = "https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png";
    settingsImg.alt = "Profiel afbeelding";

    const settingsSpan = document.createElement("span");
    settingsSpan.textContent = "Settings";

    // Add the image and span to the "Settings" button
    settingsBtn.appendChild(settingsImg);
    settingsBtn.appendChild(settingsSpan);

    // Add the "Settings" button to the topnav menu
    const topnavMenu = document.getElementsByClassName("topnav__menu")[0];
    topnavMenu.appendChild(settingsBtn);

    // Add an event listener to the "Settings" button to show the modal
    settingsBtn.addEventListener("click", function(e) {
        e.preventDefault();
        modal.style.display = "block";
    });

    // Create the "Close" button
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    closeBtn.id = "closeSettings";

    // Add an event listener to the "Close" button to hide the modal
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });
    var slider = document.createElement("input");
    slider.setAttribute("id", "slider-id");
    slider.type = "range";
    slider.min = 0;
    slider.max = 360;
    slider.value = getCookie('hue');
    slider.step = 1;
    slider.style.width = "200px";

    // Add the "Close" button to the modal content
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(slider);
    // Add your custom code here to modify the modal content and add event listeners

    // Add the modal to the page
    document.body.appendChild(modal);
})();

var sliderID = document.getElementById("slider-id");
