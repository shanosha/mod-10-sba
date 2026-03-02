import { createContext } from "react";

export const FavoritesContext = createContext(null);

export function AppProviders({children}) {

    
    return (
        <FavoritesContext.Provider>
            {children}
        </FavoritesContext.Provider>
    )
}