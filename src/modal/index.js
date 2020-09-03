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


const Body = require('./body.js');


const open = function (budget, action) {
    Parent.render(Body.Modal, {budget, action});
};

const confirm = function (message, cb) {
    const action = function (value) {
        if (value)
            cb();
    };
    Parent.render(Body.Confirm, {message, action});
};


module.exports = {open, confirm};
