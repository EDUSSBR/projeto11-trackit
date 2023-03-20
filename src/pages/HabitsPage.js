
import styled from "styled-components"
import { InputButton } from "../components/InputButton"
import { MessageText } from "../components/MessageText"
import { TitleBar } from "../components/TitleBar"
import trashIcon from "../assets/trash-icon.svg"
import { Input } from "../components/Input"
import { useTodo } from "../hooks/useTodo"
export function HabitsPage() {
    const { state: { newHabit, habitsList, loading }, deleteHabit, createHabit, setNewHabitDays, setNewHabitName, setOpenCreateHabitTab } = useTodo()
    return (<>
        <TitleBar fn={setOpenCreateHabitTab} />
        <HabitsPageContainer>
            <CreateHabit data-test="habit-create-container" shouldRender={newHabit.openCreateHabitTab}>
                <Input data-test="habit-name-input"  required value={newHabit.name} onChange={e => setNewHabitName(e.target.value)} placeholder={"nome do hábito"} />
                <DayButtonContainer>
                    {newHabit?.daysToRender?.map((item, index) => (
                        <DayButtonItem data-test="habit-day" key={item.name} disabled={loading} onClick={e => setNewHabitDays(index)} filled={newHabit.days[index]}>
                            {newHabit.daysToRender[index]}
                        </DayButtonItem>))}
                </DayButtonContainer>
                <BottomButtonsContainer >
                    <CancelButton data-test="habit-create-cancel-btn" >Cancelar</CancelButton>
                    <InputButton data-test="habit-create-save-btn"  loading={loading} fn={createHabit} text={"Salvar"} type={'save'} />
                </BottomButtonsContainer>
            </CreateHabit>
            {habitsList?.map((item) => (
                <Habit data-test="habit-container" key={item.id} shouldRender={true}>
                    <TextInputContainer>
                        <span data-test="habit-name">{item.name}</span>
                        {<img  data-test="habit-delete-btn" onClick={() => deleteHabit(item.id)} src={trashIcon} alt="delete" />}
                    </TextInputContainer>
                    <DayButtonContainer inputShouldRender={true}>
                        {newHabit?.daysToRender?.map((day, index) => {
                            let filled = false
                            if (item?.days?.length>0){
                                for (let i = 0; i < item?.days?.length; i++) {
                                    if (item.days[i] === index) {
                                        filled = true
                                        break;
                                    }
                                }
                            }
                            return (<DayButtonItem  data-test="habit-day" filled={filled}>
                                {day}
                            </DayButtonItem>)
                        })}
                    </DayButtonContainer>
                </Habit>
            ))}
            {(habitsList.length === 0) && <MessageText text={'Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!'} />}
        </HabitsPageContainer>
    </>
    )
}




const HabitsPageContainer = styled.div`
    margin-top: 22px;
    padding-left:18px;
    padding-right:18px;
    padding-bottom:101px;
    img {
        width:13px;
        height:15px;
    }
`

function DayButtons({ arr = [], inputShouldRender, setIndex }) {
    let arrMap = [{ filled: false, text: "D" }, { filled: false, text: "S" }, { filled: false, text: "T" }, { filled: false, text: "Q" }, { filled: false, text: "Q" }, { filled: false, text: "S" }, { filled: false, text: "S" }]
    for (let item of arr) {
        arrMap[item].filled = true
    }
    return (
        <DayButtonContainer inputShouldRender={inputShouldRender}>

            {arrMap.map((item) => (
                <DayButtonItem onClick={setIndex} filled={item.filled}>
                    {item.text}
                </DayButtonItem>))}

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
    display: ${({ shouldRender }) => shouldRender ? 'flex' : 'none'};
    flex-direction: column;
    max-height: 180px;
    min-height: 91px;
    width: 100%;
    max-width: 340px;
    background-color:white;
    margin: 0 auto;
    border-radius: 5px;
    margin-bottom: 10px; //a trocar depois talvez
    &:first-child(){
        margin-bottom: 28px; //a trocar depois talvez
    }
    /* &:last-child{
        background:black;
        margin-bottom: 101px; //a trocar depois talvez
    } */
    padding: 13px 18px 15px 18px;
`
const CreateHabit = styled.div`
    display: ${({ shouldRender }) => shouldRender ? 'flex' : 'none'};
    flex-direction: column;
    max-height: 180px;
    min-height: 91px;
    width: 100%;
    max-width: 340px;
    background-color:white;
    margin: 0 auto;
    border-radius: 5px;
    &:first-child(){
        margin-bottom: 28px; //a trocar depois talvez
    }
    margin-bottom: 10px; //a trocar depois talvez
    padding: 13px 18px 15px 18px;
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

const TextInputContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    background-color:white;
    &input
    {margin-top:5px;}
    & span{
        font-size: 19.976px;
        line-height: 25px; 
        color:#666666;
    }

`