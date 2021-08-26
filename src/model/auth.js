import 'firebase/compat/auth';

export const Auth = function (firebase) {
    return {
        signIn: async function () {
            const provider = new firebase.auth.GoogleAuthProvider();
            provider.setCustomParameters({prompt: 'select_account'});
            try {
                const result = await firebase.auth().signInWithRedirect(provider);
                const user = result.user;
                console.log(user['displayName'], user['email'], user['photoURL']);
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            }
        },
        signOut: function () {
            firebase.auth().signOut();
        },
        onAuthStateChanged: function (cb) {
            return firebase.auth().onAuthStateChanged(cb);
        },
    };
};
