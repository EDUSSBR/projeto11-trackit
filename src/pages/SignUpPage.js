import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/complet.svg'
import { Input } from '../components/Input'
import { InputButton } from '../components/InputButton'
import { services } from '../services'
export function SignUpPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setname] = useState("")
    const [photoUrl, setPhotoUrl] = useState("")
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    // const [loading, setLoading] = useState(false)
    async function createAccount(e){
        e.preventDefault()
        setLoading(()=>true)
        try{
            let response = await services.signUp(email, name, password, photoUrl)
            let messageObj = await response.json()
            if (response.ok){
                console.log(messageObj)
                navigate('/')
            } else {
                alert(messageObj.message)
            }

        } catch (e){
            console.log(e)
        }
        setLoading(()=>false)
    }
    return <SignUpPageContainer>
        <img src={logo} alt="Trackit!" />
        <Form onSubmit={e=>createAccount(e)}>
            <Input data-test="email-input" disable={loading} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required/>
            <Input data-test="password-input" disable={loading}  type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" required/>
            <Input data-test="user-name-input" disable={loading}  value={name} onChange={(e) => setname(e.target.value)} placeholder="nome" required/>
            <Input data-test="user-image-input" disable={loading}  value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} placeholder="foto" />
            <InputButton dataTest="signup-btn" disable={loading}  loading={loading} text="Cadastrar" />
        </Form>
        <Link data-test="login-link" to={'/'}><button>Já tem uma conta? Faça login</button></Link>

    </SignUpPageContainer>
}

const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items: center;
`
const SignUpPageContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    height: 100%;
    padding-left:8px;
    padding-right:8px;
    background-color: white;
    img {
        margin-top:68px;
        max-width:180px;
    }
    input:first-child{
        margin-top:32px;
    }
    input, button {
        margin-top: 6px;
    }
    & > a >button:last-child {
        text-decoration: underline;
        color:#52B6FF;
        border: none;
        background-color: white;
    }
`