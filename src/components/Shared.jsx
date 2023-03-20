import { useTodo } from "../hooks/useTodo";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Shared({ children }) {

    return <>
        <Header ></Header>
        {children}
        <Footer></Footer>
    </>
}