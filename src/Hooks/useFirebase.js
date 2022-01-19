import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, GithubAuthProvider, onAuthStateChanged, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()


const useFirebase = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleName = event => {
        setName(event.target.value)
    }
    const handleNumber = event => {
        setNumber(event.target.value);
    }

    const signInWithGoogle = (location, navigate) => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result);
                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch(error => {
                setError(error);
            });
    }

    const signInWithGithub = (location, navigate) => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result);
                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch(error => {
                setError(error);
            });
    }

    // Login using email and password
    const loginHandler = (location, navigate) => {


        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                setUser(user);
                const destination = location?.state?.from || '/';
                navigate(destination);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const registerUser = (location, navigate) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                const destination = location?.state?.from || '/';
                navigate(destination);
                setError('');
                updateDisplayName();
            })
            .catch(error => {
                setError(error);
            });
    }

    const updateDisplayName = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
            phoneNumber: number
        }).then(() => {

        }).catch((error) => {
            setError(error.message);
        });
    }

    const signOut = () => {
        auth.signOut()
            .then(() => {
                setUser({});
            })
            .catch(error => {
                setError(error);
            });
    }

    useEffect(() => {
        let mounted = true;
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }

            setLoading(false)
        })
        return () => mounted = false;
    }, [user])

    return {
        user,
        signInWithGoogle,
        signInWithGithub,
        error,
        loading,
        signOut,
        registerUser,
        loginHandler,
        handleEmail,
        handlePassword,
        handleName,
        handleNumber
    }

};

export default useFirebase;