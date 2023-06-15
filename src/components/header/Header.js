import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><h1 className="TITLE"> N E T F L I X </h1></Link>
                <Link to="/movies/popular"><span>Famous</span></Link>
                <Link to="/movies/top_rated"><span>Top Rated</span></Link>
                <Link to="/movies/upcoming"><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header