module.exports = function (budgets, action) {
    if (action['type'] === 'INIT')
        return [...action['value']];
    if (action['type'] === 'SPEND') {
        const index = budgets.findIndex(function (budget) {
            return budget['id'] === action['id'];
        });
        const value = action['value'];
        const budget = budgets[index];
        const newBudgets = [...budgets];
        newBudgets[index] = {...budget, amount: budget['amount'] - value, weekly_amount: budget['weekly_amount'] + value};
        return newBudgets;
    }
    if (action['type'] === 'RECHARGE') {
        const index = budgets.findIndex(function (budget) {
            return budget['id'] === action['id'];
        });
        const budget = budgets[index];
        const newBudgets = [...budgets];
        newBudgets[index] = {...budget, amount: budget['amount'] + budget['weekly_budget'], weekly_amount: 0};
        return newBudgets;
    }
    throw new Error();
};
