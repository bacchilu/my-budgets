import React from 'react';
import ReactDOM from 'react-dom';

import {useUser, Spinner, EmptyNavbar} from './utils.js';
import {MainPage} from './main';

const App = function (props) {
    const user = useUser();

    if (user === undefined) return <Spinner />;
    if (user === null)
        return (
            <React.Fragment>
                <EmptyNavbar user={user} />
                <div className="container">
                    <div style={{marginTop: '10px'}} className="alert alert-danger" role="alert">
                        <p>Please authenticate!</p>
                    </div>
                </div>
            </React.Fragment>
        );

    return <MainPage user={user} />;
};

ReactDOM.render(<App />, document.getElementById('app'));
