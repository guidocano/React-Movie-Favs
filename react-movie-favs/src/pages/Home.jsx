import MovieCard from "../components/MovieCards"
import {useState} from "react"

function Home() {
    const[searchQuery, setSearchQuery] = useState("");

    const mymovies= [
        {id: 1, title: "John Wick", release_date: "2020", },
        {id: 2, title: "Terminator", release_date: "1997", url:'https://http2.mlstatic.com/D_NQ_NP_2X_694159-MLA85463933601_052025-F.webp'},
        {id: 3, title: "The Matrix", release_date: "1999"},
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }

    return <div className="home">
    
    {/* Search Bar and button */}
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for movies" 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>

    {/* Cards for movies */}
        <div className="movies-grid">
            {mymovies.map((eachmovie) => (
                eachmovie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={eachmovie} key={eachmovie.id}/>
                )
            ))}
        </div>
        <br/>
        <p>Search Query: {searchQuery}</p>
    </div>
}


export default Home

// LAST TIME FINISHED WITH COMPONENT RENDERING MOVIES DEPENDING ON SEARCH BAR. NEXT ROUTNING. GOOD LUCK MATE! :)