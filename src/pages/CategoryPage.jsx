import { useParams } from "react-router-dom"

function CategoryPage() {
    const {categoryName} = useParams();
    return (
        <>
            <h1>{categoryName} Category</h1>
        </>
    )
}

export { CategoryPage }