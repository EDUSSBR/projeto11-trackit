import styled from "styled-components"
import trackit from "../assets/TrackIt.svg"
import { useTodo } from "../hooks/useTodo"

export function Header() {
    const { state: { user: { image} } } = useTodo()
    return (
        <HeaderContainer data-test="header">
            <img src={trackit} alt="logo" />
            <img src={image} alt="profile" />
        </HeaderContainer>)
}

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
    & img:first-child {
        height:49px;
        max-width: 97px;
    }
    & img:last-child {
        width:51px;
        height:51px;
        border-radius:50%;
    }
`