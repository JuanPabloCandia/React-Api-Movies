import { useParams } from "react-router-dom"
import {get} from "../data/httpClient"
import { useEffect,useState } from "react"
import { GetMovieImg } from "../utils/getMovieImg"
import "../pages/MovieDetails.css"

export function MovieDetails(){
    const {movieId} = useParams()
    const [movie, setMovie] = useState([])
    useEffect(()=>{
        get("/movie/"+movieId).then((data)=>{
            setMovie(data)
        })
    },[movieId])
    const imageUrl = GetMovieImg(movie.poster_path,500)

    return(
        <div className="detailsContainer">
            <img src={imageUrl} alt={movie.title} className="col movieImage"/>
            <div className="col movieDeatils">
                <p className="title">
                    <strong>Título: </strong>
                    {movie.title}
                </p>
                <p>
                    <strong>Descripcíon: </strong>
                    {movie.overview}
                </p>
            </div>
        </div>
    )
}