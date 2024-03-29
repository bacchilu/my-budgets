import React from 'react';

import {useBudgets} from './budgets';

export const GlobalSpinner = function ({user}) {
    const [{isValidating}, _] = useBudgets(user);

    if (!isValidating) return null;
    return (
        <div className="spinner-border" style={{position: 'fixed', bottom: '1em', right: '1em'}} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};
