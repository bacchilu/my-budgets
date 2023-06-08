import useSWR, {SWRResponse} from 'swr';

import {createBudget, getBudgets, updateBudget} from './model';
import {AppUser} from './model/auth';
import {Budget} from './model/firestore';

interface MethodsType {
    spend: (budget: Budget, value: number) => Promise<void>;
    recharge: (budget: Budget) => Promise<void>;
    create: ({name, description, budget}: {name: string; description: string; budget: number}) => Promise<void>;
}

export const useBudgets = (user: AppUser) => {
    const res = useSWR(['budgets', user.uid], () => getBudgets(user));
    const {data: budgets, mutate} = res;

    const getUpdatedBudgets = function (updatedBudget: Budget) {
        return budgets!.map((b) => (updatedBudget.id === b.id ? updatedBudget : b));
    };

    const Methods = {
        spend: async function (budget: Budget, value: number) {
            const ub = async function () {
                const updatedBudget = await updateBudget(
                    budget.id,
                    budget.amount - value,
                    budget.weekly_amount + value
                );
                return getUpdatedBudgets(updatedBudget);
            };
            mutate(ub, {
                optimisticData: getUpdatedBudgets({
                    ...budget,
                    amount: budget.amount - value,
                    weekly_amount: budget.weekly_amount + value,
                }),
                revalidate: false,
                rollbackOnError: true,
            });
        },
        recharge: async (budget: Budget) => {
            const ub = async function () {
                const updatedBudget = await updateBudget(budget.id, budget.amount + budget.weekly_budget, 0);
                return getUpdatedBudgets(updatedBudget);
            };
            mutate(ub, {
                optimisticData: getUpdatedBudgets({
                    ...budget,
                    amount: budget.amount + budget.weekly_budget,
                    weekly_amount: 0,
                }),
                revalidate: false,
                rollbackOnError: true,
            });
            // mutate(
            //     (arg) =>
            //         arg!.map((b) =>
            //             budget.id === b.id
            //                 ? {...budget, amount: budget.amount + budget.weekly_budget, weekly_amount: 0}
            //                 : b
            //         ),
            //     false
            // );
            // await updateBudget(budget.id, budget.amount + budget.weekly_budget, 0);
            // mutate();
        },
        create: async ({name, description, budget}: {name: string; description: string; budget: number}) => {
            mutate(
                [
                    ...budgets!,
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
    } as MethodsType;

    return [res, Methods] as [SWRResponse<Budget[], any, any>, MethodsType];
};
