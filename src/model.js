const firebase = require('firebase/app');

// require('firebase/auth');
require('firebase/firestore');


const firebaseConfig = {
    apiKey: 'AIzaSyBvHCpKNrfKfc2AZZLP8D0K1AGlUFcX1aE',
    authDomain: 'test-budget-38b21.firebaseapp.com',
    databaseURL: 'https://test-budget-38b21.firebaseio.com',
    projectId: 'test-budget-38b21',
    storageBucket: 'test-budget-38b21.appspot.com',
    messagingSenderId: '1067130269246',
    appId: '1:1067130269246:web:504d76c1afc05bcbf12b6f'
};

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();


const getBudgets = function () {
    return db.collection('budgets').orderBy('createdAt').get().then(function (querySnapshot) {
        return querySnapshot.docs.map(function (item) {
            return {id: item.id, ...item.data()};
        });
    });
};


const updateBudget = function (id, amount, weekly_amount) {
    db.collection('budgets').doc(id).set({amount: amount, weekly_amount: weekly_amount}, {merge: true});
};


module.exports = {getBudgets, updateBudget};
