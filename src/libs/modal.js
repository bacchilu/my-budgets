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

const React = require('react');
const ReactDOM = require('react-dom');


const Parent = (function () {
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

    $(div).on('hidden.bs.modal', function (e) {
        ReactDOM.render(null, contentDiv);
    });

    const hide = function () {
        ReactDOM.render(null, contentDiv, function () {
            $(div).modal('hide');
        });
    };

    const render = function (Component, params) {
        ReactDOM.render(<Component hide={hide} {...params} />, contentDiv, function () {
            $(div).modal({backdrop: 'static'});
        });
    };

    return {render};
})();


module.exports = Parent;
