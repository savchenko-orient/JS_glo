'use strict';
let money = 4500; //Доход за месяц
let income = "500"; //Дополнительный доход
let addExpenses = "Taxi, Car, Girlfriend"; //Расходы
let deposit = true;
let mission = 15000; //Какую сумму хочу накопить
let period = 5; //сколько месяцев

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев.");
console.log('Цель заработать ' + mission + ' гривен.');

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(','));

let budgetDay;
budgetDay = money / 30;
console.log(budgetDay);




