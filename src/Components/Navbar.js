import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <Link class="navbar-brand" to="/">Logo</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/About">About </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Services">Services </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Blogs">Blogs </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Contact">Contact </Link>
                            </li>


                        </ul>

                    </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar