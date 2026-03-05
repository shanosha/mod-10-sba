import { Outlet } from "react-router-dom"
import { cn } from "../utils/utils"

function Main () {
    return (
        <>
            <main className={cn( "my-8" )}>
                <Outlet />
            </main>
        </>
    )
}

export { Main }