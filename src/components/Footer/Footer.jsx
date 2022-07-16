import React from "react";

export const Footer = () => (
    <footer className="bg-dark footer">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-dark  navbar-expand-lg justify-content-between">
                    <ul className="navbar-nav flex-row flex-wrap gap-3">
                        <a
                            className="nav-link"
                            href="https://github.com/top-web-knurl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Реализованно в учебных целях 2022-{new Date().getFullYear()}</a>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
)