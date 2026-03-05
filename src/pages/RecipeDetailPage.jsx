import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { ErrorMessage } from "../components/ErrorMessage";
import { Spinner } from "../components/Spinner";
import { Section } from "../components/Section";

function RecipeDetailPage() {
    const {recipeId} = useParams();
    const {data,loading,error} = useFetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+recipeId);
    const {addFavorite,removeFavorite,isFavorite} = useContext(FavoritesContext)
    
    let displayMealData = false;
    const meal = {}
    if(data){

        const mealData = data.meals[0];
        
        // Filter for property names that include "strMeasure" and create an array of their values
        const measurements = Object.keys(mealData)
            .filter(key => key.includes('strMeasure'))
            .map(key => mealData[key])
        
        // Filter for property names that include "strIngredient" and create an array of their values
        const ingredients = Object.keys(mealData)
            .filter(key => key.includes('strIngredient'))
            .map(key => mealData[key])
        
        meal.idMeal = mealData.idMeal;
        meal.strMeal = mealData.strMeal;
        meal.strMealThumb = mealData.strMealThumb;
        meal.ingredients = ingredients.filter((value)=>(value)&&(value!=="")).map((value,index) => 
            `${value} (${measurements[index]})`
        )
        meal.instructions = mealData.strInstructions;
        meal.source = mealData.strSource;
        meal.tags = mealData.strTags;
        meal.youTube = mealData.strYouTube;
        meal.area = mealData.strArea;
        meal.category = mealData.strCategory;
        meal.creativeCommonsConfirmed = mealData.strCreativeCommonsConfirmed;
        meal.imageSource = mealData.strImageSource;
        meal.mealAlternate = mealData.strMealAlternate;
        
        displayMealData = true;

    }
    
    return (
        <>
            
            {(loading || error) && 
                <>
                    <h2>{"Recipe"}</h2>

                    <Section>

                    {loading && <Spinner />}

                    {error && <ErrorMessage error={error} />}

                    </Section>

                </>
            }

            {displayMealData &&
                <>
                <h2>{meal.strMeal}</h2>

                <Section className="productDetails">

                    <img className="w-full" src={meal.strMealThumb} alt={meal.strMeal} /><br />

                    <div className="w-full">
                        <button id="favButton" onClick={()=>isFavorite(meal)?removeFavorite(meal):addFavorite(meal)}>{isFavorite(meal)?"Remove from Favorites":"Add to Favorites"} </button>
                        <h3>Ingredients</h3>
                        <ol>
                            {meal.ingredients.map((value,index) => 
                                <li key={index}>
                                    {value}
                                </li>
                            )}
                        </ol>
                        <h3>Instructions</h3>
                        <p>{meal.instructions}</p>
                        <h3>Other Details</h3>
                        <ul>
                            <li><span className="font-semibold inline-block my-1">Category:</span> <Link to={`/category/${meal.category}`}>{meal.category}</Link></li>
                            <li><span className="font-semibold inline-block my-1">Area:</span> {meal.area}</li>
                            <li><span className="font-semibold inline-block my-1">Meal Source:</span> <a href={meal.source} target="_blank">{meal.source}</a></li>
                            <li><span className="font-semibold inline-block my-1">YouTube:</span> {meal.youTube}</li>
                            <li><span className="font-semibold inline-block my-1">Tags:</span> {meal.tags}</li>
                            <li><span className="font-semibold inline-block my-1">Creative Commons Confirmed:</span> {meal.creativeCommonsConfirmed}</li>
                            <li><span className="font-semibold inline-block my-1">Image Source:</span> {meal.imageSource}</li>
                            <li><span className="font-semibold inline-block my-1">Alternative Meal:</span> {meal.mealAlternate}</li>
                        </ul>
                    </div>
                


                </Section>
                
                </>
            }

        </>
    )
}

export { RecipeDetailPage }