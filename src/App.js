import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

class App extends Component {
  
    render() { 
        const baseName = process.env.NODE_ENV === 'production' ? '/react/todo-context/' : '/';
        
        return (
            <GlobalProvider>
                <Router basename={baseName}>
                    <div className="App">
                        <div className="container">
                            <Header />
                            <Route exact path="/" render={props => (
                                <React.Fragment>
                                        <AddTodo />
                                        <Todos />
                                </React.Fragment>
                            )} />
                            <Route path="/about" component={About} />
                        </div>
                    </div>
                </Router>
            </GlobalProvider>
        );
    }
}
 
export default App;