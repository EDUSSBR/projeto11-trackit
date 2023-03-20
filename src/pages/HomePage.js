import { ThreeDots } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/complet.svg'
import { Input } from '../components/Input'
import { useTodo } from '../hooks/useTodo'
export function HomePage() {
    const { state: {user, email, password, alreadyLogedIn, loading: loadingHome},setAlreadyLogedIn, setEmail, setPassword, signIn } = useTodo()
    // let navigate = useNavigate()
    // if (user.token !== null && user!==undefined) {
    //     navigate('/hoje')
    //     setAlreadyLogedIn(true)
    // }
    return  (!alreadyLogedIn && (<HomePageContainer>
        <img src={logo} alt="Trackit!" />
        <Form onSubmit={(e) => signIn(e)}>
            <Input disabled={loadingHome} pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" data-test="email-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"email"} required></Input>
            <Input disabled={loadingHome} data-test="password-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"senha"} required></Input>
            {/* <InputButton dataTest="login-btn" text="Entrar" loading={loadingHome}/> */}
            <Button data-test={"login-btn"} disabled={loadingHome} >{loadingHome === true ? <ThreeDots
            height="50"
            width="50"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{backgroundColor: 'transparent', width: '100%', height: '100%', display:'flex', justifyContent:'center', alignItems:'center' }}
            wrapperClassName=""
            visible={true}
        /> : "Entrar"}</Button>
        </Form>
        <Link data-test="signup-link" to="/cadastro"><button data-test="signup-link" >Já tem uma conta? Cadastre-se!</button></Link>
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





const Button = styled.button`
    width: 100%;
    text-align: center;
    text-justify: center;
    background-color: #52B6FF;
    color: #ffffff;
    border-radius: 4.63636px;
    max-width: 303px;
    height: 45px;
    font-size: 21px;
    line-height: 26px;
    border: 0px solid transparent;
    padding-bottom: '11px';
    padding-top: '8px';
    &:disabled {
       opacity: 0.7;
    }
`