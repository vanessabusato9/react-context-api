import { NavLink } from "react-router-dom";
import { useContext } from "react";
import BudgetContext from "../contexts/BudgetContext";

function Navbar() {
    const { BudgetMode, setBudgetMode } = useContext(BudgetContext);

    return <div id="navbar">
        <nav className="links">
            <NavLink className="link" to="/">Homepage</NavLink>
            <NavLink className="link" to="/about">About Us</NavLink>
            <NavLink className="link" to="/products">Products</NavLink>
        </nav>

        <button onClick={() => setBudgetMode(!BudgetMode)}>
            {BudgetMode
                ? "Disattiva Modalità Budget"
                : "Attiva Modalità Budget"}
        </button>
    </div>
}

export default Navbar;