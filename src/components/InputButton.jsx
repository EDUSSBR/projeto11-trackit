import { ThreeDots } from "react-loader-spinner"
import styled from "styled-components"

export function InputButton({ text, type = 'initial', isDisabled = false, buttonShouldRender = true, dataTest = "", loading = false }) {
    return (<>
        <Button data-test={dataTest} disabled={isDisabled} buttonShouldRender={buttonShouldRender} type={type}>{loading === true ? <ThreeDots
            height="50"
            width="50"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{backgroundColor: 'transparent', width: '100%', height: '100%', display:'flex', justifyContent:'center', alignItems:'center' }}
            wrapperClassName=""
            visible={true}
        /> : text}</Button>
    </>)
}


const buttonProperties = {
    initial: {
        maxWidth: '303px',
        height: '45px',
        fontSize: '21px',
        lineHeight: '26px',
    },
    plus: {
        maxWidth: '40px',
        height: '35px',
        fontSize: '27px',
        lineHeight: '31px'
    },
    save: {
        maxWidth: '84px',
        height: '35px',
        fontSize: '20px',
        lineHeight: '20px;'
    }
}


const Button = styled.button`
    display: ${({ buttonShouldRender }) => buttonShouldRender ? 'block' : 'none'};
    position: ${({ buttonShouldRender }) => buttonShouldRender ? 'static' : 'absolute'};
    width: 100%;
    text-align: center;
    text-justify: center;
    background-color: #52B6FF;
    color: #ffffff;
    border-radius: 4.63636px;
    max-width: ${({ type }) => buttonProperties[type].maxWidth};
    height: ${({ type }) => buttonProperties[type].height};
    font-size: ${({ type }) => buttonProperties[type].fontSize};
    line-height: ${({ type }) => buttonProperties[type].lineHeight};
    border: 0px solid transparent;
    /* padding-top: ${(properties) => properties === 'plus' ? "0px" : "8px"}; */
    padding-bottom: ${({ type }) => type === 'save' ? '8px' : '11px'};
    padding-top: ${({ type }) => type === 'save' || type === 'initial' ? '8px' : 'none'};
    &:disabled {
       opacity: 0.7;
    }
`