import { NavLink } from 'react-router-dom'
import { cn } from '../utils/utils'

function NavBar () {
    return (
        <>
            <nav>
                <ul className={cn("flex gap-4 justify-around")}>
                <li>
                    <NavLink
                    to='/'
                    style={({isActive})=>({
                        color: isActive ? 'red' : ''
                    })}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/favorites'
                    style={({isActive})=>({
                        color: isActive ? 'red' : ''
                    })}>
                        Favorites
                    </NavLink>
                </li>
                </ul>
            </nav>
        </>
    )
}

export { NavBar }