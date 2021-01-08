import React from 'react';

import {signIn, signOut, onAuthStateChanged} from './model';

export const toCurrency = function (value) {
    return new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR',
    }).format(value);
};

export const useUser = function () {
    const [user, setUser] = React.useState(null);
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
        <a href="#" onClick={logout}>
            <em>{user['displayName']}</em>
        </a>
    ) : (
        <a href="#" onClick={login}>
            <em>Login</em>
        </a>
    );
};
