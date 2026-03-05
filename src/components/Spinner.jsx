import loadingSpinner from '../assets/loading.gif';

function Spinner () {
    return (
        <p className='loading'>
            <img src={loadingSpinner} /><br />
            Loading...
        </p>
    )
}

export { Spinner }