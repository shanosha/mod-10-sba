import { createContext } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

export const FavoritesContext = createContext(null);

export function AppProviders({children}) {
    const [favorites,setFavorites] = useLocalStorage("favoriteRecipes")

    const addFavorite = (id) => setFavorites([...favorites,id])
    const removeFavorite = (id) => setFavorites(favorites.filter((fav)=>fav!==id))
    const isFavorite = (id) => favorites.find(id)
    
    return (
        <FavoritesContext.Provider value={{favorites,addFavorite,removeFavorite,isFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}