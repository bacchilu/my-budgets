import React from 'react';

import {toCurrency, Login} from '../utils.js';
import {Modal} from '../libs/modal.js';

const Confirm = function ({opened, setOpened, action}) {
    const onClick = function () {
        action();
        setOpened(false);
    };

    return (
        <Modal opened={opened} setOpened={setOpened}>
            <div className="modal-header">
                <h5 className="modal-title">Confirm</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">Sicuro di voler ricaricare tutti i budget?</div>
            <div className="modal-footer" style={{display: 'block'}}>
                <button className="btn btn-outline-danger float-end" onClick={onClick}>
                    Ok
                </button>
            </div>
        </Modal>
    );
};

export const NavBar = function ({user, budgets, Methods}) {
    const [modalOpened, setModalOpened] = React.useState(false);

    const rechargeAll = function () {
        budgets.forEach(function (budget) {
            Methods.recharge(budget);
        });
    };

    const confirmRechargeAll = function () {
        setModalOpened(true);
    };

    const totalWeeklyBudget = budgets.reduce(function (acc, item) {
        return acc + item['weekly_budget'];
    }, 0);

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Confirm opened={modalOpened} setOpened={setModalOpened} action={rechargeAll} />
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
                                    confirmRechargeAll();
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
