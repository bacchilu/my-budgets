import React from 'react';

import {toCurrency} from './utils.js';
import {open} from './modal.js';

export const BudgetCard = function ({budget, spend}) {
    const onClick = function () {
        open(budget, spend);
    };

    return (
        <div key={budget['id']} className="col-sm-6">
            <div className="card border-secondary" style={{margin: '10px'}}>
                <div className="card-header">
                    {budget['name']} <sub>{toCurrency(budget['weekly_budget'])}</sub>
                    <span className="float-end">
                        <form className="row row-cols-auto align-items-center">
                            <strong>
                                <em>{toCurrency(budget['amount'])}</em>
                            </strong>
                            <div className="dropdown">
                                <button
                                    className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    ⚙
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <button
                                        className="dropdown-item"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        TODO
                                    </button>
                                    <button
                                        className="dropdown-item"
                                        onClick={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        TODO
                                    </button>
                                </div>
                            </div>
                        </form>
                    </span>
                </div>
                <div className="card-body">
                    <p style={{marginTop: '4px'}}>
                        <span className="card-subtitle mb-2 text-muted">{toCurrency(budget['weekly_amount'])}</span>
                        <button className="btn btn-outline-primary float-end" onClick={onClick}>
                            Add cost
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};
