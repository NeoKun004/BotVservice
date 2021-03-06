import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class CreateBotUser extends Component {
  
    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeBotUserName = this.onChangeBotUserName.bind(this);
        this.onChangeBotUserEmail = this.onChangeBotUserEmail.bind(this);
        this.onChangeBotUserRollno = this.onChangeBotUserRollno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          name: '',
          email: '',
          rollno: ''
        }
      }
    
      onChangeBotUserName(e) {
        this.setState({name: e.target.value})
      }
    
      onChangeBotUserEmail(e) {
        this.setState({email: e.target.value})
      }
    
      onChangeBotUserRollno(e) {
        this.setState({rollno: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()
    
        console.log(`BotUser successfully created!`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Roll no: ${this.state.rollno}`);
    
        this.setState({name: '', email: '', rollno: ''})
      }
      
    render() {

    return (<div class="form-wrapper">
      <Form>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create BotUser
        </Button>
      </Form>
    </div>);
  }
}