import React from "react";

export const Alert = (props) => {


    return (
        <div className={`alert alert-warning alert-${props.type || 'secondary'} d-flex align-center justify-content-between`} role="alert">
            <strong>{props.text || null}</strong>
            <button type="button" className="btn-close"  aria-label="Close"></button>
        </div>
    )

}
