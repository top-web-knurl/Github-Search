import React from "react";

export const About = () => {
    return (
        <div className="About">
            <h1>Информация о приложении</h1>
            <p>Версия: 1.0 <strong>Release</strong></p>
            <p>
                <span>Приложение разрабатывалось c использованием технологии </span>
                <a href="https://ru.reactjs.org/docs/getting-started.html"
                    target="_blank"
                    rel="noopener noreferrer">
                    React.
                </a>
            </p>
            <p>
                По видео урокам
                <a
                    href="https://www.youtube.com/c/VladilenMinin"
                    target="_blank"
                    rel="noopener noreferrer">
                    <span> Владилена Минина </span>
                </a>
                , но с собственными доработками.
            </p>
            <a
                className="btn btn-outline-light"
                href="https://github.com/top-web-knurl"
                target="_blank"
                rel="noopener noreferrer"
            >Мой репозиторий</a>
        </div>
    )
}