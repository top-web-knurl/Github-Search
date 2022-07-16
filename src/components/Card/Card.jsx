import React from "react";
import { Link } from "react-router-dom";


export const Card = ({user}) => {
    const {avatar_url, login} = user
    return (
        <div className="card">
        <img src={avatar_url} alt={''} className="card-image-top img-fluid" />
        <div className="card-body">
            <h5 className="card-title text-black mb-3">
                {login}
            </h5>
            <Link to={`/profile/${login}`} className="btn btn-dark">Открыть</Link>
        </div>
    </div>
    )
}
