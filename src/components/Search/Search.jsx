import React, { useContext, useState } from "react";
import { AlertContext } from "../../context/Alert/alertContext";

export const Search = () => {
    const { show } = useContext(AlertContext)
    const [value, setValue] = useState('')
    // useState хук для стейта, 
    // value сам state, 
    // setValue - функция для изменения стейта
    const onSubmit = (e) => {
        if (e.key !== 'Enter') {
            return
        }
        if (value.trim()) {
            console.log('Make request with', value)
        } else {
            show('Введите данные пользователя')
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
