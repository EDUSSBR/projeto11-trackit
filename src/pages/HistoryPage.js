import { Calendar } from "react-calendar";
import styled from "styled-components";
import { TitleBar } from "../components/TitleBar";

export function HistoryPage() {
    return <>
        <TitleBar text={"Histórico"} buttonShouldRender={false}/>
        <CalendarContainer data-test="calendar">
            <Calendar  calendarType={'US'}/>
        </CalendarContainer>
    </>
}

const CalendarContainer = styled.div`
    max-width: 335px;
    margin:11px auto 0 auto;
    background-color:white;
    border-radius:10px;
    .react-calendar{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            background-color:white;
            width: 100%;
            button {
                font-size:13px; 
                border: 1px solid transparent;
                background-color:inherit;
            }
            *{
                background-color:transparent;
            }
    }

    .react-calendar__month-view__days{
        margin-bottom: 5px;
        display: flex;
        flex-wrap:wrap;
        width: calc(100% / 7);
        justify-content: center;
        gap:8px;
        button.react-calendar__tile{
            border-radius:50%;
            max-width:40px;
            height:40px;
            margin-bottom: 5px;
            background-color:#8CC654;
            abbr{
                font-size:16px;
                color: black;
                font-weight:400;
                /* color: #b1bfd3; */
            }
        }
    }
    .react-calendar__month-view__weekdays{
        font-weight:bolder;
        text-transform: uppercase;
        width: 100%;
        text-align:center;
        margin-bottom: 12px;
    }
    .react-calendar__navigation{
        width: 100%;
        display: flex;
        border: 1px solid transparent;
        background-color: transparent;
        margin-bottom:25px;
        margin-top: 5px;
    }

    .react-calendar__month-view__days  {
        width:100%;
        height:100%;
    }
    .react-calendar__month-view__days button {
        border:none;
        border-radius:50%;
    }

`