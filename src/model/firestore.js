import 'firebase/firestore';

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

export const FireStore = function (firebase) {
    const db = firebase.firestore();

    return {
        getBudgets: function () {
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
        },
        updateBudget: function (id, amount, weekly_amount) {
            RunningManager.set(true);
            db.collection('budgets')
                .doc(id)
                .set({amount: amount, weekly_amount: weekly_amount}, {merge: true})
                .finally(function () {
                    RunningManager.set(false);
                });
        },
    };
};
