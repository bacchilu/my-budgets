import firebase from 'firebase/app';
import 'firebase/auth';

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

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(user['displayName'], user['email'], user['photoURL']);
        // firebase.auth().signOut();
    } else {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({prompt: 'select_account'});
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(function (result) {
                const user = result.user;
                console.log(user['displayName'], user['email'], user['photoURL']);
            })
            .catch(function (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
});

export {RunningManager} from './firestore';
import {FireStore} from './firestore';

const fs = FireStore(firebase);
export const getBudgets = fs.getBudgets;
export const updateBudget = fs.updateBudget;
