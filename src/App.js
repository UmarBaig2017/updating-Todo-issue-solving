import React from 'react';

import './App.css';
import Todo from './todolist';


 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    value: '',
    TODOS: []

  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
   
    
  }

  handleSubmit(event) {
     let todo= this.state.value;
     console.log(todo);
     this.setState({
       value: ""
     })

     this.state.TODOS.push(todo)
     console.log(this.state.TODOS)
    event.preventDefault();
  }

  render() {
    return (
      <div className="inputForm">
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
         
          <input className="input" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input className="Addbutton" type="submit" value="Submit" />
      </form>
      </div>
      <Todo  todo={this.state.TODOS} values={this.state.value}/> 
      </div>
    );

  }
}

export default App;