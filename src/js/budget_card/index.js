import React from 'react';

import {Modal} from '../libs/modal.js';
import {toCurrency} from '../utils';
import {BudgetModal} from './modal.js';

export const BudgetCard = function ({budget, Methods}) {
    const [modalOpened, setModalOpened] = React.useState(false);

    const onClick = function () {
        setModalOpened(true);
    };

    const onDetails = function (e) {
        e.preventDefault();
    };

    const onMove = function (e) {
        e.preventDefault();
    };

    return (
        <div key={budget.id} className="col-sm-6">
            <Modal opened={modalOpened} setOpened={setModalOpened}>
                <BudgetModal setOpened={setModalOpened} budget={budget} spend={Methods.spend} />
            </Modal>
            <div className="card border-secondary m-2">
                <div className="card-header">
                    <span>{budget.name}</span>
                    <span className="float-end">
                        <form className="row row-cols-auto align-items-center">
                            <small>{toCurrency(budget.weekly_budget)}</small>
                            <div className="dropdown">
                                <button
                                    className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-gear"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <button className="dropdown-item" onClick={onDetails}>
                                        Details
                                    </button>
                                    <button className="dropdown-item" onClick={onMove}>
                                        Move
                                    </button>
                                </div>
                            </div>
                        </form>
                    </span>
                </div>
                <div className="card-body">
                    <p className="mb-0">
                        <span className="card-subtitle mb-2 text-muted">{toCurrency(budget.weekly_amount)}</span>
                    </p>
                    <p>
                        <strong className="fs-5">
                            <em>{toCurrency(budget.amount)}</em>
                        </strong>
                        <button className="btn btn-outline-primary float-end" onClick={onClick}>
                            <i className="bi bi-currency-euro"></i> Add Cost
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};
