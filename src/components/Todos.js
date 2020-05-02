import React, { Component, useContext } from 'react';
import TodoItem from './TodoItem';
import { GlobalContext } from '../context/GlobalState';

export const Todos = () => {
    const { todos } = useContext(GlobalContext);
    console.log('Todos.js loaded - ', todos);
    return todos.map(
        (todo) => (
            <TodoItem key={todo.id} todo={todo} />
            )
    );
}

export default Todos;