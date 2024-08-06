import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

export interface Action {
  type: 'LOGIN' | 'LOGOUT'
}
const loginReducer = (state: string, action: Action): string => {
  switch (action.type) {
      case 'LOGOUT':
          return state = '';
      case 'LOGIN':
          return state = 'mosh.hamedani';
  }
}

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