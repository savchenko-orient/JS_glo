'use strict';
const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

const start = function () {
    while (!isNumber(money)) {
        money = prompt('Ваш месячный доход?');
    }

};

start();

const income = 'Фриланс',
    addExpenses = prompt('Перечислите всевозможные расходы через запятую?'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 150000,
    period = 5;

const showTypeOf = function (item) {
    console.log(typeof item);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses = [];
const getExpensesMonth = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        
        expenses[i] = prompt('Введите обязательную статью расходов');
        sum += +prompt('Во сколько это обойдётся?');
        while (!isNumber(sum)) {
            sum += prompt('Во сколько это обойдётся?');
        }
    }
    return sum;
};

const expensesAmount = getExpensesMonth();


const getAccumulatedMonth = function () {
    return money - expensesAmount;
};

const accumulatedMonth = getAccumulatedMonth();

const getTargetMonth = function () {
    let sum = mission / accumulatedMonth;
    if (sum < 0) {
        console.log('Цель не будет достигнута');
    } else {
        console.log('Цель будет достигнута за ' + Math.ceil(sum) + ' месяцев');
    }
    return sum;
};
getTargetMonth();

const budgetDay = accumulatedMonth / 30;

const getStatusIncome = function () {
    if (budgetDay <= 300) {
        console.log('К сожалению у вас уровень дохода ниже среднего!');
    } else if (budgetDay <= 800) {
        console.log('У вас средний уровень дохода!');
    } else if(budgetDay >= 1200) {
        console.log('У вас высокий уровень дохода!');
    }
};

getStatusIncome();
console.log(addExpenses.toLocaleLowerCase().split(','));
console.log('Расходы за месяц: ' + expensesAmount); 

