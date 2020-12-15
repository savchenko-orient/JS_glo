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
    // function() {
    //     let sum = 0;
    //     let question;
    //     for (let i = 0; i < 2; i++){
    //         question = prompt('Какие обязательные ежемесячные расходы у вас есть?');
    //         do {
    //             sum = prompt('Во сколько это обойдётся?', 500);
    //         }
    //         while (isNaN(sum));

    //         appData.expenses[question] = sum;
    //     }
    //     return +sum;
    // },
    getExpensesMonth: function () {
        let sum = 0,
            expenses = [],
            cost = 0;


        for (let i = 0; i < 2; i++) {
        
        expenses[i] = prompt('Введите обязательную статью расходов');
        cost = +prompt('Во сколько это обойдётся?');
            while (!isNumber(cost)) {
            cost = +prompt('Во сколько это обойдётся?');
            }
            appData.expenses[expenses] = cost;
        }
        
    
        for (let item in appData.expenses) {
            appData.expensesMonth += appData.expenses[item];
        }
        return appData.expensesMonth;
        
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
        return appData.budgetMonth, appData.budgetDay;
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
    if (appData.budgetDay <= 300) {
        console.log('К сожалению у вас уровень дохода ниже среднего!');
    } else if (appData.budgetDay <= 800) {
        console.log('У вас средний уровень дохода!');
    } else if(appData.budgetDay >= 1200) {
        console.log('У вас высокий уровень дохода!');
        }
    },
};    

appData.asking();
// let expensesAmount =
appData.getExpensesMonth();
// let accumulatedMonth =
appData.getBudget();

console.log('Расходы за месяц: ' + appData.expensesMonth); 

appData.getTargetMonth();
// let budgetDay = accumulatedMonth / 30;
console.log(appData.getStatusIncome());

for (let key in appData){
    console.log('Наша программа включает в себя данные: ' + key + appData[key]);
}
