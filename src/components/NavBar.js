import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './fire.png';

export default class NavBar extends Component {
 
    render() {
    return (
        <nav className="navbar shadow p-10 mb-5 bg-body-tertiary bg-dark fixed-top" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand mx-3" to="/" style={{fontSize:'30px'}}>
                    <img src="favicon.ico" alt="Logo" width="45" height="45" className="d-inline-block align-text-top"/>
                    Apna Akhbaar
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">News! 24x7</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Trending<img src={fire} alt="fire" width="20" height="20" className='d-inline-block mx-1'/></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Sports'>Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Entertainment'>Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Business'>Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Technology'>Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Science'>Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Health'>Health</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/World Affairs" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                World Affairs
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                {/* <li><Link className="dropdown-item" to="/China ">China</Link></li> */}
                                <li><Link className="dropdown-item" to="/France ">France</Link></li>
                                <li><Link className="dropdown-item" to="/Japan ">Japan</Link></li>
                                <li><Link className="dropdown-item" to="/Korea ">Korea</Link></li>
                                {/* <li><Link className="dropdown-item" to="/Germany ">Germany</Link></li> */}
                                <li><Link className="dropdown-item" to="/Russia ">Russia</Link></li>
                                <li><Link className="dropdown-item" to="/UK">UK</Link></li>
                                <li><Link className="dropdown-item" to="/USA ">USA</Link></li>
                            </ul>
                        </li>
                        </ul>
                        {/* <form className="d-flex mt-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </div>
        </nav>
    )
  }
}
