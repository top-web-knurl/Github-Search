import React from "react";
import {
    Link
} from 'react-router-dom';


export const Navbar = () => (
    <header className="bg-dark">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-dark  navbar-expand-lg justify-content-between">
                    <div className="navbar-brand">
                        <Link className="text-white nav-link" to="/">Github Поиск</Link>
                    </div>
                    <ul className="navbar-nav flex-row flex-wrap gap-3">
                        <li className="nav-item"><Link to="/" className="nav-link">Главная</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">О нас</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
)