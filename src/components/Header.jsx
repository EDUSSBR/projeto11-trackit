import styled from "styled-components"
import { useTodo } from "../hooks/useTodo"

export function Header() {
    const { state: { user: { image } } } = useTodo()
    return (
        <HeaderContainer data-test="header">
            <Div>Trackit</Div>
            <img data-test="header" src={image} alt="profile" />
        </HeaderContainer>)
}
const Div = styled.h1`
background-color:inherit;
font-family: 'Playball';
height:49px;
max-width: 97px;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
color: white;
`
const HeaderContainer = styled.header`
    position: fixed;
    width:100%;
    top: 0px;
    left: 0px;
    padding: 10px 18px;
    display:flex;
    justify-content:space-between;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    & div:first-child {
        background-color:inherit;
        height:49px;
        max-width: 97px;
        img {
            width:100%;
            height:100%;
        }
    }
    & img:last-child {
        width:51px;
        height:51px;
        border-radius:50%;
    }
`