import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import loadingSpinner from '../assets/loading.gif';

function HomePage() {
    const {data,loading,error} = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");

    console.log(data)
    return (
        <>
            <h2>Categories</h2>

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
                    {data.categories.map(element => 
                        <li key={element.idCategory}>
                            
                            <h3>{element.strCategory}</h3>
                            <img src={element.strCategoryThumb} alt={element.strCategory} />
                            <p>{element.strCategoryDescription}</p>
                            <Link to={`/category/${element.strCategory}`}>{element.strCategory} Recipes</Link>
                        </li>
                    )}
                </ul>
            }
        </>
    )
}

export { HomePage }