import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../services";
import dayjs from "dayjs";
const TodoContext = createContext({})
const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
export function TodoProvider({ children }) {
    const navigate = useNavigate()
    const [state, setState] = useState(() => {
        const initialState = {}
        const user = JSON.parse(localStorage.getItem('user'))
        const weekDay = days[dayjs().get('day')]
        const dateFormated = dayjs().format("DD/MM")
        initialState['user'] = user
        return {
            ...initialState,
            email: "",
            password: "",
            todaysIntialMessage: `${weekDay}, ${dateFormated}`,
            loginErrorMessage: false,
            alreadyLogedIn: false,
            loading: false,
            todaysHabits: [],
            habitsList: [],
            percentage: 0,
            idForDeleting: null,
            newHabit: { name: "", days: [false, false, false, false, false, false, false], openCreateHabitTab: false, daysToRender: ["D", "S", "T", "Q", "Q", "S", "S"] }
        }
    })
    console.log(state)
    function setUser(user) {
        setState(prev => ({ ...prev, user }))
    }

    function setEmail(email) {
        setState(prev => ({ ...prev, email }))
    }
    function setPassword(password) {
        setState(prev => ({ ...prev, password }))
    }
    function setLoginErrorMessage(bol) {
        setState(prev => ({ ...prev, loginErrorMessage: bol }))
    }
    function setAlreadyLogedIn(bol) {
        setState(prev => ({ ...prev, alreadyLogedIn: bol }))
    }
    function setLoading(bol) {
        setState(prev => ({ ...prev, loading: bol }))
    }
    function setOpenCreateHabitTab() {
        const newState = { ...state }
        const toggle = !newState.newHabit.openCreateHabitTab
        setState(prev => ({ ...prev, newHabit: { ...prev.newHabit, openCreateHabitTab: toggle } }))
    }
    function setNewHabitName(name) {
        const newState = { ...state }
        newState.newHabit.name = name
        setState(prev => newState)
    }
    function setNewHabitDays(i) {
        const newState = { ...state }
        newState.newHabit.days = newState.newHabit.days.map((item, index) => index === i ? !item : item)
        setState(prev => newState)
    }
    function setHabitsList(obj) {
        const newState = { ...state }
        console.log(obj)
        console.log("aqui", newState.habitsList)
        newState.habitsList.push(obj)
        newState.newHabit.openCreateHabitTab = false
        setState(prev => newState) 
    }
    useEffect(() => {
        if (state.user === null) return
        (async function getUserInfo() {
            const newState = { ...state }
            const todaysHabitsResponse = await services.getTodayHabits(state.user.token)
            const todaysHabitsJson = await todaysHabitsResponse.json()
            newState['todaysHabits'] = todaysHabitsJson
            const listHabitsResponse = await services.listHabit(state.user.token)
            const listHabitsJson = await listHabitsResponse.json()
            newState['habitsList'] = listHabitsJson
            setState(prev => ({ ...newState }))
        })()

    }, [state.user, navigate])

    async function signIn(e) {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await services.login(state.email, state.password)
            let receivedBody = await response.json()
            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(receivedBody))
                setUser(receivedBody)
                navigate('/hoje')
            } else {
                alert(receivedBody.message)
                setLoginErrorMessage(true)
            }
        } catch (e) {
            console.log(e)
        }
        setLoading(false)
    }
    async function deleteHabit(id) {
        const shouldContinue = window.confirm("Você realmente gostaria de apagar este hábito?")
        console.log(id)
        if (!shouldContinue) return
        const newHabitsLists = state.habitsList.filter(item => item.id !== id)
        const newTodaysHabits = state.todaysHabits.filter(item => item.id !== id)
        setState((prev) => ({ ...prev, habitsList: newHabitsLists, todaysHabits:newTodaysHabits, idForDeleting: id }))
    }
    useEffect(() => {
        (async function deleteHabitUpdate() {
            if (state.idForDeleting === null) return
            try {
                const response = await services.deleteHabit(state.idForDeleting, state.user.token)
                if (!response.ok) {
                    setState(prev => ({ ...prev, idForDeleting: null }))
                    alert('Aconteceu um problema e seu hábito não pode ser apagado')
                } else {
                    console.log("deu boa")
                
                }

            } catch (error) {
                console.log(error)
            }
        })()
    }, [state.idForDeleting])
    function setHabitID(id) {
        const newState = { ...state }
        for (let i = 0; i < newState.habitsList.length; i++) {
            if (newState.habitsList[i].id === -2) {
                newState.habitsList[i].id = id
                break
            }
        }
        newState.newHabit = { name: "", days: [false, false, false, false, false, false, false], openCreateHabitTab: false, daysToRender: ["D", "S", "T", "Q", "Q", "S", "S"] }
        setState(prev => newState)
    }
    function closeContainerCreateHabit(){
        const newState = {...state}
        newState.newHabit.openCreateHabitTab=false
        setState(newState)
    }
    async function createHabit() {
        setLoading(true)
        if (state.newHabit.name.length===0){
            alert("preencha com algum valor válido")
            let newState = {...state}
            newState.loading=false
            newState.newHabit.openCreateHabitTab=false
            setState(prev=> newState)
            // setLoading(false)
            return
        }
        const formattedDays = [0, 1, 2, 3, 4, 5, 6, 7].reduce((acc, item, index) => {
            if (state.newHabit.days[item] === true) {
                acc.push(item)
            }
            return acc
        }, [])
        setHabitsList({ id: -2, name: state.newHabit.name, days: formattedDays })

    }
    useEffect(() => {
        (async function updateINFO() {
            try {
                let name, days;
                for (let i = 0; i < state.habitsList.length; i++) {
                    if (state.habitsList[i].id === -2) {
                        name = state.habitsList[i].name
                        days = state.habitsList[i].days
                        break
                    }
                }
                if (name === undefined || days === undefined) return

                const response = await services.createHabit(name, days, state.user.token)

                if (response.ok) {
                    const { id } = await response.json()
                    setHabitID(id)
                  } else {
                    const json =await response.json()
                    alert(json.details[0])
                    const newState = { ...state, openCreateHabitTab: false }
                    newState.habitsList = newState.habitsList.filter(item => item.id !== -2)
                    setState(prev => newState)
                }
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [setHabitID])

    async function setHatbitAsDone(id) {
        const newState = { ...state }
        let index;

        for (let i=0; i< newState.todaysHabits.length;i++){
            if (newState.todaysHabits[i].id===id) {
                index=i
                break;
            }
        }
        if (index ===undefined) return
        newState.todaysHabits[index].done = !newState.todaysHabits[index].done
        if (newState.todaysHabits[index].done ===true ){
            services.markHabitAsDone(id, state.user.token)
        } else {
            services.markHabitAsUnDone(id, state.user.token)
        }
        newState.percentage = Math.floor(newState.todaysHabits.filter(item=> item.done===true).length / newState.todaysHabits.length *100)
        setState(prev => newState)
    }
    
    return (<TodoContext.Provider value={{ state, setEmail, setPassword, signIn, ...{ user: state.user }, setUser, setAlreadyLogedIn, deleteHabit, closeContainerCreateHabit,setOpenCreateHabitTab, setNewHabitName, setNewHabitDays, createHabit, setHatbitAsDone }}>
        {children}
    </TodoContext.Provider>)
}


export function useTodo() {
    const context = useContext(TodoContext)
    return context
}