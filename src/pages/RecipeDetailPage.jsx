import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import loadingSpinner from '../assets/loading.gif';

function RecipeDetailPage() {
    const {recipeId} = useParams();
    const {data,loading,error} = useFetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+recipeId);
    
    console.log(data)

    let displayMealData = false;
    const meal = {}
    if(data){
        console.log("data populated")

        const mealData = data.meals[0];
        
        // Filter for property names that include "strMeasure" and create an array of their values
        const measurements = Object.keys(mealData)
            .filter(key => key.includes('strMeasure'))
            .map(key => mealData[key])
        
        // Filter for property names that include "strIngredient" and create an array of their values
        const ingredients = Object.keys(mealData)
            .filter(key => key.includes('strIngredient'))
            .map(key => mealData[key])
        
        meal.name = mealData.strMeal;
        meal.img = mealData.strMealThumb;
        meal.ingredients = ingredients.filter((value)=>value!=="").map((value,index) => 
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
            
            {loading && 
                <div>
                    <h2>Recipe</h2>
                    <p>
                    <img src={loadingSpinner} /><br />
                    Loading...
                    </p>
                </div>
            }

            {error && 
                <div>
                    <h2>Recipe</h2>
                    <p>
                    {error}
                    </p>
                </div>
            }

            {displayMealData &&
                <>
                <h2>{meal.name}</h2>
                <img src={meal.img} alt={meal.name} />
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
                <li><span className="font-semibold">Area:</span> {meal.area}</li>
                <li><span className="font-semibold">Category:</span> {meal.category}</li>
                <li><span className="font-semibold">Meal Source:</span> {meal.source}</li>
                <li><span className="font-semibold">YouTube:</span> {meal.youTube}</li>
                <li><span className="font-semibold">Tags:</span> {meal.tags}</li>
                <li><span className="font-semibold">Creative Commons Confirmed:</span> {meal.creativeCommonsConfirmed}</li>
                <li><span className="font-semibold">Image Source:</span> {meal.imageSource}</li>
                <li><span className="font-semibold">Alternative Meal:</span> {meal.mealAlternate}</li>
                </ul>
                
                </>
            }

        </>
    )
}

export { RecipeDetailPage }