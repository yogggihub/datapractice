import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <h5 className="pt-1">Logo</h5>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link" to="/">
                  Products
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="products">
              favourite
                </Link>
              </li>
            </ul>
          
          </div>
        </div>
      </nav>
      
  );
}
