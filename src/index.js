import React from 'react';
import ReactDOM from 'react-dom';

import {toCurrency, useUser, Login} from './utils.js';
import {getBudgets} from './model';
import {confirm, open} from './modal.js';
import {BudgetCard} from './budget_card.js';
// import {OptionsButton} from './options_button.js';
import {Bar} from './progress.js';
import {useMethods} from './reducer.js';
import {Loading} from './observers.js';

const ErrorPage = function ({user, error}) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand">My Budgets</span>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>
                        <form className="d-flex">
                            <Login user={user} />
                        </form>
                    </div>
                </div>
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
};

const App = function (props) {
    const [budgets, Methods] = useMethods();
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
    const user = useUser();

    // Implementare anche una pagina in cui si chiede di autenticarsi, se non lo si è già.
    // Regola:
    // allow read, write: if request.auth != null && request.time < timestamp.date(2021, 2, 9);

    if (error !== null) return <ErrorPage user={user} error={error} />;

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
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand">
                        My Budgets <sub>{toCurrency(totalWeeklyBudget)}</sub>
                    </span>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#"
                                    onClick={function (e) {
                                        e.preventDefault();
                                        rechargeAll();
                                    }}
                                >
                                    Recharge all
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" aria-disabled="true">
                                    New budget
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Login user={user} />
                        </form>
                    </div>
                </div>
            </nav>
            <div className="container" style={{paddingTop: '4em'}}>
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
