import { Link } from "react-router-dom";
import { cn } from "../utils/utils";

function CategoryCard({element}){
    return (
            <li className={cn("card")}>
                <h3>{element.strCategory}</h3>
                <img src={element.strCategoryThumb} alt={element.strCategory} />
                <p>{element.strCategoryDescription}</p>
                <Link to={`/category/${element.strCategory}`}>View {element.strCategory} Recipes</Link>
            </li>
    )
}

export { CategoryCard }