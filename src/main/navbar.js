import React from 'react';

import {toCurrency, Login} from '../utils.js';
import {confirm} from '../modal.js';

export const NavBar = function ({user, budgets, Methods}) {
    const rechargeAll = function () {
        confirm(`Sicuro di voler ricaricare tutti i budget?`, function () {
            budgets.forEach(function (budget, index) {
                Methods.recharge(budget);
            });
        });
    };

    const totalWeeklyBudget = budgets.reduce(function (acc, item) {
        return acc + item['weekly_budget'];
    }, 0);

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
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
    );
};
