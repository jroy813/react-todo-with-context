import React, { useContext, Component } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TodoItem = ({ todo }) => {
    const { id, title } = todo;
    const { deleteTodo, markComplete } = useContext(GlobalContext);
    return (
        <div>
            <p>
                <input type="checkbox" onChange={
                    () => {
                        markComplete(id);
                        console.log('Clicked the button');
                    }
                } />  {' '}
                { title }
                <button onClick={() => deleteTodo(id)}>x</button>
            </p>
        </div>
    );
}

export default TodoItem
