import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        
        <ul className="navbar">
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("wish_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">WishLists</Link>
            </li>
        </ul>
    )
}



{/* <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav> */}