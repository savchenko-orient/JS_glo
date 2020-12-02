'use strict';
let money = 4500, 
     income = "500", 
     addExpenses = "Taxi, Car, Girlfriend", 
     deposit = true,
    mission = 150000, 
    period = 5,
    budgetDay = money / 30;
// Втотое задание
console.log(typeof money, income, deposit);

console.log(addExpenses.toLowerCase() .split(','));


// console.log(budgetDay);

money = prompt('Ваш месячный доход?');
addExpenses = prompt('Перечислите всевозможные доходы за рассчитываемый переод через запятую',
    'Квартплата, проездной, машина, девушка');
deposit = prompt('Есть ли у вас депозит в банке?', 'Да/Нет');

if (deposit === 'Да') {
    deposit = true;
} else {
    deposit = false;
}

let expenses1, amount1, expenses2, amount2;
expenses1 = prompt('Введите обязательную статью расходов', 'Путешествия');
amount1 = prompt('Во сколько это обойдётся?', '150');
expenses2 = prompt('Введите обязательную статью расходов', 'Еда');
amount2 = prompt('Во сколько это обойдётся?', '750');

let getStatusIncome = function () {
    if (budgetDay < 300) {
        console.log('К сожалению у вас уровень дохода ниже среднего!');
    } else if (budgetDay <= 800) {
        console.log('У вас средний уровень дохода!');
    } else if(budgetDay >= 1200) {
        console.log('У вас высокий уровень дохода!');
    }
};

function getExpensesMonth() {
    return (parseFloat(amount1)) + (parseFloat(amount2));
} 
console.log(getExpensesMonth());

function getAccumulatedMonth() {
    return money - (parseFloat(income)) - (parseFloat(amount1)) - (parseFloat(amount2));
}

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
    return Math.ceil(mission / accumulatedMonth);
}
console.log(getTargetMonth());
budgetDay = accumulatedMonth / 30;
console.log(Math.ceil(budgetDay));
console.log(getStatusIncome);