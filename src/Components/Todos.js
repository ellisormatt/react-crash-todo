import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
    
    render () {
        return this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        ));
    }
}

//prop types defines props for the class
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;