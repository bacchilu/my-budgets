import useSWR from 'swr';

import {createBudget, getBudgets, updateBudget} from './model';
import {AppUser} from './model/auth';
import {Budget} from './model/firestore';

export const useBudgets = (user: AppUser) => {
    const res = useSWR(['budgets', user.uid], () => getBudgets(user));
    const {data, mutate} = res;

    return {
        ...res,
        Methods: {
            spend: async (budget: Budget, value: number) => {
                mutate(
                    data!.map((b) =>
                        budget.id === b.id
                            ? {...b, amount: b.amount - value, weekly_amount: b.weekly_amount + value}
                            : b
                    ),
                    false
                );
                await updateBudget(budget.id, budget.amount - value, budget.weekly_amount + value);
                mutate();
            },
            recharge: async (budget: Budget) => {
                mutate(
                    (arg) =>
                        arg!.map((b) =>
                            budget.id === b.id
                                ? {...budget, amount: budget.amount + budget.weekly_budget, weekly_amount: 0}
                                : b
                        ),
                    false
                );
                await updateBudget(budget.id, budget.amount + budget.weekly_budget, 0);
                mutate();
            },
            create: async ({name, description, budget}: {name: string; description: string; budget: number}) => {
                mutate(
                    [
                        ...data!,
                        {
                            id: 'temporary_id',
                            amount: 0,
                            createdAt: new Date(),
                            name: `${name} (${description})`,
                            uid: user.uid,
                            weekly_amount: 0,
                            weekly_budget: budget,
                        },
                    ],
                    false
                );
                await createBudget(user, name, budget);
                mutate();
            },
        },
    };
};
