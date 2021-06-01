import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = ({ dogNames }) => {
    
    return (
        <nav>
            <NavLink exact to="/dogs">Home</NavLink>
            { dogNames.map(name => <NavLink exact key={name} to={`/dogs/${name}`}>{ name }</NavLink>)}
        </nav>
    );
};

export default NavBar;