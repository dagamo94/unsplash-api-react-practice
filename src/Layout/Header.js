import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link to={`/`} className="navbar-brand">Navbar</Link>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}