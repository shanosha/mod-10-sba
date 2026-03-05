import { RecipeCard } from "../components/RecipeCard";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Section } from "../components/Section";

function FavoritesPage() {

    const {favorites} = useContext(FavoritesContext)
    console.log("favorites: ",favorites)
    return (
        <>
            <h2>{"Favorite Recipes"}</h2>

            <Section>

                {favorites.length>0 ?
                    <ul>
                        {favorites.map(element => 
                            <RecipeCard key={element.idMeal} meal={element} />
                        )}
                    </ul>
                    :
                    <p>
                    You don't currently have any meals saved to your favorites list.
                    </p>
                }

            </Section>

        </>
    )
}

export { FavoritesPage }