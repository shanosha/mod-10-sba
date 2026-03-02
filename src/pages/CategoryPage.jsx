import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import loadingSpinner from '../assets/loading.gif';

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
                        <li key={element.idMeal}>
                            
                            <h3>{element.strMeal}</h3>
                            <img src={element.strMealThumb} alt={element.strMeal} /><br />
                            <Link to={`/recipe/${element.idMeal}`}>Details</Link>
                        </li>
                    )}
                </ul>
            }
        </>
    )
}

export { CategoryPage }