'use strict';
const money = prompt('Ваш месячный доход?'),
    income = "500",
    addExpenses = prompt('Перечислите всевозможные доходы за рассчитываемый переод через запятую',
    'Квартплата, проездной, машина'),
    deposit = confirm('Есть ли у вас депозит в банке?', 'Да/Нет');

let mission = 150000, 
    period = 5,
    budgetDay = money / 30;

const
    expenses1 = prompt('Введите обязательную статью расходов', 'Путешествия'),
    amount1 = prompt('Во сколько это обойдётся?', '150'),
    expenses2 = prompt('Введите обязательную статью расходов', 'Еда'),
    amount2 = prompt('Во сколько это обойдётся?', '750');

const budgetMonth = (parseFloat(money)) - (parseFloat(amount1)) - (parseFloat(amount2));

console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев.");
console.log('Цель заработать ' + mission + ' гривен.');
console.log(addExpenses.toLowerCase() .split(','));
console.log(budgetDay);
console.log('Бюджет на месяц: ' + budgetMonth);

let numberOfMonth = (parseFloat(mission)) / (parseFloat(budgetMonth));
Math.ceil(numberOfMonth);
console.log('Цель будет достигнута за :' + (Math.ceil(numberOfMonth)) + ' месяцев.');

budgetDay = budgetMonth / 30;
budgetDay = Math.floor(budgetDay);
console.log('Бюджет на день:' + budgetDay);

if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода!');
} else {
    if (budgetDay >= 600 && budgetDay < 1200) {
        console.log('У вас средний уровень дохода!');
    } else {
        if (budgetDay <= 600 && budgetDay > 0) {
            console.log('К сожалению у вас уровень дохода ниже среднего!');
        } else {
            if (budgetDay < 0) {
                console.log('Что то пошло не так!');
            }
        }
    }
}
    
