import React from "react";
import { Action } from "./AuthProvider";


interface IAuthContext {
    user: string;
    dispatch: React.Dispatch<Action>
}

const AuthContext = React.createContext<IAuthContext>({} as IAuthContext)

export default AuthContext;