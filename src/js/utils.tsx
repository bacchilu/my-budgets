import {User} from 'firebase/auth';
import React from 'react';

import {onAuthStateChanged, signIn, signOut} from './model';

export const toCurrency = function (value: number) {
    return new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR',
    }).format(value);
};

export const useUser = function () {
    const [user, setUser] = React.useState<User | null | undefined>(undefined);
    React.useEffect(() => onAuthStateChanged(setUser), []);

    return user;
};

type LoginProps = {
    user: User | null;
};

export const Login = function ({user}: LoginProps) {
    const login = function (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        signIn();
    };
    const logout = function (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
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

export const Spinner = function () {
    return (
        <div className="mt-5 d-flex justify-content-center">
            <div style={{width: '3rem', height: '3rem'}} className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export const EmptyNavbar = function () {
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
                        <Login user={null} />
                    </form>
                </div>
            </div>
        </nav>
    );
};
