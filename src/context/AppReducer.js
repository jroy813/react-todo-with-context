export default(state, action) => {
    switch(action.type) {
        
        case 'MARK_COMPLETE_TODO' :
            console.log('Ran completed action');
            return {
                todos: state.todos.map(todo => {
                    if( todo.id === action.payload ) {
                        return { ...todo, completed: !todo.completed };
                    }
                    return todo;
                })
            }
            
            case 'DELETE_TODO' :
                console.log('Ran delete action');
                return {
                    ...state,
                    todos: state.todos.filter(todo => todo.id !== action.payload)
                }
                
            case 'ADD_TODO' :
                console.log('Ran add action');
                return {
                    ...state,
                    todos: [action.payload, ...state.todos]
                }
            
        default: 
            return state;
    }
}