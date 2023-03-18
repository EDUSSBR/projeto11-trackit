import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/complet.svg'
import { Input } from '../components/Input'
import { InputButton } from '../components/InputButton'
import { useTodo } from '../hooks/useTodo'
export function HomePage() {
    const { email, password, setEmail, setPassword, signIn, user, alreadyLogedIn, setAlreadyLogedIn, loading } = useTodo()
    let navigate = useNavigate()
    if (user !== null) {
        navigate('/hoje')
        setAlreadyLogedIn(true)
    }
    return  (!alreadyLogedIn && (<HomePageContainer>
        <img src={logo} alt="Trackit!" />
        <Form onSubmit={(e) => signIn(e)}>
            <Input disabled={loading} pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" dataTest="email-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"email"} required></Input>
            <Input disabled={loading} dataTest="password-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"senha"} required></Input>
            <InputButton dataTest="login-btn" text="Entrar" loading={loading}/>
        </Form>
        <Link to="/cadastro"><button data-test="signup-link" >Já tem uma conta? Cadastre-se!</button></Link>
    </HomePageContainer>))
}


const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items: center;
`
const HomePageContainer = styled.div`
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
    & > a > button {
        text-decoration: underline;
        color:#52B6FF;
        border: none;
        background-color: white;
    }
`
