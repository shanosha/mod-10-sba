import './App.css'
import { AppProviders } from './AppProviders'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { CategoryPage } from './pages/CategoryPage'
import { RecipeDetailPage } from './pages/RecipeDetailPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {

  return (
    <>
    <AppProviders>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}>
              <Route index element={<HomePage />} />
              <Route path="category/:categoryName" element={<CategoryPage />} />
              <Route path="recipe/:recipeId" element={<RecipeDetailPage />} />
              <Route path="favorites" element={<FavoritesPage />} />
            </Route>
        </Routes>
    </AppProviders>
    </>
  )
}

export default App
