'use strict';
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    income = 'Фриланс',
    addExpenses = prompt('Перечислите всевозможные расходы через запятую?'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 150000,
    period = 5;

let start = function () {
     money = prompt('Ваш месячный доход?');

    while (!isNumber(money)) {
        money = prompt('Ваш месячный доход?');
    }
};


start();

let showTypeOf = function (item) {
    console.log(typeof item);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses = [];

console.log(addExpenses.toLocaleLowerCase().split(','));

let getExpensesMonth = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        
        expenses[i] = prompt('Введите обязательную статью расходов');
        
        sum += +prompt('Во сколько это обойдётся?');
        if (!isNumber(sum)) {
            sum += +prompt('Во сколько это обойдётся?');
        }
    }
    console.log(sum);
    return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount); 

let getAccumulatedMonth = function () {
    return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
    let sum = mission / accumulatedMonth;
    if (sum < 0) {
        console.log('Цель не будет достигнута');
    } else {
        console.log('Цель будет достигнута за ' + Math.ceil(sum) + ' месяцев');
    }
    return sum;
}
getTargetMonth();

let budgetDay = accumulatedMonth / 30;

let getStatusIncome = function () {
    if (budgetDay < 300) {
        return('Ты нищеброд!');
    } else if (budgetDay <= 800) {
        return('У вас средний уровень дохода!');
    } else {
        return('У вас высокий уровень дохода!');
    }
};

console.log(getStatusIncome());
