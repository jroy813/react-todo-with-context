import React, { useContext, Component } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTodo = () => {
    const { addTodo } = useContext(GlobalContext);
    const state = {
        title: ''
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }
    return (
        <form onSubmit={this.onSubmit()} style={{display: 'flex'}}>
            <input 
            type="text" 
            name="title" 
            style={{ flex: '10', padding: 10 }}
            placeholder="Add Todo ..." 
            value={this.state.value}
            onChange={this.setState({ title: e.target.value })}
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
