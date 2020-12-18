// const Confirm = function ({message, ...props}) {
//     const action = function (value) {
//         return function () {
//             props.action(value);
//             props.hide();
//         };
//     };
//
//     return (
//         <div className="modal-content">
//             <div className="modal-header"><h5 className="modal-title">Confirm</h5></div>
//             <div className="modal-body">{message}</div>
//             <div className="modal-footer" style={{display: 'block'}}>
//                 <button className="btn btn-outline-danger float-left" onClick={action(false)}>No</button>
//                 <button className="btn btn-outline-primary float-right" onClick={action(true)}>Sì</button>
//             </div>
//         </div>
//     );
// };
//
//
// const confirm = function (message, cb) {
//     const action = function (value) {
//         if (value)
//             cb();
//     };
//     Modal.render(Confirm, {message, action});
// };

import React from 'react';

import ReactDOM from 'react-dom';

export const Parent = (function () {
    const div = document.createElement('div');
    div.setAttribute('class', 'modal fade');
    div.setAttribute('tabindex', '-1');
    div.setAttribute('role', 'dialog');
    div.setAttribute('aria-hidden', 'true');
    const contentDiv = document.createElement('div');
    contentDiv.setAttribute('class', 'modal-dialog');
    contentDiv.setAttribute('role', 'document');
    div.appendChild(contentDiv);
    document.body.appendChild(div);

    const myModal = new bootstrap.Modal(div, {});

    div.addEventListener('hidden.bs.modal', function (e) {
        ReactDOM.render(null, contentDiv);
    });

    const hide = function () {
        ReactDOM.render(null, contentDiv, function () {
            myModal.hide();
        });
    };

    const render = function (Component, params) {
        ReactDOM.render(<Component hide={hide} {...params} />, contentDiv, function () {
            myModal.show();
        });
    };

    return {render};
})();
