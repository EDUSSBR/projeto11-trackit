import styled from "styled-components"

export function InputButton({ text, type = 'initial' }) {
    return (<>
        <Button properties={type}>{text}</Button>
    </>)
}


const buttonProperties = {
    initial: {
        maxWidth: '303px',
        height: '45px',
        fontSize: '21px',
        lineHeight: '26px'
    },
    plus: {
        maxWidth: '40px',
        height: '35px',
        fontSize: '27px',
        lineHeight: '34px'
    },
    save: {
        maxWidth: '84px',
        height: '35px',
        fontSize: '20px',
        lineHeight: '20px;'
    }
}


const Button = styled.button`
    width: 100%;
    text-align: center;
    background-color: #52B6FF;
    color: #ffffff;
    border-radius: 4.63636px;
    max-width: ${({ properties }) => buttonProperties[properties].maxWidth};
    height: ${({ properties }) => buttonProperties[properties].height};
    font-size: ${({ properties }) => buttonProperties[properties].fontSize};
    line-height: ${({ properties }) => buttonProperties[properties].lineHeight};
    border: 0px solid transparent;
    padding-top: 8px;
    padding-bottom: 11px;
    &:disabled {
       opacity: 0.7;
    }
`