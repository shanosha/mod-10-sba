import { cn } from "../utils/utils"

function H2 ({text}) {
    return (
        <>
            <h2 className={cn()}>{text}</h2>
        </>
    )
}

export { H2 }