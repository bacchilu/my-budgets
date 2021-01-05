import React from 'react';

import {RunningManager} from './model';

export const Loading = function (props) {
    const [isRunning, setIsRunning] = React.useState(RunningManager.isRunning());
    React.useEffect(function () {
        const cb = function () {
            setIsRunning(RunningManager.isRunning());
        };
        RunningManager.on(cb);
        return function () {
            RunningManager.off(cb);
        };
    }, []);
    if (!isRunning) return null;
    return (
        <div className="spinner-border" style={{position: 'fixed', bottom: '1em', right: '1em'}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
};
