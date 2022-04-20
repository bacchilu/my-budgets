import React from 'react';
import {createRoot} from 'react-dom/client';

import {useUser, Spinner, EmptyNavbar, Login} from './utils.js';
import {MainPage} from './main';

const AuthPanel = function () {
    const onClick = function (e) {
        e.preventDefault();
    };

    return (
        <React.Fragment>
            <EmptyNavbar />
            <div className="container">
                <div style={{marginTop: '10px'}} className="alert alert-danger" role="alert">
                    <p>Please authenticate!</p>
                </div>
                <p>
                    You need to{' '}
                    <a href="#" onClick={onClick}>
                        authenticate
                    </a>{' '}
                    with a Google Account in order to use this app.
                </p>
            </div>
        </React.Fragment>
    );
};

const App = function (props) {
    const user = useUser();

    if (user === undefined) return <Spinner />;
    if (user === null) return <AuthPanel />;

    return <MainPage user={user} />;
};

createRoot(document.getElementById('app')).render(<App />);
