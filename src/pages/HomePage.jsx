import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { Spinner } from "../components/Spinner";

function HomePage() {
    const {data,loading,error} = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");

    return (
        <>
            <h2>Categories</h2>

            {loading && <Spinner />}

            {error && <ErrorMessage error={error} />}

            {data &&
                <ul>
                    {data.categories.map(element => 
                        <li key={element.idCategory}>
                            <h3>{element.strCategory}</h3>
                            <img src={element.strCategoryThumb} alt={element.strCategory} />
                            <p>{element.strCategoryDescription}</p>
                            <Link to={`/category/${element.strCategory}`}>View {element.strCategory} Recipes</Link>
                        </li>
                    )}
                </ul>
            }
        </>
    )
}

export { HomePage }