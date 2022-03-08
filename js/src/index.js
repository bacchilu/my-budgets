import React from 'react';
import ReactDOM from 'react-dom';

import {useUser, Spinner, EmptyNavbar} from './utils.js';
import {MainPage} from './main';

const AuthPanel = function (props) {
    return (
        <React.Fragment>
            <EmptyNavbar />
            <div className="container">
                <div style={{marginTop: '10px'}} className="alert alert-danger" role="alert">
                    <p>Please authenticate!</p>
                </div>
                <p>You need to authenticate with a Google Account in order to use this app.</p>
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

ReactDOM.render(<App />, document.getElementById('app'));
