import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    todos: [
        {
        "id": 1,
        "title": "test first list item",
        "completed": false
        },
        {
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
        },
        {
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
        },
        {
        "id": 4,
        "title": "et porro tempora",
        "completed": true
        },
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    // Actions
    function deleteTodo(id) {
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        });
    }
    
    function markComplete(id) {
        dispatch({
            type: 'MARK_COMPLETE_TODO',
            payload: id
        });
    }
    
    function addTodo(title) {
        dispatch({
            type: 'ADD_TODO',
            payload: title
        });
    }
    
    return(<GlobalContext.Provider value={{
        todos: state.todos,
        deleteTodo,
        addTodo,
        markComplete,
    }}>
        {children}
    </GlobalContext.Provider>);
}