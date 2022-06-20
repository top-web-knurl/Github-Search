import React from "react";
import { Link } from "react-router-dom";


export const Card = () => (
    <div className="card">
        <img src={''} alt={''} className="card-image-top" />
        <div className="card-body">
            <h5 className="card-title text-black">
                User name
            </h5>
            <Link to={'/profile/' + 'userid'} className="btn btn-dark">Открыть</Link>
        </div>
    </div>
)
