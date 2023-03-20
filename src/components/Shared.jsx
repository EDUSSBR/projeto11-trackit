import { useTodo } from "../hooks/useTodo";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TitleBar } from "./TitleBar";

export function Shared({ children }) {
    const { user } = useTodo()
    return <>
        <Header profilePhotoUrl={user.image}></Header>
        {window.location.pathname ==="/historico" ? null:  <TitleBar />}        {children}
        <Footer></Footer>
    </>
}