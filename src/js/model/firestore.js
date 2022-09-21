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

import {addDoc, collection, doc, getDocs, getFirestore, orderBy, query, setDoc, where} from 'firebase/firestore';

export const FireStore = function (firebaseApp) {
    const db = getFirestore(firebaseApp);

    return {
        getBudgets: async function (user) {
            const q = query(collection(db, 'budgets'), where('uid', '==', user.uid), orderBy('createdAt'));
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(function (item) {
                return {id: item.id, ...item.data()};
            });
        },
        updateBudget: async function (id, amount, weekly_amount) {
            const budgetsRef = collection(db, 'budgets');
            return await setDoc(doc(budgetsRef, id), {amount: amount, weekly_amount: weekly_amount}, {merge: true});
        },
        createBudget: async function (user, name, weekly_budget) {
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
