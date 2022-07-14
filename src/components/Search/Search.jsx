import React, { useContext, useState } from "react";
import { AlertContext } from "../../context/Alert/alertContext";
import { GitHubContext } from "../../context/GitHub/gitHubContext";

export const Search = () => {
    const alert = useContext(AlertContext)
    const giHub = useContext(GitHubContext)
    const [value, setValue] = useState('')
    // useState хук для стейта, 
    // value сам state, 
    // setValue - функция для изменения стейта
    const onSubmit = (e) => {
        if (e.key !== 'Enter') {
            return
        }
        giHub.clearUsers()
        if (value.trim()) {
            alert.hide()
            giHub.search(value.trim())
        } else {
            alert.show('Введите данные пользователя')

        }
    }

    return (

        <div className="Search">
            <h1 className="mb-3">Поиск</h1>
            <input
                onKeyPress={onSubmit}
                value={value}
                onChange={e => setValue(e.target.value)}
                type="search"
                className="form-control form-control-dark"
                placeholder="Введите ник пользователя" aria-label="Search" />
        </div>
    )
}
