import { ReactNode, useReducer } from "react";
import loginReducer from "./reducers/loginReducer";
import AuthContext from "./contexts/authContext";

interface AuthProvider {
    children: ReactNode;
}


const AuthProvider = ({children}: AuthProvider) => {
  const [user, dispatch] = useReducer(loginReducer, '');

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
        {children}
    </AuthContext.Provider>
  )

}

export default AuthProvider;