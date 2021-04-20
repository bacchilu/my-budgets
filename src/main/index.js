import React from 'react';

import {Spinner, EmptyNavbar} from '../utils.js';
import {useMethods} from '../reducer.js';
import {useBudgets} from '../model';
import {BudgetCard} from '../budget_card';
import {Bar} from '../progress.js';
import {Loading} from '../observers.js';
import {NavBar} from './navbar.js';

const ErrorPage = function ({user, error}) {
    return (
        <React.Fragment>
            <EmptyNavbar user={user} />
            <div className="container">
                <div style={{marginTop: '10px'}} className="alert alert-danger" role="alert">
                    <p>Errore nel caricamento dei budget!</p>
                    <hr />
                    <p>
                        <em>{error.message}</em>
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

export const MainPage = function ({user}) {
    const {data: budgets, error, Methods} = useMethods(user);

    // const {data: budgets2, error: budgets_error, Methods: Methods2} = useBudgets(user);
    // if (budgets_error !== undefined) return <ErrorPage user={user} error={budgets_error} />;
    // if (budgets2 === undefined) return <Spinner />;
    // console.log(budgets2);

    if (error !== null) return <ErrorPage user={user} error={error} />;

    if (budgets === null) return <Spinner />;

    const total = budgets.reduce(function (acc, item) {
        return acc + item['amount'];
    }, 0);
    const totalWeeklyAmount = budgets.reduce(function (acc, item) {
        return acc + item['weekly_amount'];
    }, 0);

    const items = budgets.map(function (budget) {
        const spend = function (value) {
            Methods.spend(budget, value);
            // Methods2.spend(budget, value);
        };

        return <BudgetCard key={budget['id']} budget={budget} spend={spend} />;
    });

    return (
        <React.Fragment>
            <NavBar user={user} budgets={budgets} Methods={Methods} />
            <div className="container" style={{paddingTop: '1em'}}>
                <div style={{marginTop: '4px'}}>
                    <Bar amount={total} weekly_amount={totalWeeklyAmount} />
                </div>
                <div className="row">{items}</div>
            </div>
            <Loading />
        </React.Fragment>
    );
};
