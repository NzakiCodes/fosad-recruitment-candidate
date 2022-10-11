import React, { createContext, FC, useEffect, useState } from "react";
import { Signup } from "../interfaces/user";
import { Constants } from "../utils/constants";
import { SecureStorage } from "../utils/storage";

const secureStorage = new SecureStorage();

interface IAuthContext {
  auth?: string;
  setAuthAndCache: (v?: string) => void;
  signUpState: Signup;
  updateSignUpState: (value?: Signup) => void;
  setLogout: (route?: string) => void;
  initializing: boolean;
}

export const setLogout = (route?: string) => {
  secureStorage.removeItem(Constants.accessToken);
  secureStorage.removeItem(Constants.signUpState);
  window.location.href = route ?? "/";
};

export function useAuth() {
  const auth = React.useContext(AuthContext);

  if (!auth) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return auth;
}

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);
export const AuthProvider = AuthContext.Provider;

export const AuthProviderContainer: FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState<string>();
  const [signUpState, setSignUpState] = useState<Signup>({} as Signup);
  const [initializing, setInitializing] = useState<boolean>(true);

  useEffect(() => {
    let storedUser = secureStorage.getItem(Constants.signUpState);
    if (typeof storedUser === "string") setSignUpState(JSON.parse(storedUser));
  }, []);

  const updateSignUpState = (value?: Signup | undefined) => {
    if (value) {
      secureStorage.storeItem(Constants.signUpState, JSON.stringify(value));
      setSignUpState(value);
      return;
    }
    setSignUpState({} as Signup);
  };

  const setAuthAndCache = (value?: string | undefined) => {
    if (value) {
      secureStorage.storeItem(Constants.accessToken, value);
      setAuth(value);
      return;
    }
    setAuth(undefined);
  };

  useEffect(() => {
    const accessToken = secureStorage.getItem(Constants.accessToken);
    const signUpState = secureStorage.getItem(Constants.signUpState);
    if (accessToken) setAuthAndCache(accessToken);
    if (signUpState) updateSignUpState(JSON.parse(signUpState));
    setInitializing(false);
  }, []);

  return (
    <AuthProvider
      value={{
        auth,
        setAuthAndCache,
        setLogout,
        signUpState,
        updateSignUpState,
        initializing,
      }}
    >
      {children}
    </AuthProvider>
  );
};
export default AuthContext;
