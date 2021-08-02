import { Link } from "react-router-dom";
import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <Link to="/" className="title">
          MoviesForYou
        </Link>
        <Link to="favourite" className="favourites">
          Favourites
        </Link>
      </div>
      <div>
        <input type="text" placeholder="Search" className="search" />
        <button className="btn">Log out</button>
      </div>
    </div>
  );
}
