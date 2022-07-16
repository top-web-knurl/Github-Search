import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner/Spinner";
import { GitHubContext } from "../context/GitHub/gitHubContext";


export const Profile = () => {
    const { getUser, getRepos, user, loading, repos } = useContext(GitHubContext)
    const { name: urlName } = useParams()


    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)

    }, [])

    const {
        name, company, avatar_url, location,
        bio, blog, login, html_url, follovers,
        publick_repos, publick_qists, following } = user

    console.log(user);

    if (loading) {
        <Spinner />
    }

    return (
        <>
            <Link to="/" className="btn btn-light">На главную</Link>
            {loading
                ?
                <Spinner />
                :
                <>
                    <div className="card mb-4 text-black mt-4">
                        <div className="card-body">
                            <div className="row">
                                <div className="text-center col-md-6">
                                    <img className="img-fluid rounded img-thumbnail" src={avatar_url} alt={login} />
                                    <div className="mt-2 mb-3">
                                        <a
                                            href={html_url}
                                            target="_blank" rel="noreferrer"
                                            className="btn btn-dark">
                                            Открыть профиль  {login ? <b>{login}</b> : null}
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h1>{name}</h1>
                                    <ul>
                                        {company ? <li >Компания: <b>{company}</b></li> : null}
                                        {location ? <li>Местоположение: <b>{location}</b></li> : null}
                                        {blog ? <li>Сайт: <b>{blog}</b></li> : null}
                                    </ul>
                                    {bio ? <div><h6>Биография:</h6> <p>{bio}</p></div> : null}
                                    <div className="d-flex flex-wrap gap-2 jusctify-content-center mt-4">
                                        <div className="badge bg-primary">
                                            Подписчики: {follovers || 0}
                                        </div>
                                        <div className="badge bg-success">
                                            Подписан: {following || 0}
                                        </div>
                                        <div className="badge bg-warning">
                                            Репозитории: {publick_repos || 0}
                                        </div>
                                        <div className="badge bg-info">
                                            Gists: {publick_qists || 0}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}