
import styled from "styled-components"
import done from "../assets/done.svg"
import { useTodo } from "../hooks/useTodo"

import { TitleBar } from "../components/TitleBar"
export function TodaysHabitsPage() {
    const { state: { percentage,todaysHabits, todaysIntialMessage }, setHatbitAsDone } = useTodo()
    return (<>
        <TitleContainer totalPercentage={percentage}>
            <TitleBar text={todaysIntialMessage} buttonShouldRender={false} />
            <div data-test="today-counter">{percentage > 0 ? `${percentage}% dos hábitos concluídos`: 'Nenhum hábito concluído ainda'}</div>
        </TitleContainer>
        <HabitsPageContainer>
            {todaysHabits.map(item => (
                <Habit data-test="today-habit-container" key={item.id}>
                    <div>
                        <p data-test="today-habit-name">{item.name}</p>
                        <p style={item.done? {color:'#8FC549'}: {color:'#666666'}}data-test="today-habit-sequence">Sequência atual: {item.currentSequence + " dias"}</p>
                        <p style={item.currentSequence > 0  && item.highestSequence===item.currentSequence ? {color:'#8FC549'}: {color:'#666666'}} data-test="today-habit-record">Seu recorde: {item.highestSequence + " dias"}</p>
                    </div>
                    <DoneButton data-test="today-habit-check-btn" onClick={() => setHatbitAsDone(item.id)} done={item.done}><img src={done} alt={item.done ? "realizada" : "não realizada"} /></DoneButton>
                </Habit>)
            )}
            {/* {!messageShouldRender && <MessageText text={'Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!'} />} */}
        </HabitsPageContainer>
    </>
    )
}
const TitleContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
max-width: 340px;
margin: 6px auto 0 auto;
div:nth-child(2){
    /* margin-left:18px; */
    align-self:flex-start;
    color: #BABABA;
    font-size: 17.976px;
    line-height: 22px;
    margin-bottom:0px;
    color: ${({totalPercentage})=>((totalPercentage > 0) ?  '#8FC549' : '#BABABA')};
    @media (max-width:380px){
    margin-left: 18px;
    }
}
`
const HabitsPageContainer = styled.div`
    margin-top: 28px;
    padding-left:18px;
    padding-right:18px;
    img {
        width:13px;
        height:15px;
    }
`
const DoneButton = styled.div`
background-color:  ${({ done }) => done ? "#8FC549" : "#EBEBEB"};
border-radius: 5px;
border: ${({ done }) => done ? '1px solid transparent' : "1px solid #E7E7E7"};
width:69px;
height:69px;
display: flex;
align-items:center;
justify-content:center;
img {
    width:35px;
    height:28px;
}
`
function DayButtons({ arr, inputShouldRender }) {
    arr = [{ filled: true, text: "D" }, { filled: true, text: "S" }, { filled: true, text: "T" }, { filled: true, text: "Q" }, { filled: true, text: "Q" }, { filled: false, text: "S" }, { filled: true, text: "S" },]
    return (
        <DayButtonContainer inputShouldRender={inputShouldRender}>
            {arr.map(item => (
                <DayButtonItem filled={item.filled}>
                    {item.text}
                </DayButtonItem>
            ))}
        </DayButtonContainer>
    )
}
const DayButtonItem = styled.button`
    outline: none;
    width: 30px;
    height: 30px;
    background: ${({ filled }) => filled ? '#CFCFCF' : '#FFFFFF'};
    border: ${({ filled }) => filled ? '1px solid #CFCFCF' : '1px solid #D5D5D5'};
    color: ${({ filled }) => filled ? '#FFFFFF' : '#DBDBDB'};
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;
    margin-left:4px;
    &:first-child{
        margin-left:0px;
    }
`
const DayButtonContainer = styled.div`
    display:flex;
    max-width: 340px;
    background-color:white;
    margin-top: 8px;
    margin-bottom: ${({ inputShouldRender }) => !inputShouldRender ? "29px" : "0px"};
    align-self: flex-end;
`

const BottomButtonsContainer = styled.div`
    display:flex;
    justify-content: flex-end;
    align-items: center;
    margin-right:2px;
    background-color:white;
    height: 100%;
`

const Habit = styled.div`
    display:flex;
    flex-direction: row;
    max-height: 180px;
    min-height: 91px;
    width: 100%;
    max-width: 340px;
    background-color:white;
    margin: 0 auto;
    border-radius: 5px;
    margin-bottom: 10px; //a trocar depois talvez
    padding: 13px 18px 15px 18px;
    justify-content: space-between;
    p:first-child{
        font-size: 19.976px;
        line-height: 25px;
        margin-bottom: 7px; //a trocar depois talvez
    }
    div:first-child{
        background-color:white;
        width:calc(100% - 69px);
        max-width:calc(100% - 69px - 36px)
    }
`
const CancelButton = styled.button`
    color :#52B6FF;
    background-color:white;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    margin-right: 19px;
`

const HabitTitle = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    background-color:white;
    span{
        font-size: 19.976px;
        line-height: 25px; 
        color:#666666;
    }

`