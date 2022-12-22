import React, { useState } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
    isPatient: false
});

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;

    const loginHandler = (token) =>{
        setToken(token);
        localStorage.setItem('token', token);
    }

    const logoutHandler = () =>{
        setToken(null);
        localStorage.removeItem('token');
    }

    const isPatientHandler = () =>{
        if(token == null)
            return null;
        
        if(jwt_decode(localStorage.getItem("token")).authorities[0].authority === "PATIENT")
              return true;
        
        return false;;
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        isPatient: isPatientHandler
    };

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;