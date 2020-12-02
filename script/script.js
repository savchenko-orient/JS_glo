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


console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев.");
console.log('Цель заработать ' + mission + ' гривен.');

console.log(addExpenses.toLowerCase() .split(','));

console.log(budgetDay);
//Третье задание
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

let budgetMonth;
budgetMonth = (parseFloat(money)) - (parseFloat(amount1)) - (parseFloat(amount2));
console.log('Бюджет на месяц: ' + budgetMonth);

let numberOfMonth;
numberOfMonth = (parseFloat(mission)) / (parseFloat(budgetMonth));
Math.ceil(numberOfMonth);
console.log('Цель будет достигнута за :' + (Math.ceil(numberOfMonth)) + ' месяцев.');

budgetDay = budgetMonth / 30;
budgetDay = Math.floor(budgetDay);
console.log('Бюджет на день:' + budgetDay);

if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода!');
} else {
    if (budgetDay > 600 && budgetDay < 1200) {
        console.log('У вас средний уровень дохода!');
    } else {
        if (budgetDay < 600 && budgetDay > 0) {
            console.log('К сожалению у вас уровень дохода ниже среднего!');
        } else {
            if (budgetDay < 0) {
                console.log('Что то пошло не так!');
            }
        }
    }
}
    
