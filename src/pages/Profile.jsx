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
        publick_repos, publick_qists } = user

    console.log(user);

    if (loading) {
        <Spinner />
    }

    return (
        <>
            {loading
                ?
                <Spinner />
                :
                <>
                    <Link to="/" className="btn btn-light">На главную</Link>
                    <div className="card mb-4 text-black mt-4">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-3 text-center">
                                    <img src="" alt="" />
                                    <h1>test </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}