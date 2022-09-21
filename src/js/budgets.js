import useSWR from 'swr';

import {createBudget, getBudgets, updateBudget} from './model';

export const useBudgets = function (user) {
    const {data, error, isValidating, mutate} = useSWR(['budgets', user.uid], function (key, uid) {
        console.assert(key === 'budgets');
        return getBudgets({uid});
    });

    return {
        data,
        error,
        isValidating,
        Methods: {
            spend: async function (budget, value) {
                mutate(
                    data.map(function (b) {
                        return budget.id === b.id
                            ? {
                                  ...budget,
                                  amount: budget['amount'] - value,
                                  weekly_amount: budget['weekly_amount'] + value,
                              }
                            : b;
                    }),
                    false
                );
                await updateBudget(budget['id'], budget['amount'] - value, budget['weekly_amount'] + value);
                mutate();
            },
            recharge: async function (budget) {
                mutate(function (data) {
                    return data.map(function (b) {
                        return budget.id === b.id
                            ? {...budget, amount: budget['amount'] + budget['weekly_budget'], weekly_amount: 0}
                            : b;
                    });
                }, false);
                await updateBudget(budget['id'], budget['amount'] + budget['weekly_budget'], 0);
                mutate();
            },
            create: async function (budget) {
                mutate(
                    [
                        ...data,
                        {
                            amount: 0,
                            id: 'temporary_id',
                            name: `${budget.name} (${budget.description})`,
                            weekly_amount: 0,
                            weekly_budget: budget.budget,
                        },
                    ],
                    false
                );
                await createBudget(user, `${budget.name} (${budget.description})`, budget.budget);
                mutate();
            },
        },
    };
};
