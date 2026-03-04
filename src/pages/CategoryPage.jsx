import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { RecipeCard } from "../components/RecipeCard";
import { ErrorMessage } from "../components/ErrorMessage";
import { Spinner } from "../components/Spinner";
import { H2 } from "../components/H2";

function CategoryPage() {
    const {categoryName} = useParams();
    const {data,loading,error} = useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+categoryName);
    
    return (
        <>
            <H2 text={`${categoryName} Recipes`} />
            
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