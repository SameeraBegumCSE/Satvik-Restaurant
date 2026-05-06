import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserAuthContext.Provider value={{ user, googleSignIn, logOut }}>
      {children}
    </UserAuthContext.Provider>
  );
};

// Custom hook
export const UserAuth = () => useContext(UserAuthContext);
