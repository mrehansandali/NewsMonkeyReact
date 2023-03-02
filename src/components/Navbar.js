import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export class Navbar extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav className={`navbar navbar-expand-lg bg-light navbar-light`}>
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">News Monkey</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <NavLink className="nav-link active" to="/news">News</NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar