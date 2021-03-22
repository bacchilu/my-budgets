import React from 'react';

import {Parent} from './libs/modal.js';
import {toCurrency} from './utils.js';
import {Bar} from './progress.js';

const Budget = function ({budget, ...props}) {
    const [value, setValue] = React.useState('');
    const onChange = function (e) {
        setValue(e.target.value);
    };

    const inputEl = React.useRef(null);
    React.useEffect(function () {
        setTimeout(function () {
            inputEl.current.focus();
        }, 500);
    }, []);

    const onSubmit = function (e) {
        e.preventDefault();
        props.hide();
        props.action(parseFloat(value));
    };

    return (
        <div className="modal-content">
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
                    {/*<Progress.BarTot amount={budget['amount']} weekly_budget={budget['weekly_budget']} weekly_amount={budget['weekly_amount']} />*/}
                    <Bar amount={budget['amount']} weekly_amount={budget['weekly_amount']} />
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-outline-primary">
                        Sure!
                    </button>
                </div>
            </form>
        </div>
    );
};

export const open = function (budget, action) {
    Parent.render(Budget, {budget, action});
};

export const confirm = function (message, cb) {
    const action = function () {
        cb();
    };
    Parent.render(Confirm, {message, action});
};
