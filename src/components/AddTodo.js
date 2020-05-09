import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTodo = () => {
    const { addTodo } = useContext(GlobalContext);
    const [text, setText] = useState('');
    
    const onChange = e => {
        e.preventDefault();
        setText(e.target.value)
    }
    
    const onSubmit = e => {
        e.preventDefault();
        console.log('submitted');
        const newTodo = {
            id: Math.floor(Math.random() * 10000000),
            title: text,
            completed: false
        }
        
        addTodo(newTodo);
    }
    return (
        <form onSubmit={onSubmit} style={{display: 'flex'}}>
            <input 
            type="text" 
            name="title" 
            style={{ flex: '10', padding: 10 }}
            placeholder="Add Todo ..." 
            value={text}
            onChange={onChange}
            />
            <input 
            type="submit" 
            value="submit"
            className="btn"
            style={{ flex: '1'}}
            />
        </form>
    )
}

export default AddTodo
