import React from 'react';

import {Spinner, EmptyNavbar} from '../utils.js';
import {useBudgets} from '../budgets.js';
import {BudgetCard} from '../budget_card';
// import {Bar} from '../progress.js';
import {GlobalSpinner} from '../global_spinner.js';
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
    const {data, error, Methods} = useBudgets(user);

    if (error !== undefined) return <ErrorPage user={user} error={error} />;
    if (data === undefined) return <Spinner />;

    // const total = data.reduce(function (acc, item) {
    //     return acc + item['amount'];
    // }, 0);
    // const totalWeeklyAmount = data.reduce(function (acc, item) {
    //     return acc + item['weekly_amount'];
    // }, 0);

    const items = data.map(function (budget) {
        const spend = function (value) {
            Methods.spend(budget, value);
        };

        return <BudgetCard key={budget['id']} budget={budget} spend={spend} />;
    });

    return (
        <React.Fragment>
            <NavBar user={user} budgets={data} Methods={Methods} />
            <div className="container" style={{paddingTop: '1em'}}>
                {/* <div style={{marginTop: '4px'}}>
                    <Bar amount={total} weekly_amount={totalWeeklyAmount} />
                </div> */}
                <div className="row">{items}</div>
            </div>
            <GlobalSpinner user={user} />
        </React.Fragment>
    );
};
