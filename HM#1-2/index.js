'use strict'

let money = +prompt("Ваш бюджет на месяц?", ""),
time  = prompt("Введите дату в формате YYYY-MM-DD", ""),
appData = {
    budget           : money,
    timeData         : time,
    expenses         : {},
    optionalExpenses : {},
    income           : [],
    saving           : false
};



/*
for (let i = 0; i < 2; i++) {
    
    let a = prompt("Введите обязательную статью расходов", "");
    let b = +prompt("Во сколько обойдеться?", "");

    if (typeof(a) === 'string' && (typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50)) {
        console.log ('done');
        appData.expenses[a] = b;
    } else {
        i--;
    }
}
*/

/*
let i = 1;
while (i <= 2) {
    let a = prompt("Введите обязательную статью расходов", "");
    let b = +prompt("Во сколько обойдеться?", ""); 

    if (typeof(a) === 'string' && (typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50)) {
        console.log ('done');
        appData.expenses[a] = b;
    } else {
        i--;
    }
    i++;
}
*/

let i = 1;
do {
    let a = prompt("Введите обязательную статью расходов", "");
    let b = +prompt("Во сколько обойдеться?", ""); 

    if (typeof(a) === 'string' && (typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50)) {
        console.log ('done');
        appData.expenses[a] = b;
    } else {
        i--;
    }

    i++;
} while (i <= 2);

appData.moneyPerDay = appData.budget / 30;

alert( "Бюджет на один день = " + appData.moneyPerDay);

if (appData.moneyPerDay > 0 && appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка.');
}

