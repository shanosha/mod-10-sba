// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { AppProviders } from './AppProviders'
import { Routes, Route, NavLink } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { CategoryPage } from './pages/CategoryPage'
import { RecipeDetailPage } from './pages/RecipeDetailPage'
import { FavoritesPage } from './pages/FavoritesPage'

function App() {

  return (
    <>
    <AppProviders>
      <h1>App</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              style={(isActive)=>({
                color: isActive ? 'red' : ''
              })}>
                Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/favorites'
              style={(isActive)=>({
                color: isActive ? 'red' : ''
              })}>
                Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </AppProviders>
    </>
  )
}

export default App
