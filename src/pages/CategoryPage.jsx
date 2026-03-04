import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { RecipeCard } from "../components/RecipeCard";
import { ErrorMessage } from "../components/ErrorMessage";
import { Spinner } from "../components/Spinner";

function CategoryPage() {
    const {categoryName} = useParams();
    const {data,loading,error} = useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+categoryName);
    
    return (
        <>
            <h2>{categoryName} Recipes</h2>
            
            {loading && <Spinner />}

            {error && <ErrorMessage error={error} />}

            {data &&
                <ul>
                    {data.meals.map(element => 
                        <RecipeCard key={element.idMeal} meal={element} />
                    )}
                </ul>
            }
        </>
    )
}

export { CategoryPage }