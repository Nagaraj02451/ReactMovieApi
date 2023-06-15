import React  from "react"
import "./card.css"

const Cards = ({movie}) => {

    return <>
    {
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                <div className="cards__overlay">
                    <div className="card__title">{movie.original_title}</div>
                    <div className="card__runtime">
                        {movie.release_date}
                        <span className="card__rating">{movie.vote_average}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie.overview.slice}</div>
                </div>
            </div>
    
    }
    </>
}

export default Cards