import React from 'react';

import {updateBudget} from './model';

const reducer = function (budgets, action) {
    if (action['type'] === 'INIT') return [...action['value']];
    if (action['type'] === 'SPEND') {
        const index = budgets.findIndex(function (budget) {
            return budget['id'] === action['id'];
        });
        const value = action['value'];
        const budget = budgets[index];
        const newBudgets = [...budgets];
        newBudgets[index] = {
            ...budget,
            amount: budget['amount'] - value,
            weekly_amount: budget['weekly_amount'] + value,
        };
        return newBudgets;
    }
    if (action['type'] === 'RECHARGE') {
        const index = budgets.findIndex(function (budget) {
            return budget['id'] === action['id'];
        });
        const budget = budgets[index];
        const newBudgets = [...budgets];
        newBudgets[index] = {
            ...budget,
            amount: budget['amount'] + budget['weekly_budget'],
            weekly_amount: 0,
        };
        return newBudgets;
    }
    throw new Error();
};

const getMethods = function (dispatch) {
    return {
        init: function (budgets) {
            dispatch({type: 'INIT', value: budgets});
        },
        recharge: function (budget) {
            dispatch({type: 'RECHARGE', id: budget['id']});
            updateBudget(budget['id'], budget['amount'] + budget['weekly_budget'], 0);
        },
        spend: function (budget, value) {
            dispatch({type: 'SPEND', value: value, id: budget['id']});
            updateBudget(budget['id'], budget['amount'] - value, budget['weekly_amount'] + value);
        },
    };
};

export const useMethods = function () {
    const [budgets, dispatch] = React.useReducer(reducer, null);
    const Methods = getMethods(dispatch);
    return [budgets, Methods];
};
