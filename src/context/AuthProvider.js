import {
  useState,
  useContext,
  createContext,
  useReducer,
  useEffect,
} from "react";

import { auth } from "../firebase-config";

import { authReducer } from "./authReducer";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const initialAuthState = {
  isModalOpen: false,
  isAuthenticated: false,
  user: null,
  token: null,
  authForm: {
    type: "login",
    email: "",
    password: "",
  },
};

const AuthContext = createContext(initialAuthState);

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  const openModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const switchAuthForm = () => {
    dispatch({ type: "SWITCH_AUTH_FORM" });
  };

  const updateAuthForm = (name, value) => {
    dispatch({ type: "UPDATE_AUTH_FORM", payload: { name, value } });
  };

  const login = async (auth, email, password) => {
    try {
      setIsLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;
      dispatch({ type: "LOGIN", payload: { user, token: user.getIdToken() } });
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
      closeModal();
      updateAuthForm("email", "");
      updateAuthForm("password", "");
    }
  };

  const logout = async (auth) => {
    try {
      setIsLoading(true);
      await signOut(auth);
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (auth, email, password) => {
    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;
      dispatch({ type: "LOGIN", payload: { user, token: user.getIdToken() } });
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
      closeModal();
      updateAuthForm("email", "");
      updateAuthForm("password", "");
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: "LOGIN",
          payload: { user, token: user.getIdToken() },
        });
      } else {
        dispatch({ type: "LOGOUT" });
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isModalOpen: state.isModalOpen,
        openModal,
        closeModal,
        isAuthenticated: state.isAuthenticated,
        switchAuthForm,
        updateAuthForm,
        dispatch,
        isLoading,
        formData: state.authForm,
        formType: state.authForm.type,
        login: (email, password) => login(auth, email, password),
        logout: () => logout(auth),
        register: (email, password) => register(auth, email, password),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
