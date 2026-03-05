import { Link } from "react-router-dom";
import { cn } from "../utils/utils";

function RecipeCard({meal}){
    return (
        <li className={cn("card")}>
            <img src={meal.strMealThumb+"/large"} alt={meal.strMeal} />
            <h3 className={cn("text-xl my-4")}>{meal.strMeal}</h3>
            <Link to={`/recipe/${meal.idMeal}`}>Details</Link>
        </li>
    )
}

export { RecipeCard }