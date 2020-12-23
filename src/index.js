import React from 'react';
import ReactDOM from 'react-dom';

import {toCurrency} from './utils.js';
import {getBudgets} from './model.js';
import {confirm, open} from './modal.js';
import {BudgetCard} from './budget_card.js';
import {OptionsButton} from './options_button.js';
import {Bar} from './progress.js';
import {reducer, getMethods} from './reducer.js';
import {Loading} from './observers.js';

const App = function (props) {
    const [budgets, dispatch] = React.useReducer(reducer, null);
    const Methods = getMethods(dispatch);

    const [error, setError] = React.useState(null);
    React.useEffect(function () {
        getBudgets()
            .then(function (budgets) {
                Methods.init(budgets);
            })
            .catch(function (e) {
                setError(e);
            });
    }, []);

    if (error !== null)
        return (
            <React.Fragment>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">My Budgets</span>
                </nav>
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

    if (budgets === null)
        return (
            <div style={{marginTop: '50px'}} className="d-flex justify-content-center">
                <div style={{width: '3rem', height: '3rem'}} className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );

    const rechargeAll = function () {
        confirm(`Sicuro di voler ricaricare tutti i budget?`, function () {
            budgets.forEach(function (budget, index) {
                Methods.recharge(budget);
            });
        });
    };

    const total = budgets.reduce(function (acc, item) {
        return acc + item['amount'];
    }, 0);
    const totalWeeklyBudget = budgets.reduce(function (acc, item) {
        return acc + item['weekly_budget'];
    }, 0);
    const totalWeeklyAmount = budgets.reduce(function (acc, item) {
        return acc + item['weekly_amount'];
    }, 0);

    const items = budgets.map(function (budget) {
        const spend = function () {
            open(budget, function (value) {
                Methods.spend(budget, value);
            });
        };
        const recharge = function () {
            confirm(`Sicuro di voler ricaricare ${toCurrency(budget['weekly_budget'])}?`, function () {
                Methods.recharge(budget);
            });
        };
        return <BudgetCard key={budget['id']} budget={budget} spend={spend} recharge={recharge} />;
    });

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand">
                        My Budgets <sub>{toCurrency(totalWeeklyBudget)}</sub>
                    </span>
                    <form className="d-flex">
                        <span className="navbar-text" style={{marginRight: '20px'}}>
                            <strong>
                                <em>{toCurrency(total)}</em>
                            </strong>
                        </span>
                        <OptionsButton rechargeAll={rechargeAll} />
                    </form>
                </div>
            </nav>
            <div className="container">
                <div style={{marginTop: '4px'}}>
                    <Bar amount={total} weekly_amount={totalWeeklyAmount} />
                </div>
                <div className="row">{items}</div>
            </div>
            <Loading />
        </React.Fragment>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
