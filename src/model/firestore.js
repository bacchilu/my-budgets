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
    };
};
