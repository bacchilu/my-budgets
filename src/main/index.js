import React from 'react';

import {Spinner, EmptyNavbar} from '../utils.js';
import {getBudgets} from '../model';
import {BudgetCard} from '../budget_card.js';
import {Bar} from '../progress.js';
import {useMethods} from '../reducer.js';
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
    const [budgets, Methods] = useMethods();
    const [error, setError] = React.useState(null);
    React.useEffect(async function () {
        try {
            const budgets = await getBudgets(user);
            Methods.init(budgets);
        } catch (e) {
            setError(e);
        }
    }, []);

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
        };
        const recharge = function () {
            // confirm(`Sicuro di voler ricaricare ${toCurrency(budget['weekly_budget'])}?`, function () {
            //     Methods.recharge(budget);
            // });
        };

        return <BudgetCard key={budget['id']} budget={budget} spend={spend} recharge={recharge} />;
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
