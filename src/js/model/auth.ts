import {FirebaseApp} from 'firebase/app';
import {
    getAuth,
    getRedirectResult,
    GoogleAuthProvider,
    NextOrObserver,
    onAuthStateChanged,
    signInWithRedirect,
    signOut,
    User,
} from 'firebase/auth';

export const Auth = function (firebaseApp: FirebaseApp) {
    const auth = getAuth(firebaseApp);

    return {
        signIn: async function () {
            const provider = new GoogleAuthProvider();
            provider.setCustomParameters({prompt: 'select_account'});
            try {
                await signInWithRedirect(auth, provider);
                const result = await getRedirectResult(auth);
                if (result !== null) {
                    const user = result.user;
                    console.log(user['displayName'], user['email'], user['photoURL']);
                }
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            }
        },
        signOut: function () {
            signOut(auth);
        },
        onAuthStateChanged: function (cb: NextOrObserver<User>) {
            return onAuthStateChanged(auth, cb);
        },
    };
};
