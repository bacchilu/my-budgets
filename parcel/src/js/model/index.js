import {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyBvHCpKNrfKfc2AZZLP8D0K1AGlUFcX1aE',
    authDomain: 'test-budget-38b21.firebaseapp.com',
    databaseURL: 'https://test-budget-38b21.firebaseio.com',
    projectId: 'test-budget-38b21',
    storageBucket: 'test-budget-38b21.appspot.com',
    messagingSenderId: '1067130269246',
    appId: '1:1067130269246:web:504d76c1afc05bcbf12b6f',
};
const firebaseApp = initializeApp(firebaseConfig);

import {Auth} from './auth.js';

const auth = Auth(firebaseApp);
export const signIn = auth.signIn;
export const signOut = auth.signOut;
export const onAuthStateChanged = auth.onAuthStateChanged;

import {FireStore} from './firestore.js';

const fs = FireStore(firebaseApp);
export const getBudgets = fs.getBudgets;
export const updateBudget = fs.updateBudget;
export const createBudget = fs.createBudget;
