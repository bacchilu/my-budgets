import React from 'react';
import ReactDOM from 'react-dom';

import {useUser, Spinner, EmptyNavbar} from './utils.js';
import {MainPage} from './main';

// Sicurezza:
// - Pagina in cui si richiede autenticazione; DONE
// - Regola sull mettere in sicurezza il Firestore; DONE
//       allow read, write: if request.auth != null && request.time < timestamp.date(2021, 2, 9)
// - https://firebase.google.com/docs/firestore/security/rules-conditions

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
