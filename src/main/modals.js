import React from 'react';

import {Modal} from '../libs/modal.js';

export const RechargeAllModal = function ({opened, setOpened, action}) {
    const onClick = function () {
        action();
        setOpened(false);
    };

    return (
        <Modal opened={opened} setOpened={setOpened}>
            <div className="modal-header">
                <h5 className="modal-title">Recharge All</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">Sicuro di voler ricaricare tutti i budget?</div>
            <div className="modal-footer" style={{display: 'block'}}>
                <button className="btn btn-outline-danger float-end" onClick={onClick}>
                    Ok
                </button>
            </div>
        </Modal>
    );
};

const NewBudgetModalBody = function ({action}) {
    const inputEl = React.useRef(null);
    React.useEffect(function () {
        inputEl.current.focus();
    }, []);
    const [name, setName] = React.useState('');

    const onSubmit = function (e) {
        e.preventDefault();
        action(name);
    };
    const onChange = function (e) {
        setName(e.target.value);
    };

    return (
        <React.Fragment>
            <div className="modal-header">
                <h5 className="modal-title">New Budget</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={onSubmit}>
                <div className="modal-body">
                    <div className="form-floating mb-3">
                        <input
                            ref={inputEl}
                            className="form-control"
                            placeholder=" "
                            value={name}
                            onChange={onChange}
                        />
                        <label>Budget name</label>
                    </div>
                </div>
                <div className="modal-footer" style={{display: 'block'}}>
                    <button type="submit" className="btn btn-outline-danger float-end">
                        Ok
                    </button>
                </div>
            </form>
        </React.Fragment>
    );
};

export const NewBudgetModal = function ({opened, setOpened, action}) {
    const doAction = function (name) {
        action(name);
        setOpened(false);
    };

    return (
        <Modal opened={opened} setOpened={setOpened}>
            <NewBudgetModalBody action={doAction} />
        </Modal>
    );
};
