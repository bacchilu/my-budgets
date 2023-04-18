import {FirebaseApp} from 'firebase/app';
import {getAuth, getRedirectResult, GoogleAuthProvider, signInWithRedirect} from 'firebase/auth';

interface SignInResult {
    displayName: string;
    email: string;
    photoURL: string;
}

export interface AppUser {
    uid: string;
    displayName: string;
}

export const Auth = function (firebaseApp: FirebaseApp) {
    const auth = getAuth(firebaseApp);

    const signIn = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({prompt: 'select_account'});
        try {
            await signInWithRedirect(auth, provider);
            const result = await getRedirectResult(auth);
            if (result !== null) {
                const {displayName, email, photoURL} = result.user;
                return {displayName, email, photoURL} as SignInResult;
            }
        } catch (error) {
            const {code, message} = error;
            console.log(code, message);
            return null;
        }
        return null;
    };

    const signOut = () => auth.signOut();

    const onAuthStateChanged = (cb: (user: AppUser | null) => void) => {
        auth.onAuthStateChanged((user) => {
            cb(user as AppUser);
        });
    };

    return {signIn, signOut, onAuthStateChanged};
};
