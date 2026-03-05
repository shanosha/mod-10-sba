import { RecipeCard } from "../components/RecipeCard";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { H2 } from "../components/H2";
import { Section } from "../components/Section";

function FavoritesPage() {

    const {favorites} = useContext(FavoritesContext)
    console.log("favorites: ",favorites)
    return (
        <>
            <H2 text={"Favorite Recipes"} />

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