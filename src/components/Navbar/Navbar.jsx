import React from "react";


export const Navbar = () => (
    <div className="container-fluid">
        <div className="row">
            <nav className="navbar  navbar navbar-dark bg-dark navbar-expand-lg gx-5">
                <div className="navbar-brand">
                    Github Поиск
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="/" className="nav-link">Главная</a></li>
                    <li className="nav-item"><a href="/a" className="nav-link">FAQ</a></li>
                </ul>
            </nav>
        </div>
    </div>
)