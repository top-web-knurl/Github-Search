import React from "react";

export const Spinner = (type = 'spinner-border', color = 'text-light') => (
    <div className="d-flex justify-content-center mt-5">
        <div className={`spinner-border ${color}`} role="status">
            <span className="visually-hidden">Загрузка...</span>
        </div>
    </div>
)