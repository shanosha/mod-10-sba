import { Outlet } from "react-router-dom"
import { cn } from "../utils/utils"

function Section ({children}) {
    return (
        <>
            <section className={cn()}>
                {children}
            </section>
        </>
    )
}

export { Section }