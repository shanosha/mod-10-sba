import { useFetch } from "../hooks/useFetch";
import { ErrorMessage } from "../components/ErrorMessage";
import { Spinner } from "../components/Spinner";
import { H2 } from "../components/H2";
import { CategoryCard } from "../components/CategoryCard";
import { Section } from "../components/Section";

function HomePage() {
    const {data,loading,error} = useFetch("https://www.themealdb.com/api/json/v1/1/categories.php");

    return (
        <>
            <H2 text={"Recipe Categories"} />

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