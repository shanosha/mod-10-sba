import { FavoritesContext } from "./context/FavoritesContext"
import { useLocalStorage } from "./hooks/useLocalStorage";

export function AppProviders({children}) {
    const [favorites,setFavorites] = useLocalStorage("favoriteRecipes",[]);

    const addFavorite = (meal) => {setFavorites((prev)=>[...prev,meal])}

    const removeFavorite = (meal) => setFavorites((prev)=>prev.filter((fav)=>
        fav.idMeal!==meal.idMeal
    ));

    const isFavorite = (meal) => {
        if(favorites.length>0){return favorites.some(fav => fav.idMeal === meal.idMeal)}
        else {return false;}
    }
    
    return (
        <FavoritesContext.Provider value={{favorites,addFavorite,removeFavorite,isFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}