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

import 'firebase/firestore';

export const FireStore = function (firebase) {
    const db = firebase.firestore();

    return {
        getBudgets: function (user) {
            return db
                .collection('budgets')
                .where('uid', '==', user.uid)
                .orderBy('createdAt')
                .get()
                .then(function (querySnapshot) {
                    return querySnapshot.docs.map(function (item) {
                        return {id: item.id, ...item.data()};
                    });
                });
        },
        updateBudget: function (id, amount, weekly_amount) {
            return db.collection('budgets').doc(id).set({amount: amount, weekly_amount: weekly_amount}, {merge: true});
        },
        createBudget: async function (user, name, weekly_budget) {
            db.collection('budgets')
                .add({
                    amount: 0,
                    createdAt: new Date(),
                    name,
                    uid: user.uid,
                    weekly_amount: 0,
                    weekly_budget,
                })
                .then(function (docRef) {
                    console.log('Document written with ID: ', docRef.id);
                })
                .catch(function (error) {
                    console.error('Error adding document: ', error);
                });
            return;
        },
    };
};
