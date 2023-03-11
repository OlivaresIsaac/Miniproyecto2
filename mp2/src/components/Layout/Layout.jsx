import { Outlet } from "react-router";
import { UserContextProvider } from "../../contexts/UserContext";
import Navbar from "../Navbar/Navbar";
import './Layout.css'

export function Layout(){
    return(
        <div> 
            <main className="main_flex">
                <UserContextProvider> 
                <Navbar/>
                <section className="body main-body">
                    <Outlet />
                </section>
                </UserContextProvider>
            </main>
        </div>
    )
}