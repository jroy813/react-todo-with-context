import React, { useContext, Component } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TodoItem = ({ todo }) => {
    const { id, title, completed } = todo;
    const { deleteTodo, markComplete } = useContext(GlobalContext);
    
    return (
        <div style={{textDecoration: completed ? 'line-through' : 'none'}}>
            <p>
                <input type="checkbox" onChange={
                    () => {
                        markComplete(id);
                        console.log('Clicked the button');
                    }
                } checked={completed} />  {' '}
                { title }
                <button onClick={() => deleteTodo(id)} style={btnStyle}>x</button>
            </p>
        </div>
    );
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

const itemStyle = {
    backgroundColor: '#f4f4f4'
}

export default TodoItem
