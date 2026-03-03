import { FavoritesContext } from "./context/FavoritesContext"
import { useLocalStorage } from "./hooks/useLocalStorage";

export function AppProviders({children}) {
    const [favorites,setFavorites] = useLocalStorage("favoriteRecipes",[])

    const addFavorite = (id) => {setFavorites([...favorites,id]);console.log("id=",id);}
    const removeFavorite = (id) => setFavorites(favorites.filter((fav)=>fav!==id))
    const isFavorite = (id) => {
        if(favorites.length>0){return favorites.includes(id);}
        else {return false;}
    }
    
    return (
        <FavoritesContext.Provider value={{favorites,addFavorite,removeFavorite,isFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}