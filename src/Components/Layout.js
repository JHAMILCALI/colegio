import { Outlet,Link } from "react-router-dom";
const Layaut = ()=>{
    return<di>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/historia">Historia</Link>
                </li>
                <li>
                    <Link to="/la_salle">LA SAlle</Link>
                </li>
                <li>
                    <Link to="*">Default</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </di>
}
export default Layaut;