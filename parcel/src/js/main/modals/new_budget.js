import React from 'react';

import {Modal} from '../../libs/modal';

const NewBudgetModalBody = function ({action}) {
    const inputEl = React.useRef(null);
    React.useEffect(function () {
        inputEl.current.focus();
    }, []);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [budget, setBudget] = React.useState('');

    const onSubmit = function (e) {
        e.preventDefault();
        action({name, description, budget});
    };
    const onChange = function (e) {
        if (e.target.name === 'budget') setBudget(parseFloat(e.target.value));
        else {
            const set = {name: setName, description: setDescription}[e.target.name];
            set(e.target.value);
        }
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
                            name="name"
                            placeholder=" "
                            value={name}
                            onChange={onChange}
                            required
                        />
                        <label>Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea
                            className="form-control"
                            name="description"
                            rows="3"
                            placeholder=" "
                            style={{height: '100px'}}
                            value={description}
                            onChange={onChange}
                        ></textarea>
                        <label>Description</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            className="form-control"
                            value={budget}
                            onChange={onChange}
                            name="budget"
                            placeholder=" "
                            required
                        />
                        <label>Budget</label>
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
