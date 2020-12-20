'use strict';
const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


let money;

const start = function () {
    while (!isNumber(money)) {
        money = prompt('Ваш месячный доход?', 50000);
    }

};

start();

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    expensesMonth: 0,
    deposit: false,
    parcentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    asking: function () {

        if (confirm('Есть ли у вас дополнительный заработок?')) {
            let itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксую');
                while (!isNaN(itemIncome)) {
                    itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксую');
                }
            let cashIncome; 
                while (!isNumber(cashIncome)) {
                    cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 1000);
                }
            appData.income[itemIncome] = +cashIncome;
        }

        let addExpenses = prompt('Перечислите всевозможные расходы через запятую?');
        appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++) {
        
            let expenses = prompt('Введите обязательную статью расходов', 'Новые лыжи');
            while (!isNaN(expenses)) {
                expenses = prompt('Введите обязательную статью расходов', 'Новые лыжи');
            }
            let cost;
            cost = +prompt('Во сколько это обойдётся?', 300);
            while (!isNumber(cost)) {
                cost = +prompt('Во сколько это обойдётся?', 300);
            }
            appData.expenses[expenses] = cost;

        }   
    },
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    
    getTargetMonth: function () {
        return  appData.mission / appData.budgetMonth; 
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
    getInfoDeposit: function () {
        if (appData.deposit) {
            appData.parcentDeposit = +prompt('Какой годовой процент?', 10);
            while (!isNumber(appData.parcentDeposit)) {
                appData.parcentDeposit = +prompt('Какой годовой процент?', 10);  
            }
            appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
            while (!isNumber(appData.moneyDeposit)) {
                appData.moneyDeposit = +prompt('Какая сумма заложена?', 10000);
            }
        }
    },
    calcSavedMoney: function () {
        return appData.budgetMonth * appData.period;
    }
};    

appData.asking();
appData.getInfoDeposit();
appData.getExpensesMonth();
appData.getBudget();

console.log('Расходы за месяц: ' + appData.expensesMonth); 

if (appData.getTargetMonth() > 0) {
    console.log('Цель не будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяцев ');
} else {
    console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());

const first = appData.addExpenses.map(function (val) {
    const str = val.trim();
    return str[0].toUpperCase() + str.slice(1);
});

console.log(first.join(', '));

for (let key in appData){
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}
