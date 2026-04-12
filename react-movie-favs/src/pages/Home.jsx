import MovieCard from "../components/MovieCards"

function Home() {
    const mymovies= [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "1997"},
        {id: 3, title: "The Matrix", release_date: "1999"},
    ]

    const handleSearch = () => {

    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for movies" 
            className="search-input"/>
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {mymovies.map((eachmovie) => (
                <MovieCard movie={eachmovie} key={eachmovie.id}/>
            ))}
        </div>
    </div>
}

export default Home