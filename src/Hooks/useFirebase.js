import { useEffect, useState } from "react";
import initializeFirebase from "../components/LogReg/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,  GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
    const [ user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


    const singUp = (email, password, location, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            const destination = location?.state?.from || '/';
                history.replace(destination);
            setAuthError('')
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false))
    };

    
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('')
                
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }


    const singInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const destination = location?.state?.from || '/';
                history.replace(destination);
            const user = result.user;
            setAuthError('');
        }).catch((error) => {
            setAuthError(error.message)
        })
        .finally(() => setIsLoading(false))
        }

   // observer user state
   useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser({})
        }
        setIsLoading(false)
    }); 
    return () => unsubscribed;
}, [])



    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {

        })
        .catch((error) => {

        })
        .finally(() => setIsLoading(false))
    }




    return {
        user,
        isLoading,
        authError,
        singUp,
        loginUser,
        logout,
        singInWithGoogle



    }
}

export default useFirebase;