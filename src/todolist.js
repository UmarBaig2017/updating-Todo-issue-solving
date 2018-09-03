import React, { Component } from 'react'
import './App.css';
export default class Todo extends Component {
  constructor(props){
    super(props)
    this.state={
      localTodo : this.props.todo,
      updatingTodo : "",
      updatedTodo: "",
      value: this.props.value,
    }
   
  }
  handleEdit(index){
    let editTask= this.state.localTodo
 console.log(editTask)  
 let taskWhichEdit = editTask[index];
    <input type="text" value={taskWhichEdit}/>  
 console.log(taskWhichEdit)
 
  }
  handleDelete(index){
    console.log(index)
  console.log(this.state.localTodo)
        
         let tasks = this.state.localTodo;
        tasks.splice(index, 1);
        this.setState({
          localTodo: tasks,
          
        })
  }
  
  render() {
    const divStyle = {
      margin: '5px',
      border: '5px double pink'
    };
    return (
      <div> <div>
       <ul className="ul">
      {
        this.props.todo.map((items,index) => {
          return (
            <div>
            
            <li className="list" key={index}> {items} 
                <button className="EditButton" onClick={this.handleEdit.bind(this, index)}>Edit</button>
                <button className="DeleteButton" onClick={this.handleDelete.bind(this,index)}>Delete</button>
            </li>
            </div>
          )
        })
      }
       </ul>
        
        </div>
      </div>
    )
  }
}