import React, { useContext } from "react";
import { AlertContext } from "../../context/Alert/alertContext";

export const Search = () => {
    const { show } = useContext(AlertContext)
    const onSubmit = (e) => {
        if (e.key === 'Enter') {
            show('Внимание вы нажали ' + e.key + '!!!')
        }
    }
    return (

        <div className="Search">
            <h1 className="mb-3">Поиск</h1>
            <input onKeyPress={onSubmit} type="search" className="form-control form-control-dark" placeholder="Введите ник пользователя" aria-label="Search" />
        </div>
    )
}
