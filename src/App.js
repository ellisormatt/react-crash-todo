import React from 'react';
import './App.css';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import Header from './Components/layout/header';


class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Sample task 1',
        completed: false
      },
      {
        id: 2,
        title: 'Sample task 2',
        completed: false
      },
      {
        id: 3,
        title: 'Sample task 3',
        completed: false
      },
    ]
  }
  
  //toggle completed status on item
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  //delete todo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  render () {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    )
  }
}

export default App;
