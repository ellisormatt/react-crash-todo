import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    
    onChange = (e) => {
        this.setState({title: e.target.value});
        //console.log(e.target.value);
    }

    render() {
        return (
            <form style={{display: 'flex'}}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Add Todo ..." 
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.title}
                    onChange={this.onChange}></input>
                <input 
                    className="btn" 
                    type="submit" 
                    value="submit" 
                    style={{flex: '1'}}></input>
            </form>
        )
    }
}

export default AddTodo
