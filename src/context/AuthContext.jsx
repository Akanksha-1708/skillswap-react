// createcontext cerates a global container, initially its empty
// authcontext.provider provides data to the entire app, Anything inside it can access the data.
// children, very imp react concept, React renders the entire application there.
// createContext(), Creates a global context object. Think of it like an empty locker.
// <AuthContext.Provider value={{}}> This is what fills the locker.
// useEffect => Without it, React would keep registering listeners on every render.
// onauthstatechanged => Whenever the authentication state changes, let me know.

// app starts->user already logged in->firebase says here is the user
// app starts->user logs out->firebase says no user now
// return unsubscribe => Removes the Firebase auth listener when the component unmounts, preventing memory leaks.

import {createContext,useContext,useEffect,useState} from "react";
import {auth} from "@/firebase/firebase";
import { onAuthStateChanged,signOut } from "firebase/auth";
import {doc,getDoc} from "firebase/firestore";
import {db} from "@/firebase/firebase";


const AuthContext=createContext();

export function useAuth(){
    return useContext(AuthContext);
}
export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);  //still checking with Firebase
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,async (user)=>{
            setCurrentUser(user);
            if(user){
                const docref=doc(db,"users",user.uid);
                const docSnap=await getDoc(docref);
                if(docSnap.exists()){
                    setUserProfile(docSnap.data());
                }else{
                    setUserProfile(null);
                }
            }else{
                setUserProfile(null);
            }
            setLoading(false);
        });
        return unsubscribe;
    },[]);

    const logout=()=>{
        return signOut(auth);
    }
    if (loading) {
    return null;
    }

    return(
        <AuthContext.Provider value={{currentUser,userProfile,logout}}>
            {children}
        </AuthContext.Provider>
    );
}