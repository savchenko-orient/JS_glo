'use strict';
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let money,
    start = function () {
        money = prompt('Ваш месячный доход?');

        while (!isNumber(money)) {
            money = prompt('Ваш месячный доход?');
    }
};
start();


let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function () {
        let addExpenses = prompt('Перечислите всевозможные расходы через запятую?');
            appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');          
    },
    function() {
        let sum = 0;
        let question;
        for (let i = 0; i < 2; i++){
            question = prompt('Какие обязательные ежемесячные расходы у вас есть?');
            do {
                sum = prompt('Во сколько это обойдётся?', 500);
            }
            while (isNaN(sum));

            appData.expenses[question] = sum;
        }
        return +sum;
    },
    getExpensesMonth: function () {
        let sum = 0;
        
        for (let i = 0; i < 2; i++) {
            
            appData.expenses = prompt('Введите обязательную статью расходов');
            
            sum += +prompt('Во сколько это обойдётся?');
            if (!isNumber(sum)) {
                sum += +prompt('Во сколько это обойдётся?');
            }
        }
        return sum;
    },
    getAccumulatedMonth: function () {
        return money - appData.expensesMonth;
    },
    
    getTargetMonth: function () {
        let sum = appData.mission / appData.budgetMonth; //dudgetDay вместо accumulatedMonth
        if (sum < 0) {
            console.log('Цель не будет достигнута');
        } else {
            console.log('Цель будет достигнута за ' + Math.ceil(sum) + ' месяцев');
        }
        return sum;
    },
    getStatusIncome: function () {
        if (appData.budgetDay < 300) {
            return('Ты нищеброд!');
        } else if (appData.budgetDay <= 800) {
            return('У вас средний уровень дохода!');
        } else {
            return('У вас высокий уровень дохода!');
        }
    },
};    

appData.asking();
// let expensesAmount =
appData.getExpensesMonth();
// let accumulatedMonth =
appData.getAccumulatedMonth();

console.log('Расходы за месяц: ' + appData.expensesMonth); 
 



 
appData.getTargetMonth();

// let budgetDay = accumulatedMonth / 30;



console.log(appData.getStatusIncome());
