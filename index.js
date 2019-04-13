let money = prompt("Ваш бюджет на месяц?", "");
let time  = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    budjet           : money,
    timeData         : time,
    expenses         : {},
    optionalExpenses : {},
    income           : [],
    saving           : false
};

let firstExpense      = prompt("Введите обязательную статью расходов", "");
appData.firstExpense  = prompt("Во сколько обойдеться?", "");
let secondExpense     = prompt("Введите обязательную статью расходов", "");
appData.secondExpense = prompt("Во сколько обойдеться?", "");


alert( "Бюджет на один день = " + (+appData.budjet - +appData.expenses.firstExpense - +appData.expenses.secondExpense) / 30 );


