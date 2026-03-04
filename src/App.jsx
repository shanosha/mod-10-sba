import './App.css'
import { AppProviders } from './AppProviders'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { CategoryPage } from './pages/CategoryPage'
import { RecipeDetailPage } from './pages/RecipeDetailPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { Header } from './components/Header'
import { Section } from './components/Section'

function App() {

  return (
    <>
    <AppProviders>
      <Section>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Section>
    </AppProviders>
    </>
  )
}

export default App
