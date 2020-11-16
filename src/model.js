import firebase from 'firebase/app';

// require('firebase/auth');
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
