import React from 'react';

import {toCurrency} from '../utils.js';

export const BudgetModal = function ({setOpened, budget, action}) {
    const inputEl = React.useRef(null);
    React.useEffect(function () {
        inputEl.current.focus();
    }, []);
    const [value, setValue] = React.useState('');

    const onSubmit = function (e) {
        e.preventDefault();
        action(parseFloat(value));
        setOpened(false);
    };
    const onChange = function (e) {
        setValue(e.target.value);
    };

    return (
        <React.Fragment>
            <div className="modal-header">
                <h5 className="modal-title">{budget['name']}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                    <div className="form-group">
                        <label>Quanto hai speso?</label>
                        <input
                            ref={inputEl}
                            type="number"
                            step="0.01"
                            className="form-control"
                            value={value}
                            onChange={onChange}
                            required
                        />
                        <small className="form-text text-muted">Il tuo budget è {toCurrency(budget['amount'])}</small>
                    </div>
                    {/* <Bar amount={budget['amount']} weekly_amount={budget['weekly_amount']} /> */}
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-outline-primary">
                        Sure!
                    </button>
                </div>
            </form>
        </React.Fragment>
    );
};
