import React from 'react';

// import {RunningManager} from './model';
import {useBudgets} from './budgets.js';

// export const Loading = function ({user}) {
//     const [isRunning, setIsRunning] = React.useState(RunningManager.isRunning());
//     React.useEffect(function () {
//         const cb = function () {
//             setIsRunning(RunningManager.isRunning());
//         };
//         RunningManager.on(cb);
//         return function () {
//             RunningManager.off(cb);
//         };
//     }, []);

//     if (!isRunning) return null;
//     return (
//         <div className="spinner-border" style={{position: 'fixed', bottom: '1em', right: '1em'}} role="status">
//             <span className="visually-hidden">Loading...</span>
//         </div>
//     );
// };

export const GlobalSpinner = function ({user}) {
    const {isValidating} = useBudgets(user);

    if (!isValidating) return null;
    return (
        <div className="spinner-border" style={{position: 'fixed', bottom: '1em', right: '1em'}} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};
