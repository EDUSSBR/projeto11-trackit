import { useTodo } from "../hooks/useTodo";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Shared({ children }) {
    const { user } = useTodo()
    return <>
        <Header profilePhotoUrl={user?.image}></Header>
        {children}
        <Footer></Footer>
    </>
}