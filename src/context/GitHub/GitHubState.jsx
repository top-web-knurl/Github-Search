import React, { useReducer } from 'react';
import { GitHubContext } from './gitHubContext';
import { gitHubReducer } from './gitHubReducer';

export const GitHubState = ({ children }) => {
    const initialState ={
        user: {},
        users: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(gitHubReducer, initialState)

    return (
        <GitHubContext.Provider
            value={{

            }}
        >
            {children}
        </GitHubContext.Provider>
    )
}