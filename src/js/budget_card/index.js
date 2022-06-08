import React from 'react';

import {toCurrency} from '../utils.js';
import {Modal} from '../libs/modal.js';
import {BudgetModal} from './modal.js';

export const BudgetCard = function ({budget, spend}) {
    const [modalOpened, setModalOpened] = React.useState(false);

    const onClick = function () {
        setModalOpened(true);
    };

    return (
        <div key={budget['id']} className="col-sm-6">
            <Modal opened={modalOpened} setOpened={setModalOpened}>
                <BudgetModal setOpened={setModalOpened} budget={budget} action={spend} />
            </Modal>
            <div className="card border-secondary" style={{margin: '10px'}}>
                <div className="card-header">
                    {budget['name']}
                    <span className="float-end">
                        <form className="row row-cols-auto align-items-center">
                            <small>{toCurrency(budget['weekly_budget'])}</small>
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
                                    <button
                                        className="dropdown-item"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Details
                                    </button>
                                    <button
                                        className="dropdown-item"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        Move
                                    </button>
                                </div>
                            </div>
                        </form>
                    </span>
                </div>
                <div className="card-body">
                    <p style={{marginBottom: '0rem'}}>
                        <span className="card-subtitle mb-2 text-muted">{toCurrency(budget['weekly_amount'])}</span>
                    </p>
                    <p>
                        <strong>
                            <em>{toCurrency(budget['amount'])}</em>
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
