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
                        color: isActive ? 'blue' : '',
                        paddingBottom: isActive ? '5px' : '',
                        borderBottom: isActive ? '1px solid #646cff' : '5px'
                    })}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/favorites'
                    style={({isActive})=>({
                        color: isActive ? 'blue' : '',
                        paddingBottom: isActive ? '1px' : '',
                        borderBottom: isActive ? '1px solid #646cff' : '5px'
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