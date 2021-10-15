import React from 'react';

import {Modal} from '../../libs/modal';

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
