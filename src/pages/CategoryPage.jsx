import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import loadingSpinner from '../assets/loading.gif';
import { RecipeCard } from "../components/RecipeCard";

function CategoryPage() {
    const {categoryName} = useParams();
    const {data,loading,error} = useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+categoryName);
    
    console.log(data)
    return (
        <>
            <h2>{categoryName} Recipes</h2>
            
            {loading && 
                <p>
                <img src={loadingSpinner} /><br />
                Loading...
                </p>
            }

            {error && 
                <p>
                {error}
                </p>
            }

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