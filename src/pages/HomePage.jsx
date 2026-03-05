import { useFetch } from "../hooks/useFetch";
import { ErrorMessage } from "../components/ErrorMessage";
import { Spinner } from "../components/Spinner";
import { CategoryCard } from "../components/CategoryCard";
import { Section } from "../components/Section";

function HomePage() {
    const {data,loading,error} = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");

    return (
        <>
            <h2>{"Recipe Categories"}</h2>

            <Section>

                {loading && <Spinner />}

                {error && <ErrorMessage error={error} />}

                {data &&
                    <ul>
                        {data.categories.map(element =>
                            <CategoryCard key={element.idCategory} element={element} />
                        )}
                    </ul>
                }

            </Section>
        </>
    )
}

export { HomePage }