import { useEffect, useState } from "react"
import { get } from "../data/httpClient"
import { MovieCard } from "../components/MovieCard"
import styles from "../components/ContextMovieCard.module.css"

export function ContextMovieCard(){
const [movies, setMovies] = useState([])
useEffect(() => {
    get("discover/movie").then((data) => {
        setMovies(data.results)
        console.log(data)
    })
},[])
    return(
        <ul className={styles.container}>
            {movies.map((movie)=>(
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    )
}