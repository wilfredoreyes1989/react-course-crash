import { Link } from "react-router-dom";

function Nav() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users/rondldo">Ronaldo</Link>
        <Link to="/users/messi">Messi</Link>
        <Link to="/users/KingReyes1989">KingReyes</Link>
      </nav>
    );
}

export default Nav;