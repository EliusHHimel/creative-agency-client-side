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

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result);
            })
            .catch(error => {
                setError(error);
            });
    }

    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result);
            })
            .catch(error => {
                setError(error);
            });
    }

    // Login using email and password
    const loginHandler = event => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                setUser(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })

    }

    const registerUser = (event) => {
        event.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
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
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }

            setLoading(false)
        })
    }, [])

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