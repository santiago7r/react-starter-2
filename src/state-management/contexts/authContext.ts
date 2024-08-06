import React from "react";
import { Action } from "../reducers/loginReducer";


interface IAuthContext {
    user: string;
    dispatch: React.Dispatch<Action>
}

const AuthContext = React.createContext<IAuthContext>({} as IAuthContext)

export default AuthContext;