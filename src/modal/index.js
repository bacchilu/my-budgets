const React = require('react');
const ReactDOM = require('react-dom');

const Body = require('./body.js');


const Modal = (function () {
    const div = document.createElement('div');
    div.setAttribute('class', 'modal fade');
    div.setAttribute('tabindex', '-1');
    div.setAttribute('role', 'dialog');
    div.setAttribute('aria-hidden', 'true');
    document.body.appendChild(div);

    const hide = function () {
        ReactDOM.render(null, div, function () {
            $(div).modal('hide');
        });
    };

    $(div).on('hidden.bs.modal', function (e) {
        ReactDOM.render(null, div);
    });

    return {
        open: function (budget, action) {
            ReactDOM.render(<Body.Modal budget={budget} hide={hide} action={action} />, div, function () {
                $(div).modal({backdrop: 'static'});
            });
        },
        confirm: function (message, cb) {
            const action = function (value) {
                if (value)
                    cb();
                hide();
            };
            ReactDOM.render(<Body.Confirm message={message} action={action} />, div, function () {
                $(div).modal({backdrop: 'static'});
            });
        }
    };
})();


module.exports = Modal;
