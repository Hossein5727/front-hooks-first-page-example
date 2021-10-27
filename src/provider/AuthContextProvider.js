import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../chat/firebase";

const AuthContext = React.createContext()

function AuthContextProvider({ children }) {


    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const history = useHistory()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user)
            setLoading(false)
            if (user) history.push('/chats')
        })
    }, [user, history])

    const value = { user }

    return (
        <div>
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthContextProvider



export const UseAuth = () => useContext(AuthContext)

