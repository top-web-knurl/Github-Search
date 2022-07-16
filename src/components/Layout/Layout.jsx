import React from "react";

export const Layout = ({ children }) => (
    <main className="g-4 mt-5 mb-5">
        <div className='container'>
            <div className="row">
                <div className="bg-dark h-100 p-lg-5 p-md-4 p-3 text-white bg-dark rounded-3">
                    {children}
                </div>
            </div>
        </div>
    </main>
)