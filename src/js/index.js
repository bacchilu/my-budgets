import React from 'react';
import {createRoot} from 'react-dom/client';

import {useUser, Spinner, EmptyNavbar} from './utils.js';
import {MainPage} from './main';
import {signIn} from './model/index.js';

const AuthPanel = function () {
    const onClick = function (e) {
        e.preventDefault();
        signIn();
    };

    return (
        <React.Fragment>
            <EmptyNavbar />
            <div className="container">
                <div style={{marginTop: '10px'}} className="alert alert-danger" role="alert">
                    <p>Please authenticate!</p>
                    <p>
                        You need to{' '}
                        <a href="#" onClick={onClick}>
                            authenticate
                        </a>{' '}
                        with a Google Account to use this app.
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
};

const App = function () {
    const user = useUser();

    if (user === undefined)
        return (
            <>
                <Spinner />
                <p className="mt-5 d-flex justify-content-center lead">Alla gente non piace essere criticata</p>
            </>
        );
    if (user === null) return <AuthPanel />;

    return <MainPage user={user} />;
};

createRoot(document.getElementById('app')).render(<App />);
