import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    #root {
        * {
            box-sizing: border-box;
            font-family: 'Lexend Deca', sans-serif;
            font-weight: 400;
        }
        button {
            cursor:pointer;
        }
        a {
            text-decoration:none;
        }
    }
`

export default GlobalStyle