import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    max-width: 303px;
    height:45px;
    font-size:20px;
    text-align:left;
    &:disabled {
        background:#F2F2F2;
        color: #AFAFAF;
       opacity: 0.7;
    }
    &::placeholder{
        color: #DBDBDB;
    }
    &:focus, &:hover{
        border: 1px solid #126BA5;
        box-shadow: 0 0 3px #126aa576;
        outline-offset: 0px;
        outline: none;
    }

`