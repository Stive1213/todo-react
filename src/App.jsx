import React, {Component} from "react";
import { Container, Row, Col, Button, InputGroup, FormControl, ListGroup } from "react-bootstrap";


class App extends component {
constructor(props) {
  super(props);

  this.state = {
    userInput: "",
    list:[],
  };
}

updateInput(value){
  this.setState({
    userInput: value,
  });
}
addItem(){
  if(this.state.userInput !== "") {
    const userInput = {
      id: math.random(),
      value: this.state.userInput,
    };
    const list = [...this.state.list];
    list.push(userInput);

    this.setState({
      list,
      userInput:"",
    });
  }
}

deleteItem(key) {
  const list = [...this.state.list];
  const updateList = list.filter((item) => item.id !== key)

  this.setState({
    list: updateList,
   });

}

  
editItem = (index) => {
  const todos = [...this.state.lest];
  const editedTodo = prompt('edit the todo:');
  if (editedTodo !== null && editedTodo.trim() !== '')
  {
    let updatedTodos = [...todos]
    updatedTodos[index].value = editedTodo;
    this.setState({
      list: updatedTodos,
    });
  }
}




}
export default App;