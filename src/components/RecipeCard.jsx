import { Link } from "react-router-dom";

function RecipeCard({meal}){
    return (
        <li>
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb+"/medium"} alt={meal.strMeal} /><br />
            <Link to={`/recipe/${meal.idMeal}`}>Details</Link>
        </li>
    )
}

export { RecipeCard }