import { NavLink } from 'react-router-dom'

function NavBar () {
    return (
        <>
            <nav>
                <ul>
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