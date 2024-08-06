
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

export default loginReducer;