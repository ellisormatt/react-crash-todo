import React from 'react';
import './App.css';
import Todos from './Components/Todos';


class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Sample task 1',
        completed: true
      },
      {
        id: 2,
        title: 'Sample task 2',
        completed: true
      },
      {
        id: 3,
        title: 'Sample task 3',
        completed: false
      },
    ]
  }
  
  render () {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
