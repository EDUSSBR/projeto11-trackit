import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useTodo } from "../hooks/useTodo"
export function Footer() {
    const navigate = useNavigate()
    const {state: {percentage}} = useTodo()
    function goToHabitsPage(){
        navigate('/habitos')

    }
    function goToTodaysHabitsPage(){
        navigate('/hoje')

    }
    function goToHistoryPage(){
        navigate('/historico')
    }
    return (
        <FooterContainer data-test="menu">
            <CircularBarContainer data-test="today-link">
                <p onClick={goToTodaysHabitsPage}>Hoje</p>
                {(<CircularProgressbar
                    value={percentage}
                    //text={'Hoje'}
                    background
                    backgroundPadding={6}
                    strokeWidth={8}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent",
                        //   pathTransitionDuration: 0.5,
                        //  stroke: `rgba(62, 152, 199, ${35 / 100})`,
                        strokeLinecap: 'round',
                        // transition: 'stroke-dashoffset 0.5s ease 0s',
                        textSize: '18px',
                        textAlign: 'center'
                    })}
                />)}
            </CircularBarContainer>
            <FooterButton data-test="habit-link"  onClick={goToHabitsPage}>Hábitos</FooterButton>
            <FooterButton data-test="history-link" onClick={goToHistoryPage}>Histórico</FooterButton>
        </FooterContainer>)
}
// CircularProgressbar-path
const CircularBarContainer = styled.div`
    position: absolute;
    bottom:10px;
    left: calc(50% - 45.5px);
    width:91px;
    height:91px;
    background-color: transparent;
    border: none;
    outline: none;
    p {
        position: absolute;
        bottom:calc(48px - 11px);
        left:calc(50% - 20px);
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color:white;
        font-family: 'Lexend Deca';
        cursor:pointer;
    }

`
const FooterButton = styled.button`
    color :#52B6FF;
    background-color:white;
    border: none;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
`
const FooterContainer = styled.footer`
    width:100%;
    position: fixed;
    bottom:0px;
    left:0px;
    height: 70px;
    background-color:white;
    display: flex;
    justify-content: space-between;
    padding-left: 36px;
    padding-right: 31px;
`