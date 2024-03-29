import React from 'react';

import {Login, toCurrency} from '../utils';
import {NewBudgetModal, RechargeAllModal} from './modals';

export const NavBar = function ({user, budgets, Methods}) {
    const [rechargeAllModalOpened, setRechargeAllModalOpened] = React.useState(false);
    const [newBudgetModalOpened, setNewBudgetModalOpened] = React.useState(false);

    const rechargeAll = function () {
        budgets.forEach(function (budget) {
            Methods.recharge(budget);
        });
    };

    const newBudget = function (newBudget) {
        Methods.create(newBudget);
    };

    const openModalRechargeAll = function (e) {
        e.preventDefault();
        setRechargeAllModalOpened(true);
    };

    const openModalNewBudget = function (e) {
        e.preventDefault();
        setNewBudgetModalOpened(true);
    };

    const totalWeeklyBudget = budgets.reduce(function (acc, item) {
        return acc + item.weekly_budget;
    }, 0);
    const total = budgets.reduce(function (acc, item) {
        return acc + item.amount;
    }, 0);

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <RechargeAllModal
                opened={rechargeAllModalOpened}
                setOpened={setRechargeAllModalOpened}
                action={rechargeAll}
            />
            <NewBudgetModal opened={newBudgetModalOpened} setOpened={setNewBudgetModalOpened} action={newBudget} />
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
                            <a className="nav-link" href="#" onClick={openModalRechargeAll}>
                                Recharge all
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={openModalNewBudget}>
                                New budget
                            </a>
                        </li>
                    </ul>
                    <span className="navbar-brand fst-italic">{toCurrency(total)}</span>
                    <form className="d-flex">
                        <Login user={user} />
                    </form>
                </div>
            </div>
        </nav>
    );
};
