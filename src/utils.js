import React from 'react';

import {signIn, signOut, onAuthStateChanged} from './model';

export const toCurrency = function (value) {
    return new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR',
    }).format(value);
};

export const useUser = function () {
    const [user, setUser] = React.useState(undefined);
    React.useEffect(function () {
        return onAuthStateChanged(setUser);
    }, []);
    return user;
};

export const Login = function ({user}) {
    const login = function (e) {
        e.preventDefault();
        signIn();
    };
    const logout = function (e) {
        e.preventDefault();
        signOut();
    };

    return user !== null ? (
        <button className="btn btn-outline-danger" onClick={logout}>
            <i className="bi bi-box-arrow-in-left"></i> <em>{user['displayName']}</em>
        </button>
    ) : (
        <button className="btn btn-outline-success" onClick={login}>
            <i className="bi bi-box-arrow-in-right"></i>
        </button>
    );
};

export const Spinner = function (props) {
    return (
        <div style={{marginTop: '50px'}} className="d-flex justify-content-center">
            <div style={{width: '3rem', height: '3rem'}} className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export const EmptyNavbar = function ({user}) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand">My Budgets</span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>
                    <form className="d-flex">
                        <Login user={user} />
                    </form>
                </div>
            </div>
        </nav>
    );
};
