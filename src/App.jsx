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


}
export default App;