import React, { useContext } from "react";
import { AlertContext } from "../../context/Alert/alertContext";

export const Alert = () => {
    const { alert, hide } = useContext(AlertContext)

    if (!alert) return null

    return (
        <div className={`alert alert-warning alert-${alert.type || 'secondary'} d-flex align-center justify-content-between`} role="alert">
            <strong>{alert.text || null}</strong>
            <button type="button" className="btn-close" aria-label="Close" onClick={hide}></button>
        </div>
    )

}
