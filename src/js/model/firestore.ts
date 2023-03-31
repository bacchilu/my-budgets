// https://firebase.google.com/docs/firestore/security/rules-query
// https://firebase.google.com/docs/firestore/security/rules-conditions

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /budgets/{budget} {
//       allow read, write: if request.auth != null && request.auth.uid == resource.data.uid;
//     }
//   }
// }

import firebase from 'firebase/app';
import {User as FirebaseUser} from 'firebase/auth';
import {addDoc, collection, doc, getDocs, getFirestore, orderBy, query, setDoc, where} from 'firebase/firestore';

interface Budget {
    id: string;
    amount: number;
    createdAt: Date;
    name: string;
    uid: string;
    weekly_amount: number;
}

export const FireStore = function (firebaseApp: firebase.FirebaseApp) {
    const db = getFirestore(firebaseApp);

    return {
        getBudgets: async function (user: FirebaseUser) {
            const q = query(collection(db, 'budgets'), where('uid', '==', user.uid), orderBy('createdAt'));
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(function (item) {
                return {id: item.id, ...item.data()};
            }) as Budget[];
        },
        updateBudget: async function (id: string, amount: number, weekly_amount: number) {
            const budgetsRef = collection(db, 'budgets');
            await setDoc(doc(budgetsRef, id), {amount: amount, weekly_amount: weekly_amount}, {merge: true});
        },
        createBudget: async function (user: FirebaseUser, name: string, weekly_budget: number) {
            const docRef = await addDoc(collection(db, 'budgets'), {
                amount: 0,
                createdAt: new Date(),
                name,
                uid: user.uid,
                weekly_amount: 0,
                weekly_budget,
            });
            console.log('Document written with ID: ', docRef.id);
        },
    };
};
