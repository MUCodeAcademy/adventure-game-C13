import { useState, createContext, useContext, useReducer } from 'react';
import userReducer from './UserReducer';
import { SET_USER, CLEAR_USER} from './UserReducer';

export const UserContext = createContext(null);

export const useUserContext = () => useContext(UserContext);

export function UserProvider(props) {
    const [user, dispatch] = useReducer(userReducer, null);

    function setUser(newUser) {
        dispatch({ type: SET_USER, payload: newUser });
        console.log(newUser);
    }

    function clearUser() {
        dispatch({ type: CLEAR_USER });
    }

    const value = { user, setUser, clearUser};

    return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
}