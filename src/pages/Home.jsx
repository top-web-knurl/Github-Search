import React from "react";
import { Card } from "../components/Card/Card";
import { Search } from "../components/Search/Search";


export const Home = () => {
    const cards = new Array(15)
        .fill('')
        .map((_, i) => i)
        console.log(cards);
    return (
        <>
            <div className=" mb-4">
                <Search />
            </div>

            <div className="row g-3">
                {cards.map(card => {
                  return <div className="col-lg-4 col-md-6 col-xs-12" key={card}>
                        <Card />
                    </div>
                })}
            </div>

        </>
    )
}