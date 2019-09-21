'use strict';

// Reorders menu items
let menu = document.querySelector('.menu'),
    menuItems = document.querySelectorAll('.menu-item');

menu.removeChild(menuItems[1]);
menu.insertBefore(menuItems[1], menuItems[3]);

// Changes background-image
document.body.style.backgroundImage = 'url("img/apple_true.jpg")';

// Fixes text
// 1)
let title = document.getElementById('title');

title.textContent = 'Мы продаем только подлинную технику Apple';

// Ad removal
let columns = document.querySelectorAll('.column'),
    ad = document.querySelector('.adv');

columns[1].removeChild(ad);

// Add user opinion
let userOpinion = prompt('How do you relate to the apple technique?', ''),
    propmpt = document.getElementById('prompt');

propmpt.textContent = userOpinion;

