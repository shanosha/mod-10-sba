import { Outlet } from "react-router-dom"
import { cn } from "../utils/utils"

function Section ({className="",children}) {
    return (
        <section className={cn(className)}>
            {children}
        </section>
    )
}

export { Section }