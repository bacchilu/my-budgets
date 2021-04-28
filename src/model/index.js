import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyBvHCpKNrfKfc2AZZLP8D0K1AGlUFcX1aE',
    authDomain: 'test-budget-38b21.firebaseapp.com',
    databaseURL: 'https://test-budget-38b21.firebaseio.com',
    projectId: 'test-budget-38b21',
    storageBucket: 'test-budget-38b21.appspot.com',
    messagingSenderId: '1067130269246',
    appId: '1:1067130269246:web:504d76c1afc05bcbf12b6f',
};
firebase.initializeApp(firebaseConfig);

import {Auth} from './auth.js';

const auth = Auth(firebase);
export const signIn = auth.signIn;
export const signOut = auth.signOut;
export const onAuthStateChanged = auth.onAuthStateChanged;

export {RunningManager} from './firestore.js';
import {FireStore} from './firestore.js';

const fs = FireStore(firebase);
export const getBudgets = fs.getBudgets;
export const updateBudget = fs.updateBudget;

import useSWR from 'swr';

export const useBudgets = function (user) {
    const {data, error, mutate} = useSWR(['budgets', user.uid], function (key, uid) {
        console.assert(key === 'budgets');
        return fs.getBudgets({uid});
    });
    console.log(data);

    return {
        data,
        error,
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
        },
    };
};
