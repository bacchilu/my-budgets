import React from 'react';
import {createRoot} from 'react-dom/client';

import {MainPage} from './main';
import {signIn} from './model/index.js';
import {EmptyNavbar, Spinner, useUser} from './utils.js';

const Quotations = function () {
    const data = [
        {message: 'Forget about goals, focus on systems instead.', author: 'James Clear', source: 'Atomic Habits'},
        {
            message: 'Stand up straight with your shoulders back.',
            author: 'Jordan Peterson',
            source: '12 Rules for Life',
        },
    ];
    const c = data[Math.floor(Math.random() * data.length)];

    return (
        <div className="mt-5 d-flex justify-content-center lead">
            <figure>
                <blockquote className="blockquote">
                    <p>{c.message}</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    {c.author} in <cite title="Source Title">{c.source}</cite>
                </figcaption>
            </figure>
        </div>
    );
};

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
                <Quotations />
            </>
        );
    if (user === null) return <AuthPanel />;

    return <MainPage user={user} />;
};

createRoot(document.getElementById('app')).render(<App />);
