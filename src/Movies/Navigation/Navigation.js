import './Navigation.css';

import { Link } from "react-router-dom";

export default function Navigation() {
    return(
        <div className="navigation">
            <Link to="/">Movies</Link>
            <Link to="/details">Details</Link>
            <Link to="/favorites">Favorites</Link>
        </div>
    )
}