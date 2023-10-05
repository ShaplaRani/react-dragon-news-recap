import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";


export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
     
    const logOut = () => {
        setLoading(true)
       return signOut(auth);
        
    }
    useEffect(() => {
       const unSubscribe= onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log('insert a user', currentUser);
            // setLoading(false)
        });
        return () =>{
            unSubscribe()
        }  
    },[])

    const authInfo ={user,loading, createUser,signInUser,logOut}

    return (
        <>
            <AuthContext.Provider value={authInfo}>
               {
                children
               }
            </AuthContext.Provider>
            
        </>
    );
};
AuthProviders.propTypes = {
    children: PropTypes.node
  };
export default AuthProviders;