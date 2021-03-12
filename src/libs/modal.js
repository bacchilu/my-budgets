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

const modalDomEl = document.body.appendChild(document.createElement('div'));

export const Modal = function ({opened, setOpened, children}) {
    const modalEl = React.useRef(null);
    const modalJs = React.useRef(null);
    React.useEffect(function () {
        modalJs.current = new bootstrap.Modal(modalEl.current);
        modalEl.current.addEventListener('hidden.bs.modal', function (event) {
            setOpened(false);
        });
    }, []);
    React.useEffect(
        function () {
            if (opened) modalJs.current.show();
            else modalJs.current.hide();
        },
        [opened]
    );

    return ReactDOM.createPortal(
        <div ref={modalEl} className="modal fade" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">{children}</div>
            </div>
        </div>,
        modalDomEl
    );
};

// export const useModal = function () {
//     const [opened, setOpened] = React.useState(false);

//     return [
//         function ({children}) {
//             const modalEl = React.useRef(null);
//             const modalJs = React.useRef(null);
//             React.useEffect(function () {
//                 modalJs.current = new bootstrap.Modal(modalEl.current);
//                 modalEl.current.addEventListener('hidden.bs.modal', function (event) {
//                     setOpened(false);
//                 });
//             }, []);
//             React.useEffect(
//                 function () {
//                     if (opened) modalJs.current.show();
//                     else modalJs.current.hide();
//                 },
//                 [opened]
//             );

//             return ReactDOM.createPortal(
//                 <div ref={modalEl} className="modal fade" tabIndex="-1" aria-hidden="true">
//                     <div className="modal-dialog">
//                         <div className="modal-content">{children}</div>
//                     </div>
//                 </div>,
//                 modalDomEl
//             );
//         },
//         setOpened,
//     ];
// };

// export const useModal = function () {
//     const [opened, setOpened] = React.useState(false);
//     const modalJs = React.useRef(null);

//     return [
//         function ({children}) {
//             const modalEl = React.useRef(null);
//             React.useEffect(function () {
//                 modalJs.current = new bootstrap.Modal(modalEl.current);
//                 modalEl.current.addEventListener('hidden.bs.modal', function (event) {
//                     setOpened(false);
//                 });
//             }, []);
//             React.useEffect(
//                 function () {
//                     if (opened) modalJs.current.show();
//                     else modalJs.current.hide();
//                 },
//                 [opened]
//             );

//             return ReactDOM.createPortal(
//                 <div ref={modalEl} className="modal fade" tabIndex="-1" aria-hidden="true">
//                     <div className="modal-dialog">
//                         <div className="modal-content">{children}</div>
//                     </div>
//                 </div>,
//                 modalDomEl
//             );
//         },
//         setOpened,
//     ];
// };
