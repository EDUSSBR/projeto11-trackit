export const services = {
    signUpURL: "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
    loginURL: "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
    habitsURL: "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
    todayURL: "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
    historyURL: "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily",
    signUp: async function signUp(email, name, password, imageSrc = 'https://pixabay.com/vectors/avatar-icon-placeholder-profile-2092113/') {
        const headers = new Headers()
        headers.append("Content-Type", 'application/json')
        return await fetch(services.signUpURL, { method: "POST", headers, body: JSON.stringify({ name, email, image: imageSrc, password }) })
    },
    login: async function login(email, password) {
        const headers = new Headers()   
        headers.append("Content-Type", 'application/json')
        return await fetch(services.loginURL, { method: "POST", headers, body: JSON.stringify({  email,  password }) })
    },
    createHabit: async function createHabit(name, days, token) {
        const headers = new Headers()   
        headers.append("Content-Type", 'application/json')
        headers.append("Authorization", `Bearer ${token}`)
        return await fetch(services.habitsURL, { method: "POST", headers, body: JSON.stringify({  name,  days }) })
    },
    listHabit: async function listHabit(token) {
        const headers = new Headers()   
        headers.append("Content-Type", 'application/json')
        headers.append("Authorization", `Bearer ${token}`)
        return await fetch(services.habitsURL, { method: "GET", headers })
    },
    deleteHabit: async function deleteHabit(id,token) {
        const headers = new Headers()   
        headers.append("Content-Type", 'application/json')
        headers.append("Authorization", `Bearer ${token}`)
        return  await fetch(services.habitsURL+`/${id}`, { method: "DELETE", headers })
    },
    getTodayHabits: async function getTodayHabits(token) {
        const headers = new Headers()   
        headers.append("Content-Type", 'application/json')
        headers.append("Authorization", `Bearer ${token}`)
        return await fetch(services.todayURL, { method: "GET", headers })
    },
    markHabitAsDone: async function markHabitAsDone(id,token) {
        const headers = new Headers()   
        headers.append("Content-Type", 'application/json')
        headers.append("Authorization", `Bearer ${token}`)
        return await fetch(services.habitsURL+`/${id}/check`, { method: "POST", headers })
    },
    markHabitAsUnDone: async function markHabitAsUnDone(id,token) {
        const headers = new Headers()   
        headers.append("Content-Type", 'application/json')
        headers.append("Authorization", `Bearer ${token}`)
        return await fetch(services.habitsURL+`/${id}/uncheck`, { method: "POST", headers })
    },
    getHistory: async function getHistory(token) {
        const headers = new Headers()   
        headers.append("Content-Type", 'application/json')
        headers.append("Authorization", `Bearer ${token}`)
        return await fetch(services.historyURL, { method: "GET", headers })
    },

}

// async function callSignUp() {
//     let response = await services.getHistory('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQ0NiwiaWF0IjoxNjc5MDA2MzczfQ.OGqTj6KMF5fq9lAYWt_V6uDn_wjV_eugAzupd23a_gM')
//     // let response = await services.markHabitAsUnDone(54552,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQ0NiwiaWF0IjoxNjc5MDA2MzczfQ.OGqTj6KMF5fq9lAYWt_V6uDn_wjV_eugAzupd23a_gM')
//     // let response = await services.markHabitAsDone(54552,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQ0NiwiaWF0IjoxNjc5MDA2MzczfQ.OGqTj6KMF5fq9lAYWt_V6uDn_wjV_eugAzupd23a_gM')
//     // let response = await services.getTodayHabits('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQ0NiwiaWF0IjoxNjc5MDA2MzczfQ.OGqTj6KMF5fq9lAYWt_V6uDn_wjV_eugAzupd23a_gM')
//     // let response = await services.deleteHabit('54551','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQ0NiwiaWF0IjoxNjc5MDA2MzczfQ.OGqTj6KMF5fq9lAYWt_V6uDn_wjV_eugAzupd23a_gM')
//     // let response = await services.listHabit('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQ0NiwiaWF0IjoxNjc5MDA2MzczfQ.OGqTj6KMF5fq9lAYWt_V6uDn_wjV_eugAzupd23a_gM')
//     // let response = await services.createHabit("My second habit", [1,3,5], 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQ0NiwiaWF0IjoxNjc5MDA2MzczfQ.OGqTj6KMF5fq9lAYWt_V6uDn_wjV_eugAzupd23a_gM')
//     // let response = await services.login("bls.dudu@gmail.com", "drivenrules")
//     // let response = await services.signUp("bls.dudu@gmail.com", "Eduardo Souto dos Santos", "drivenrules")
//     return response
// }
// callSignUp().then(console.log)



