'use strict';

let btnStart = document.getElementById('start'),
  budgetValue = document.getElementsByClassName('budget-value')[0],
  dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

  expensesItems = document.getElementsByClassName('expenses-item'),
  btnExpenses = document.getElementsByTagName('button')[0],
  btnOptionalExpenses = document.getElementsByTagName('button')[1],
  btnCountBudget = document.getElementsByTagName('button')[2],
  optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
  incomeItems = document.querySelector('.choose-income'),
  checkSavings = document.querySelector('#savings'),
  sumValue = document.querySelector('.choose-sum'),
  percentValue = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value');

let money, time;

btnExpenses.disabled = true;
btnOptionalExpenses.disabled = true;
btnCountBudget.disabled = true;

btnStart.addEventListener('click', function() {
  time  = prompt('Введите дату в формате YYYY-MM-DD', '');
  money = +prompt('Ваш бюджет на месяц?', '');

  while ( isNaN(money) || money == '' || money == null )  {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();

  btnExpenses.disabled = false;
  btnOptionalExpenses.disabled = false;
});

btnExpenses.addEventListener('click', function() {
  let sum = 0;

  for (let i = 0; i < expensesItems.length; i++) {
    
    let a = expensesItems[i].value;
    let b = expensesItems[++i].value;

    if ( (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) {
        appData.expenses[a] = b;
        sum += +b;
    } else {
        i--;
    }
  }
  expensesValue.textContent = sum;
  appData.surelyExpenses = sum;
  btnCountBudget.disabled = false;
});

btnOptionalExpenses.addEventListener('click', function() {
  for (let i = 0; i < optionalExpenses.length; i++) {
    let optExpen = optionalExpenses[i].value;
    appData.optionalExpenses[i] = optExpen;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

btnCountBudget.addEventListener('click', function() {
  if (appData.budget != undefined) {
    appData.moneyPerDay = ( (appData.budget - appData.surelyExpenses) / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay <= 100) {
      levelValue.textContent = 'Минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = 'Высокий уровень достатка';
    } else {
      levelValue.textContent = 'Произошла ошибка.';
    }
  } else {
    dayBudgetValue.textContent = 'Произошла ошибка';
  }
});

incomeItems.addEventListener('input', function() {
  let item = incomeItems.value;
  appData.income = item.split(', ');
  incomeValue.textContent = appData.income.join(', ');
});

checkSavings.addEventListener('click', function() {
  if (appData.saving == true) {
    appData.saving = false;
  } else {
    appData.saving = true;
  }
});

sumValue.addEventListener('input', function() {
  if (appData.saving == true) {
    let sum = +sumValue.value,
      pers = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * pers;
    appData.yearIncome = sum / 100 * pers;

    yearSavingsValue.textContent = appData.monthIncome.toFixed(1);
    monthSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener('input', function() {
  if (appData.saving == true) {
    let sum = +sumValue.value,
      pers = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * pers;
    appData.yearIncome = sum / 100 * pers;

    yearSavingsValue.textContent = appData.monthIncome.toFixed(1);
    monthSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
}); 

let appData = {
    budget           : money,
    timeData         : time,
    expenses         : {},
    optionalExpenses : {},
    income           : [],
    saving           : false
};
