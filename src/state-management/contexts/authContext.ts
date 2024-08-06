import React, { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/taskListReducer";
import { Action } from "../reducers/loginReducer";


interface IAuthContext {
    user: string;
    dispatch: React.Dispatch<Action>
}

const AuthContext = React.createContext<IAuthContext>({} as IAuthContext)

export default AuthContext;