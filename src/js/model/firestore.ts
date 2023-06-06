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
import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    orderBy,
    query,
    setDoc,
    where,
} from 'firebase/firestore';
import {AppUser} from './auth';

export interface Budget {
    id: string;
    amount: number;
    createdAt: Date;
    name: string;
    uid: string;
    weekly_amount: number;
    weekly_budget: number;
}

export const FireStore = function (firebaseApp: firebase.FirebaseApp) {
    const db = getFirestore(firebaseApp);

    return {
        getBudgets: async function (user: AppUser) {
            const q = query(collection(db, 'budgets'), where('uid', '==', user.uid), orderBy('createdAt'));
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map((item) => {
                const rawData = item.data();
                return {id: item.id, ...rawData, createdAt: new Date(rawData.createdAt.seconds * 1000)};
            }) as Budget[];
        },
        updateBudget: async (id: string, amount: number, weekly_amount: number) => {
            const budgetsRef = collection(db, 'budgets');
            const budgetDocRef = doc(budgetsRef, id);

            await setDoc(budgetDocRef, {amount: amount, weekly_amount: weekly_amount}, {merge: true});
            const updatedDoc = await getDoc(budgetDocRef);
            const rawData = updatedDoc.data()!;
            return {id, ...rawData, createdAt: new Date(rawData.createdAt.seconds * 1000)};
        },
        createBudget: async function (user: AppUser, name: string, weekly_budget: number) {
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
