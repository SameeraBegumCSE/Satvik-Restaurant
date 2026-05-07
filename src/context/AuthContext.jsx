import { createContext, useReducer, useEffect, useContext } from "react";
import { auth, provider } from "../firebase/config";
import { onAuthStateChanged, signInWithRedirect } from "firebase/auth";

// Create context
export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };

    case "LOGOUT":
      return { ...state, user: null };

    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };

    default:
      return state;
  }
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  const googleSignIn = () => {
    return signInWithRedirect(auth, provider).catch((err) => {
      console.error("Google Sign-in Error:", err.message);
    });
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
    });

    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch, googleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};
