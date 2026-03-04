import loadingSpinner from '../assets/loading.gif';

function Spinner () {
    return (
        <p>
            <img src={loadingSpinner} /><br />
            Loading...
        </p>
    )
}

export { Spinner }