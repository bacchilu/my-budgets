import React from 'react';

import {BudgetCard} from '../budget_card';
import {useBudgets} from '../budgets';
import {EmptyNavbar, Spinner} from '../utils';
// import {Bar} from '../progress';
import {GlobalSpinner} from '../global_spinner';
import {NavBar} from './navbar';

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
    const {data: budgets, error, Methods} = useBudgets(user);

    if (error !== undefined) return <ErrorPage user={user} error={error} />;
    if (budgets === undefined) return <Spinner />;

    // const total = data.reduce(function (acc, item) {
    //     return acc + item['amount'];
    // }, 0);
    // const totalWeeklyAmount = data.reduce(function (acc, item) {
    //     return acc + item['weekly_amount'];
    // }, 0);

    const items = budgets.map((budget) => <BudgetCard key={budget.id} budget={budget} Methods={Methods} />);

    return (
        <React.Fragment>
            <NavBar user={user} budgets={budgets} Methods={Methods} />
            <div className="container">
                {/* <div style={{marginTop: '4px'}}>
                    <Bar amount={total} weekly_amount={totalWeeklyAmount} />
                </div> */}
                <div className="row">{items}</div>
            </div>
            <GlobalSpinner user={user} />
        </React.Fragment>
    );
};
