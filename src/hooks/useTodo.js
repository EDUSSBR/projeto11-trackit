import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../services";
const TodoContext = createContext({})

export function TodoProvider({ children }) {
    const navigate = useNavigate()
    const [user, setUser] = useState(() => {
        let user = JSON.parse(localStorage.getItem('user'))
        return user !== null ? user : null
    })
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginErrorMessage, setLoginErrorMessage] = useState(false)
    const [alreadyLogedIn, setAlreadyLogedIn] = useState(false)
    const [signInLoading, setSignInLoading] = useState(false)

    async function signIn(e) {
        e.preventDefault()
        setSignInLoading(()=>true)
        try {
            const response = await services.login(email, password)
            let receivedBody = await response.json()
            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(receivedBody))
                setUser(receivedBody)
                navigate('/hoje')
            } else {
                alert(receivedBody.message)
                setLoginErrorMessage(() => true)
            }
        } catch (e) {
            console.log(e)
        }
        setSignInLoading(()=>false)
    }


    return (<TodoContext.Provider value={{ email, password, setEmail, setPassword, signIn, loginErrorMessage, user, setUser, alreadyLogedIn, setAlreadyLogedIn, signInLoading }}>
        {children}
    </TodoContext.Provider>)
}


export function useTodo() {
    const context = useContext(TodoContext)
    return context
}