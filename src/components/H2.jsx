import { cn } from "../utils/utils"

function H2 ({text}) {
    return (
        <>
            <h2 className={cn("text-2xl my-4")}>{text}</h2>
        </>
    )
}

export { H2 }