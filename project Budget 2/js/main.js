'use strict';
// Получить кнопку "Начать расчет" через id
const calculation = document.getElementById('start'),


// Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)
/*
  budget = document.querySelector('.budget-value'),
  daybudget = document.querySelector('.daybudget-value'),
  level = document.querySelector('.level-value'),
  expenses = document.querySelector('.expenses-value'),
  optionalexpenses = document.querySelector('.optionalexpenses-value'),
  income = document.querySelector('.income-value'),
  monthsavings = document.querySelector('.monthsavings-value'),
  yearsavings = document.querySelector('.yearsavings-value'),
*/
/*
  values = document.querySelectorAll('[class*=-value]:not(.year-value):not(.month-value):not(.day-value)'),
*/
  values = document.querySelectorAll('.result-table [class*=-value]'),
// Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
  inputExpenses = document.querySelectorAll('.expenses-item'),
// Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
  inputOptionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
/*
  expensesBtn = document.getElementsByTagName('button')[0],
  optionalExpensesBtn = document.getElementsByTagName('button')[1],
  countBudgetBtn = document.getElementsByTagName('button')[2]; 
*/
  expensesBtn = document.querySelector('button'),
  optionalExpensesBtn = document.querySelectorAll('button')[1],
  countBudgetBtn = document.querySelectorAll('button')[2],
// Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
  chooseIncome = document.querySelector('.choose-income'),
  savings = document.querySelector('.savings'),
  chooseSum = document.querySelector('.choose-sum'),
  choosePercent = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value');

  // 1
console.log('calculation: ', calculation);
  // 2
console.log('values: ', values);
  // 3
console.log('inputExpenses: ', inputExpenses);
  // 4
console.log('expensesBtn: ', expensesBtn);
console.log('optionalExpensesBtn: ', optionalExpensesBtn);
console.log('countBudgetBtn: ', countBudgetBtn);
  // 5
console.log('chooseIncome: ', chooseIncome);
console.log('savings: ', savings);
console.log('chooseSum: ', chooseSum);
console.log('choosePercent: ', choosePercent);
console.log('yearValue: ', yearValue);
console.log('monthValue: ', monthValue);
console.log('dayValue: ', dayValue);