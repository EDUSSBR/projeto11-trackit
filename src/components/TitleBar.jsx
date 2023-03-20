import styled from "styled-components"

export function TitleBar({ text = "Meus hábitos", buttonShouldRender = true, fn }) {
    return (  
        <TitleBarContainer>
            <Text data-test={(text === "Meus hábitos") ? "": "today"}>{text}</Text>
            <Button data-test="habit-create-btn" onClick={fn}  buttonShouldRender={buttonShouldRender}>+</Button>
        </TitleBarContainer>
    )
}



const TitleBarContainer = styled.div`
    display: flex;

    justify-content: space-between;
    align-items:center;

    padding-top: 92px;
    margin: 0 auto;
    width: 100%;
    max-width: 340px;
    @media (max-width:380px){
    padding-left: 18px;
    padding-right: 18px;
    }
`

const Text = styled.p`
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`
const Button = styled.button`
    visibility: ${({ buttonShouldRender }) => buttonShouldRender ? 'visible' : 'hidden'};
    width: 100%;
    text-align: center;
    text-justify: center;
    background-color: #52B6FF;
    color: #ffffff;
    border-radius: 4.63636px;
    max-width: 40px;
    height: 35px;
    font-size: 27px;
    line-height: 31px;
    border: 0px solid transparent;
    padding-bottom: 11px;
    padding-top: none;
    &:disabled {
       opacity: 0.7;
    }
`

