import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        width: 100%;
        height:100%;
    }
    * {
        box-sizing: border-box;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        color: #666666;
    }
    & div {
        width:100%;
        background-color:#f2f2f2;
    }
    button {
        cursor:pointer;
    }
    a {
        text-decoration:none;
    }    

`

export default GlobalStyle