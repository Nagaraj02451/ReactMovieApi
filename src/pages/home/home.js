import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MovieList from "../../components/movieList/movieList";

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => {
            setPopularMovies(data.results)

            console.log(data.results);
        }
        )

    }, [])

    return (
        <>
            <div className="poster">
                <Carousel>
                    {
                        popularMovies.map(movie => (
                            <>
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie.original_title}</div>
                                    <div className="posterImage__runtime">
                                        { movie.release_date }
                                        <span id="fas" className="posterImage__rating">
                                            {movie.vote_average}
                                            <i className="fas fa-star"  />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie.overview }</div>
                                </div>
                                </>
                        ))
                    }
                </Carousel>
                <MovieList />
            </div>
        </>
    )
}

export default Home