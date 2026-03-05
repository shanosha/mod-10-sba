import { NavBar } from "./NavBar"

function Header () {
    return (
        <>
            <header className="flex gap-8 items-end">
                <h1 className="text-2xl sm:text-3xl font-bold">Recipe App</h1>
                <NavBar />
            </header>
        </>
    )
}

export { Header }