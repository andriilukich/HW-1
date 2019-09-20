'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");

    while ( isNaN(money) || money == '' ||
        money == null || !isFinite(money) )  {

        money = +prompt("Ваш бюджет на месяц?", "");
    }

    time  = prompt("Введите дату в формате YYYY-MM-DD", "");
} 

start();

let appData = {
    budget           : money,
    timeData         : time,
    expenses         : {},
    optionalExpenses : {},
    income           : [],
    saving           : true,
    chooseExpenses   : function() {
        for (let i = 0; i < 2; i++) {
    
            let a = prompt("Введите обязательную статью расходов", "");
            let b = +prompt("Во сколько обойдеться?", "");
        
            if (typeof(a) === 'string' &&
                (typeof(a) != null && typeof(b) != null &&
                a != '' && b != '' && a.length < 50)) {

                console.log('done');
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget : function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert( "Бюджет на один день = " + appData.moneyPerDay);
    },
    detectLevel : function() {
        if (appData.moneyPerDay > 0 && appData.moneyPerDay < 100) {
            alert('Минимальный уровень достатка');
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            alert('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            alert('Высокий уровень достатка');
        } else {
            alert('Произошла ошибка.');
        }
    },
    checkSavings : function() {
        if (appData.saving) {
            let save = +prompt('Kakova summa nakopleni?','');
    
            while ( isNaN(save) || !isFinite(save) ||
                save == '' || save == null) {

                save = +prompt('Kakova summa nakopleni?','');
            }
    
            let pers = +prompt('Kakov prosent?', '');
    
            while ( isNaN(pers) || !isFinite(pers) ||
                save == '' || save == null ) {

                pers = +prompt('Kakov prosent?', '');
            }
    
            appData.monthIncome = save / 100 / 12 * pers;
    
            alert('Dohod deneg s vashego deposita: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses : function() {
        for (let i = 1; i <= 3; i++) {
            let optExpen = prompt('Статья необязательных расходов?', '');
    
            appData.optionalExpenses[i] = optExpen;
            console.log("Yey!");
        }
    },
    chooseIncome : function() {
        let incomeItems;

        incomeItems = prompt('Enter what will bring additional sources of income (list with a comma)', '');

        while ( isFinite(incomeItems) ) {
            incomeItems = prompt('Enter what will bring additional sources of income (list with a comma)', '');
        }
        
        if (incomeItems != null) {
            appData.income = incomeItems.split(', ');

            incomeItems = prompt('Maybe something else?', '');

            while ( incomeItems != null && isFinite(incomeItems) ) {
                incomeItems = prompt('Maybe something else?', '');
            }

            if (incomeItems != null) {
                incomeItems = incomeItems.split(', ');

                if (incomeItems.length == 1) {
                    appData.income.push(incomeItems);
                } else {
                    for (let i = 0; i < incomeItems.length; i++) {
                        appData.income.push(incomeItems[i]);
                    }
                }
                
            }
        }

        appData.income.sort();

        let incomeList = 'Способы доп. заработка:\n';
        appData.income.forEach( function(item, i) {
            incomeList += ++i + ': ' + item + '\n';
        });

        alert(incomeList);
    }
};

console.log('Наша программа включает в себя данные:');
for (let key in appData) {
    ( typeof(appData[key]) != 'function') ? 
    console.log('Параметр: ' + key + ' его значение - ' +  appData[key]) :
    console.log('Дополнительные функции:' + key);
}

console.log();