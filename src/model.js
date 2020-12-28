import firebase from 'firebase/app';

import 'firebase/auth';

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBvHCpKNrfKfc2AZZLP8D0K1AGlUFcX1aE',
    authDomain: 'test-budget-38b21.firebaseapp.com',
    databaseURL: 'https://test-budget-38b21.firebaseio.com',
    projectId: 'test-budget-38b21',
    storageBucket: 'test-budget-38b21.appspot.com',
    messagingSenderId: '1067130269246',
    appId: '1:1067130269246:web:504d76c1afc05bcbf12b6f',
};

firebase.initializeApp(firebaseConfig);

// const provider = new firebase.auth.GoogleAuthProvider();
// firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then(function (result) {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const token = result.credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         console.log(user);
//     })
//     .catch(function (error) {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         const credential = error.credential;
//         // ...
//     });

const db = firebase.firestore();

const Emitter = new (require('events'))();

export const RunningManager = (function () {
    let isRunning = 0;
    return {
        on: function (cb) {
            Emitter.on('running_event', cb);
        },
        off: function (cb) {
            Emitter.removeListener('running_event', cb);
        },
        set: function (value) {
            isRunning += value ? 1 : -1;
            Emitter.emit('running_event');
        },
        isRunning: function () {
            return isRunning > 0;
        },
    };
})();

export const getBudgets = function () {
    RunningManager.set(true);
    return db
        .collection('budgets')
        .orderBy('createdAt')
        .get()
        .then(function (querySnapshot) {
            return querySnapshot.docs.map(function (item) {
                return {id: item.id, ...item.data()};
            });
        })
        .finally(function () {
            RunningManager.set(false);
        });
};

export const updateBudget = function (id, amount, weekly_amount) {
    RunningManager.set(true);
    db.collection('budgets')
        .doc(id)
        .set({amount: amount, weekly_amount: weekly_amount}, {merge: true})
        .finally(function () {
            RunningManager.set(false);
        });
};
