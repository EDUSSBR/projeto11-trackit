import styled from 'styled-components'
import logo from '../assets/complet.svg'
import { InputButton } from '../components/InputButton'
import { TextInput } from '../components/TextInput'
export function HomePage() {
    return <HomePageContainer>
        <img src={logo} alt="Trackit!" />
        <Form>
            <TextInput placeholder="email" />
            <TextInput placeholder="senha" />
            <InputButton text="Entrar" />
        </Form>
        <button>Já tem uma conta? Cadastre-se!</button>

    </HomePageContainer>
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
    & > button:last-child {
        text-decoration: underline;
        color:#52B6FF;
        border: none;
        background-color: white;
    }
`