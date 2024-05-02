import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Recommercio</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/users-list">Users</Link>
                </li>
            </ul>
            <form className="d-flex">
                <button className="btn btn-warning btn-sm me-2" type="submit">Cart</button>
                <Link className="btn btn-success btn-sm" to="/login">Login</Link>
            </form>

            </div>
        </div>
        </nav>


    </div>
  )
}

export default Navbar
