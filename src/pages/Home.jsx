import React from "react";
import { useContext } from "react";
import { Card } from "../components/Card/Card";
import { Search } from "../components/Search/Search";
import { Spinner } from "../components/Spinner/Spinner";
import { GitHubContext } from "../context/GitHub/gitHubContext";


export const Home = () => {
    const { loading, users } = useContext(GitHubContext)
    return (
        <>
            <div className=" mb-4">
                <Search />
            </div>

            <div className="row g-3">
           
                {loading
                    ?
                    <Spinner />
                    :
                    users.map(user => (
                        <div className="col-lg-4 col-md-6 col-xs-12" key={user.id}>
                            <Card user={user} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}