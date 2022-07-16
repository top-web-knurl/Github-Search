import React from "react";

export const Repos = ({ repos }) => (
    <div className="card mb-2">

        {repos.length
            ?
            <div className="card-body d-flex flex-wrap">
                <h2>Репозитории: </h2>
                <div>
                {repos.map(repo => (
                    <a
                        className="btn btn-dark m-1"
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={repo.id}
                    >
                        {repo.name}
                    </a>
                ))}
                </div>
            </div>
            :
            null
        }

    </div >
)