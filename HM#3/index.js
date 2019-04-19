let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");

    while ( isNaN(money) || money == '' || money == null || !isFinite(money) )  {
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
    saving           : true
};

function chooseExpenses() {
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
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert( "Бюджет на один день = " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay > 0 && appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка.');
    }
}

detectLevel();

function checkSavings () {
    if (appData.saving) {
        let save = +prompt('Kakova summa nakopleni?','');

        while ( isNaN(save) || !isFinite(save) || save == '' || save == null) {
            save = +prompt('Kakova summa nakopleni?','');
        }

        let pers = +prompt('Kakov prosent?', '');

        while ( isNaN(pers) || !isFinite(pers) || save == '' || save == null ) {
            pers = +prompt('Kakov prosent?', '');
        }

        appData.monthIncome = save / 100 / 12 * pers;

        alert('Dohod deneg s vashego deposita: ' + appData.monthIncome);
        
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let optExpen = prompt('Статья необязательных расходов?', '');

        appData.optionalExpenses[i] = optExpen;
        console.log("Yey!");
        
    }
}

chooseOptExpenses();
