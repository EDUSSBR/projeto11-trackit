import styled from "styled-components"

export function TextInput({ placeholder, type = 'initial' }) {
    return (<>
        <Input type={placeholder === 'password' ? 'password' : 'text'} placeholder={placeholder}></Input>
    </>)
}


const buttonProperties = {
    initial: {
        maxWidth: '303px',
        height: '45px',
        fontSize: '26px',
        lineHeight: '26px'
    },
    plus: {
        maxWidth: '40px',
        height: '35px',
        fontSize: '34px',
        lineHeight: '34px'
    },
    save: {
        maxWidth: '84px',
        height: '35px',
        fontSize: '20px',
        lineHeight: '20px;'
    }
}


const Input = styled.input`
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    max-width: 303px;
    height:45px;
    font-size:20px;
    text-align:left;
    &:disabled {
        background:#F2F2F2;
        color: #AFAFAF;
       opacity: 0.7;
    }
    &::placeholder{
        color: #DBDBDB;
    }
    &:focus, &:hover{
        border: 1px solid #126BA5;
        box-shadow: 0 0 3px #126aa576;
        outline-offset: 0px;
        outline: none;
    }

`