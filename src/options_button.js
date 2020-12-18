import React from 'react';

export const OptionsButton = function (props) {
    const onClick = function (e) {
        e.preventDefault();
    };

    const rechargeAll = function (e) {
        e.preventDefault();
        props.rechargeAll();
    };

    return (
        <div className="dropdown">
            <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                ⚙
            </button>
            <div className="dropdown-menu dropdown-menu-end">
                <button className="dropdown-item" onClick={onClick}>
                    New Budget
                </button>
                <button className="dropdown-item" onClick={rechargeAll}>
                    Recharge All
                </button>
            </div>
        </div>
    );
};
