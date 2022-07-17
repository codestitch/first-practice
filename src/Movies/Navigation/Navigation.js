import './Navigation.scss';

import { Link } from "react-router-dom";

export default function Navigation() {
    return(
        <div className="navigation">
            <h1>Ghibli Movies</h1>
            <Link to="/">Lists</Link>
            <Link to="/favorites">Favorites</Link>
        </div>
    )
}